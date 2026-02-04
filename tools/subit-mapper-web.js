// subit-mapper-web.js
//
// Minimal browser‑ready SUBIT‑64 mapper.
// - Loads dictionary + examples via fetch()
// - Performs nearest‑example Jaccard similarity
// - Zero dependencies, fully transparent
//
// Usage:
//   const mapper = new SubitMapper();
//   await mapper.load();
//   const result = mapper.classify("soft warm lighting");
//   console.log(result);

class SubitMapper {
  constructor(config = {}) {
    this.dictUrl = config.dictUrl || "subit-dictionary-full.json";
    this.examplesUrl = config.examplesUrl || "subit-mapping-examples.json";

    this.dictionary = null;
    this.examples = null;
  }

  // ---------- Load JSON files ----------
  async load() {
    this.dictionary = await this._fetchJSON(this.dictUrl);
    this.examples = await this._fetchJSON(this.examplesUrl);
  }

  async _fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url}`);
    return await res.json();
  }

  // ---------- Tokenization ----------
  _tokenize(text) {
    return text
      .replace(/→|>/g, " ")
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
  }

  // ---------- Jaccard similarity ----------
  _jaccard(a, b) {
    const A = new Set(this._tokenize(a));
    const B = new Set(this._tokenize(b));
    if (A.size === 0 || B.size === 0) return 0;

    const intersection = [...A].filter(x => B.has(x)).length;
    const union = new Set([...A, ...B]).size;

    return intersection / union;
  }

  // ---------- Find best example ----------
  _bestExampleMatch(text) {
    let best = null;
    let bestScore = -1;

    for (const ex of this.examples.examples || []) {
      const score = this._jaccard(text, ex.input);
      if (score > bestScore) {
        bestScore = score;
        best = ex;
      }
    }

    return { best, score: bestScore };
  }

  // ---------- Main classification ----------
  classify(text) {
    if (!this.dictionary || !this.examples) {
      throw new Error("SUBIT mapper not loaded. Call await mapper.load() first.");
    }

    const { best, score } = this._bestExampleMatch(text);

    if (!best) {
      return {
        input: text,
        match_type: "none",
        similarity: 0,
        message: "No examples available."
      };
    }

    const primary = best.primary;
    const archetype = this.dictionary[primary] || {};

    const result = {
      input: text,
      match_type: "nearest_example",
      similarity: score,
      example_input: best.input,
      domain: best.domain,
      axes: best.axes || null,
      primary,
      secondary: best.secondary || [],
      archetype: {
        code: primary,
        en_name: archetype.en_name,
        mask: archetype.mask,
        shadow: archetype.shadow,
        optimum: archetype.optimum,
        pathology: archetype.pathology
      }
    };

    if (best.trajectory) {
      result.trajectory = best.trajectory;
    }

    return result;
  }
}

// Export for browser modules
export default SubitMapper;

#!/usr/bin/env node
// subit-mapper.js
//
// Minimal, transparent SUBIT‑64 mapper demo.
// - Loads SUBIT dictionary (English)
// - Loads mapping examples
// - Classifies input by nearest example (Jaccard similarity)
// - Zero dependencies, fully interpretable

const fs = require("fs");
const path = require("path");

// ---------- Default paths ----------

const DEFAULT_DICT_PATH = "subit-dictionary-full.json";
const DEFAULT_EXAMPLES_PATH = "subit-mapping-examples.json";

// ---------- Helpers ----------

function loadJSON(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`[error] File not found: ${filePath}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function tokenize(text) {
  return text
    .replace(/→|>/g, " ")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

function jaccard(a, b) {
  const A = new Set(tokenize(a));
  const B = new Set(tokenize(b));
  if (A.size === 0 || B.size === 0) return 0;

  const intersection = [...A].filter(x => B.has(x)).length;
  const union = new Set([...A, ...B]).size;

  return intersection / union;
}

// ---------- Core mapping ----------

function bestExampleMatch(text, examples) {
  let best = null;
  let bestScore = -1;

  for (const ex of examples.examples || []) {
    const score = jaccard(text, ex.input);
    if (score > bestScore) {
      bestScore = score;
      best = ex;
    }
  }

  return { best, score: bestScore };
}

function classify(text, dictionary, examples) {
  const { best, score } = bestExampleMatch(text, examples);

  if (!best) {
    return {
      input: text,
      match_type: "none",
      similarity: 0,
      message: "No examples available."
    };
  }

  const primary = best.primary;
  const archetype = dictionary[primary] || {};

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

// ---------- CLI ----------

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    text: null,
    dict: DEFAULT_DICT_PATH,
    examples: DEFAULT_EXAMPLES_PATH,
    pretty: false
  };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];

    if (a === "--dict") opts.dict = args[++i];
    else if (a === "--examples") opts.examples = args[++i];
    else if (a === "--pretty") opts.pretty = true;
    else if (!opts.text) opts.text = a;
    else opts.text += " " + a;
  }

  return opts;
}

function main() {
  const opts = parseArgs();

  if (!opts.text) {
    console.error("[error] No input text provided.");
    process.exit(1);
  }

  const dictionary = loadJSON(opts.dict);
  const examples = loadJSON(opts.examples);

  const result = classify(opts.text, dictionary, examples);

  if (opts.pretty) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(JSON.stringify(result));
  }
}

main();

#!/usr/bin/env python3
# subit-mapper.py
#
# Minimal, transparent SUBIT‑64 mapper demo.
# - Loads SUBIT dictionary (English)
# - Loads mapping examples
# - Classifies input by nearest example (string similarity)
#
# This is a didactic, zero‑magic reference implementation:
# you can replace the similarity + selection logic with your own model.

import json
import argparse
import os
import sys
from typing import Dict, Any, List, Tuple

# ---------- Paths ----------

DEFAULT_DICT_PATH = "subit-dictionary-full.json"
DEFAULT_EXAMPLES_PATH = "subit-mapping-examples.json"


# ---------- IO Helpers ----------

def load_json(path: str) -> Any:
    if not os.path.exists(path):
        print(f"[error] File not found: {path}", file=sys.stderr)
        sys.exit(1)
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


# ---------- Similarity (very simple, transparent) ----------

def tokenize(text: str) -> List[str]:
    return [t.lower() for t in text.replace("→", " ").replace(">", " ").split() if t.strip()]


def jaccard_similarity(a: str, b: str) -> float:
    ta = set(tokenize(a))
    tb = set(tokenize(b))
    if not ta or not tb:
        return 0.0
    inter = len(ta & tb)
    union = len(ta | tb)
    return inter / union if union else 0.0


# ---------- Core Mapping Logic ----------

def best_example_match(
    text: str,
    examples: Dict[str, Any]
) -> Tuple[Dict[str, Any], float]:
    best = None
    best_score = -1.0
    for ex in examples.get("examples", []):
        score = jaccard_similarity(text, ex["input"])
        if score > best_score:
            best_score = score
            best = ex
    return best, best_score


def classify(
    text: str,
    dictionary: Dict[str, Any],
    examples: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Minimal, interpretable classifier:
    - Find closest example by Jaccard similarity
    - Return its primary archetype + metadata
    """
    match, score = best_example_match(text, examples)
    if match is None:
        return {
            "input": text,
            "match_type": "none",
            "similarity": 0.0,
            "message": "No examples available."
        }

    primary_code = match.get("primary")
    archetype = dictionary.get(primary_code, {})

    result = {
        "input": text,
        "match_type": "nearest_example",
        "similarity": score,
        "example_input": match.get("input"),
        "domain": match.get("domain"),
        "axes": match.get("axes", None),
        "primary": primary_code,
        "secondary": match.get("secondary", []),
        "archetype": {
            "code": primary_code,
            "en_name": archetype.get("en_name"),
            "mask": archetype.get("mask"),
            "shadow": archetype.get("shadow"),
            "optimum": archetype.get("optimum"),
            "pathology": archetype.get("pathology")
        }
    }

    # Trajectory special case
    if match.get("trajectory"):
        result["trajectory"] = match["trajectory"]

    return result


# ---------- CLI ----------

def build_arg_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="SUBIT‑64 minimal mapper demo (nearest‑example classifier)."
    )
    p.add_argument(
        "text",
        nargs="*",
        help="Input text to classify. If omitted, reads from stdin."
    )
    p.add_argument(
        "--dict",
        default=DEFAULT_DICT_PATH,
        help=f"Path to SUBIT dictionary JSON (default: {DEFAULT_DICT_PATH})"
    )
    p.add_argument(
        "--examples",
        default=DEFAULT_EXAMPLES_PATH,
        help=f"Path to mapping examples JSON (default: {DEFAULT_EXAMPLES_PATH})"
    )
    p.add_argument(
        "--pretty",
        action="store_true",
        help="Pretty‑print JSON output."
    )
    return p


def main() -> None:
    parser = build_arg_parser()
    args = parser.parse_args()

    # Input text
    if args.text:
        text = " ".join(args.text).strip()
    else:
        data = sys.stdin.read()
        text = data.strip()

    if not text:
        print("[error] No input text provided.", file=sys.stderr)
        sys.exit(1)

    # Load data
    dictionary = load_json(args.dict)
    examples = load_json(args.examples)

    # Classify
    result = classify(text, dictionary, examples)

    if args.pretty:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        print(json.dumps(result, ensure_ascii=False))


if __name__ == "__main__":
    main()

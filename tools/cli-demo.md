# **SUBIT‑64 CLI Demo**  
### Minimal command‑line usage for the SUBIT mapper

This document demonstrates how to run the SUBIT‑64 classifier from the command line using:

- **Python version** (`subit-mapper.py`)
- **Node.js version** (`subit-mapper.js`)

Both implementations use the same data files:

- `subit-dictionary-full.json`  
- `subit-mapping-examples.json`

---

# 1. **Python CLI Demo**

## **1.1 Basic usage**

```bash
python subit-mapper.py "soft warm lighting"
```

## **1.2 Pretty‑printed output**

```bash
python subit-mapper.py "soft warm lighting" --pretty
```

## **1.3 Using custom dictionary or examples**

```bash
python subit-mapper.py "creative synthesis of ideas" \
  --dict ./data/subit-dictionary-full.json \
  --examples ./data/subit-mapping-examples.json \
  --pretty
```

## **1.4 Reading input from stdin**

```bash
echo "feeling overwhelmed" | python subit-mapper.py --pretty
```

---

# 2. **Node.js CLI Demo**

## **2.1 Basic usage**

```bash
node subit-mapper.js "soft warm lighting"
```

## **2.2 Pretty‑printed output**

```bash
node subit-mapper.js "soft warm lighting" --pretty
```

## **2.3 Using custom paths**

```bash
node subit-mapper.js "strict corporate hierarchy" \
  --dict ./data/subit-dictionary-full.json \
  --examples ./data/subit-mapping-examples.json \
  --pretty
```

---

# 3. **Example Output**

Input:

```bash
python subit-mapper.py "soft warm lighting" --pretty
```

Output:

```json
{
  "input": "soft warm lighting",
  "match_type": "nearest_example",
  "similarity": 0.5,
  "example_input": "soft warm lighting",
  "domain": "Perception",
  "axes": "100000",
  "primary": "S28",
  "secondary": ["S26", "S24"],
  "archetype": {
    "code": "S28",
    "en_name": "Warmth",
    "mask": "Activates and energizes.",
    "shadow": "Overheats.",
    "optimum": "Creates comfort and vitality.",
    "pathology": "Burns out."
  }
}
```

---

# 4. **Directory Structure Example**

```
/subit64/
  subit-mapper.py
  subit-mapper.js
  subit-mapper-web.js
  subit-dictionary-full.json
  subit-mapping-examples.json
  cli-demo.md
```

---

# 5. **Notes**

- Both CLI tools use **nearest‑example Jaccard similarity** for maximum transparency.  
- You can replace the similarity function with embeddings, axis‑vectors, or topological scoring.  
- The output format is stable and suitable for downstream pipelines.


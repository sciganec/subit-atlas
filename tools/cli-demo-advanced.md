# **SUBIT‑64 CLI Demo (Advanced)**  
### Extended command‑line usage for SUBIT mapping, trajectories, and axis‑aware scoring

This document demonstrates advanced usage patterns for the SUBIT‑64 CLI tools:

- **Python:** `subit-mapper.py`  
- **Node.js:** `subit-mapper.js`  

The examples below assume the following files are present:

```
subit-dictionary-full.json
subit-mapping-examples.json
subit-mapper.py
subit-mapper.js
```

---

# 1. **Multi‑Label Classification**

SUBIT supports multi‑label outputs when the input text contains multiple semantic clusters.

### Python

```bash
python subit-mapper.py "warm light and rising tension" --pretty
```

### Node.js

```bash
node subit-mapper.js "warm light and rising tension" --pretty
```

**Expected behavior:**  
The mapper selects the nearest example but also returns **secondary archetypes** that reflect mixed signals:

- S28 Warmth  
- S24 Light  
- S43 Tension  

---

# 2. **Trajectory Mapping**

Some inputs describe **processes**, not states.  
SUBIT supports trajectory outputs via examples.

### Example

```bash
python subit-mapper.py "conflict → negotiation → agreement" --pretty
```

Output:

```json
"trajectory": ["S46", "S20", "S63"]
```

This represents:

- **S46 Conflict**  
- **S20 Interaction**  
- **S63 Synthesis**  

---

# 3. **Axis‑Weighted Classification (Custom Similarity)**

You can override the similarity function by editing the mapper.

### Python (edit `jaccard_similarity`)

```python
score = 0.7 * jaccard_similarity(text, ex["input"]) \
      + 0.3 * axis_alignment(text, ex)
```

### Node.js (edit `_jaccard`)

```javascript
return 0.7 * jaccard(a, b) + 0.3 * axisScore(a, b);
```

This allows:

- domain‑specific weighting  
- stack‑aware scoring  
- axis‑vector matching  

---

# 4. **Batch Classification**

### Python

```bash
cat inputs.txt | while read line; do
  python subit-mapper.py "$line" --pretty
done
```

### Node.js

```bash
cat inputs.txt | while read line; do
  node subit-mapper.js "$line" --pretty
done
```

Where `inputs.txt` contains:

```
soft warm lighting
feeling overwhelmed
strict corporate hierarchy
creative synthesis of ideas
```

---

# 5. **JSON Pipeline Mode**

You can pipe JSON into the mapper.

### Python

```bash
echo '{"text": "feeling overwhelmed"}' \
  | jq -r '.text' \
  | python subit-mapper.py --pretty
```

### Node.js

```bash
echo '{"text": "creative synthesis of ideas"}' \
  | jq -r '.text' \
  | node subit-mapper.js --pretty
```

---

# 6. **Embedding Into Shell Scripts**

### Example: `subit.sh`

```bash
#!/bin/bash
python subit-mapper.py "$@" --pretty
```

Usage:

```bash
./subit.sh "soft warm lighting"
```

---

# 7. **Advanced Output Interpretation**

SUBIT CLI returns:

- **primary** — dominant archetype  
- **secondary** — supporting states  
- **axes** — semantic vector (if provided)  
- **domain** — stack layer  
- **trajectory** — multi‑step process  
- **similarity** — match confidence  

Example:

```json
{
  "primary": "S28",
  "secondary": ["S26", "S24"],
  "domain": "Perception",
  "axes": "100000",
  "similarity": 0.5
}
```

---

# 8. **Debug Mode (Manual)**

You can inspect tokenization and similarity manually by adding:

### Python

```python
print("TOKENS:", tokenize(text))
print("SCORE:", score)
```

### Node.js

```javascript
console.log("TOKENS:", tokenize(text));
console.log("SCORE:", score);
```

---

# 9. **Directory Structure (Advanced)**

```
/subit64/
  subit-mapper.py
  subit-mapper.js
  subit-mapper-web.js
  subit-dictionary-full.json
  subit-mapping-examples.json
  cli-demo.md
  cli-demo-advanced.md
  inputs.txt
  subit.sh
```

---

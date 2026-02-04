# SUBIT‑64 Classifier API Specification  
## Version 1.0 — Universal Semantic Mapping Interface

This document defines the **official API specification** for interacting with the SUBIT‑64 Classifier.  
It describes the endpoints, request/response formats, data structures, and operational guarantees required to integrate SUBIT‑64 into external systems.

The API is designed to be:

- **simple**  
- **interpretable**  
- **consistent**  
- **domain‑agnostic**  
- **fully aligned with the SUBIT System Stack, Axes, and Topology**

This specification is implementation‑neutral and can be used for REST, GraphQL, gRPC, or local function calls.

---

# 1. Overview

The SUBIT‑64 API exposes three core capabilities:

1. **Classification** — map input → SUBIT archetype(s)  
2. **Axis Extraction** — compute the 6‑axis semantic vector  
3. **Topology Navigation** — explore neighbors, distances, and transitions  

Optional extended capabilities include:

- trajectory mapping  
- differential mapping  
- multi‑label clustering  
- explanation generation  

---

# 2. Data Structures

## 2.1 Archetype Object

```json
{
  "code": "S43",
  "name": "Tension",
  "group": 6,
  "essence": "Stress, imbalance, mobilization"
}
```

## 2.2 Axis Vector

A 6‑bit semantic fingerprint:

```json
{
  "axes": "010111",
  "materiality": "abstract",
  "unity": "multiplicity",
  "stability": "change",
  "internal": "external",
  "order": "chaos",
  "passive": "active"
}
```

## 2.3 Classification Result

```json
{
  "primary": { "code": "S43", "name": "Tension" },
  "secondary": [
    { "code": "S20", "name": "Interaction" },
    { "code": "S57", "name": "Chaos" }
  ],
  "axes": "010111",
  "confidence": 0.82,
  "explanation": "Input indicates stress, imbalance, and activation."
}
```

---

# 3. Endpoints

## 3.1 `POST /classify`

### Description  
Classifies an input into one or more SUBIT archetypes.

### Request

```json
{
  "input": "rapid escalation in a social context",
  "mode": "auto",
  "return_explanation": true
}
```

### Response

```json
{
  "primary": { "code": "S43", "name": "Tension" },
  "secondary": [
    { "code": "S20", "name": "Interaction" },
    { "code": "S57", "name": "Chaos" }
  ],
  "axes": "010111",
  "confidence": 0.82,
  "explanation": "Escalation implies activation, chaos, and externalized stress."
}
```

### Modes

- `"single"` — return only the closest archetype  
- `"multi"` — return a cluster  
- `"trajectory"` — treat input as a sequence  
- `"auto"` — classifier decides  

---

## 3.2 `POST /axes`

### Description  
Extracts the 6‑axis semantic vector from input.

### Request

```json
{
  "input": "cold analytical reasoning"
}
```

### Response

```json
{
  "axes": "101001",
  "materiality": "abstract",
  "unity": "unity",
  "stability": "stability",
  "internal": "external",
  "order": "order",
  "passive": "passive"
}
```

---

## 3.3 `GET /archetype/{code}`

### Description  
Returns metadata for a specific archetype.

### Response

```json
{
  "code": "S28",
  "name": "Warmth",
  "group": 4,
  "essence": "Activation, stimulation",
  "neighbors": ["S24", "S26", "S30", "S40", "S48", "S56"]
}
```

---

## 3.4 `POST /neighbors`

### Description  
Returns topological neighbors of an archetype.

### Request

```json
{
  "code": "S43"
}
```

### Response

```json
{
  "code": "S43",
  "neighbors": [
    "S41", "S42", "S44", "S46", "S20", "S57"
  ]
}
```

---

## 3.5 `POST /trajectory`

### Description  
Maps a sequence of inputs into a SUBIT path.

### Request

```json
{
  "steps": [
    "calm discussion",
    "rising disagreement",
    "heated argument",
    "resolution"
  ]
}
```

### Response

```json
{
  "trajectory": [
    "S42",
    "S43",
    "S47",
    "S63"
  ]
}
```

---

## 3.6 `POST /delta`

### Description  
Computes the semantic difference between two inputs.

### Request

```json
{
  "from": "calm",
  "to": "stress"
}
```

### Response

```json
{
  "delta": "S43",
  "description": "Shift from stability to activation and externalized imbalance."
}
```

---

# 4. Error Handling

## 4.1 Invalid Input

```json
{
  "error": "InvalidInput",
  "message": "Input text is empty or malformed."
}
```

## 4.2 Ambiguous Input

```json
{
  "error": "AmbiguousInput",
  "message": "Input spans incompatible domains. Try multi-label mode."
}
```

## 4.3 Unknown Archetype Code

```json
{
  "error": "UnknownCode",
  "message": "Archetype S99 does not exist."
}
```

---

# 5. Operational Guarantees

- **Deterministic** — same input → same output  
- **Interpretable** — axis vector always included  
- **Topologically consistent** — no illegal jumps  
- **Stack‑aligned** — respects 8‑level architecture  
- **Domain‑agnostic** — works across all semantic domains  

---

# 6. Summary

The SUBIT‑64 API provides a clean, universal interface for:

- semantic classification  
- axis extraction  
- topological navigation  
- trajectory modeling  
- differential analysis  

It is the official integration layer for SUBIT‑based systems.

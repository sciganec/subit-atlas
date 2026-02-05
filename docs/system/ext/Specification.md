# **SUBIT‑64 Specification**

Version: 1.0  
Status: Stable  
Scope: Semantic system definition, structural rules, operational constraints

This document defines the formal specification of the SUBIT‑64 semantic system.  
It describes the system’s structure, entities, topology, operators, transitions, and data formats.  
The specification is normative unless explicitly marked as informative.

---

# **1. Purpose**

SUBIT‑64 is a 64‑state semantic system based on:

- a 6‑dimensional binary axis space  
- an 8‑layer semantic stack  
- a hypercubic topology  
- a canonical behavioral profile for each node  

The purpose of this specification is to define:

- what SUBIT‑64 is  
- how it is structured  
- how it behaves  
- how it must be represented in data  
- how transitions and operators must function  

---

# **2. System Model**

SUBIT‑64 is defined as:

```
S = (N, A, L, T)
```

Where:

- **N** — set of 64 nodes  
- **A** — set of 6 binary axes  
- **L** — stack layers (8 semantic domains)  
- **T** — topology (6D hypercube)  

Each node is uniquely identified by:

- a 6‑bit axis vector  
- a layer index  
- a semantic profile  

---

# **3. Axes**

## **3.1 Definition**

The axis set is:

```
A = {a1, a2, a3, a4, a5, a6}
```

Each axis is binary:

```
ai ∈ {0, 1}
```

## **3.2 Node Coordinate**

Each node has a coordinate:

```
b = (b1 b2 b3 b4 b5 b6)
```

This coordinate is immutable.

## **3.3 Constraints**

- Axes are orthogonal  
- Axes are independent  
- Axes generate the full node set  

---

# **4. Nodes**

## **4.1 Definition**

A node is:

```
N_i = (code, vector, layer, profile)
```

Where:

- **code** — S00…S63  
- **vector** — 6‑bit coordinate  
- **layer** — integer 0–7  
- **profile** — semantic fields  

## **4.2 Semantic Profile**

Each node has:

- mask  
- shadow  
- optimum  
- pathology  

These fields are required.

## **4.3 Constraints**

- Node identity is unique  
- Node coordinate is unique  
- Node layer is fixed  
- Node profile must contain all four fields  

---

# **5. Stack (Layers)**

## **5.1 Definition**

The stack is:

```
L = {L0, L1, L2, L3, L4, L5, L6, L7}
```

Each layer contains 8 nodes.

## **5.2 Constraints**

- Layers do not affect adjacency  
- Layers define semantic altitude  
- Layer assignment is fixed  

---

# **6. Topology**

## **6.1 Definition**

Topology is defined by Hamming adjacency:

```
T = { (Na, Nb) | Hamming(Na, Nb) = 1 }
```

## **6.2 Properties**

- 64 nodes  
- 192 edges  
- degree ≤ 6  
- bipartite  
- diameter = 6  

## **6.3 Constraints**

- Adjacency must be computed by Hamming distance  
- No additional edges may be added  
- No edges may be removed  

---

# **7. Transitions**

## **7.1 Local Transitions**

A valid local transition satisfies:

```
Hamming(Sa, Sb) = 1
```

## **7.2 Vertical Transitions**

Vertical transitions require explicit projection:

```
Project(S, Lk)
```

## **7.3 Non‑Local Transitions**

Non‑local transitions must be explicitly defined in:

- examples  
- operators  
- domain rules  

They are not permitted by default.

---

# **8. Operators**

Operators must follow the definitions in `Operators.md`.

## **8.1 Required Operators**

- Flip(i)  
- Neighbor(i)  
- Invert()  
- Project(layer)  
- Extend()  
- Smooth()  
- Compress()  

## **8.2 Constraints**

- Operators must preserve invariants unless explicitly defined otherwise  
- Operators must not modify node identity except via axis flips  

---

# **9. Data Formats**

## **9.1 Dictionary Format**

Each node must be represented as:

```json
"S28": {
  "en_name": "...",
  "mask": "...",
  "shadow": "...",
  "optimum": "...",
  "pathology": "...",
  "axes": "011100",
  "layer": 3
}
```

Required fields:

- en_name  
- mask  
- shadow  
- optimum  
- pathology  
- axes  
- layer  

## **9.2 Example Format**

Each mapping example must contain:

```json
{
  "input": "...",
  "primary": "S28",
  "secondary": ["S26", "S24"],
  "domain": "Perception",
  "axes": "011100",
  "trajectory": ["S46", "S20", "S63"]
}
```

Required fields:

- input  
- primary  

Optional fields:

- secondary  
- domain  
- axes  
- trajectory  

---

# **10. Classifier Requirements**

A compliant SUBIT classifier must:

1. Load dictionary and examples  
2. Tokenize input  
3. Compute similarity  
4. Select primary node  
5. Optionally infer secondary nodes  
6. Optionally detect trajectories  
7. Output a structured result  

Output must include:

- input  
- primary  
- similarity  
- example_input  

---

# **11. Invariants**

The following must never change:

- number of nodes = 64  
- number of axes = 6  
- number of layers = 8  
- adjacency defined by Hamming distance  
- node identity defined by axis vector  

Any system violating these invariants is not SUBIT‑64.

---

# **12. Compliance**

An implementation is compliant if:

- it respects all invariants  
- it uses the canonical dictionary  
- it uses the canonical topology  
- it implements required operators  
- it follows transition rules  
- it outputs valid data formats  

---

# **13. Versioning**

This specification uses semantic versioning:

- **MAJOR** — structural changes  
- **MINOR** — new operators or fields  
- **PATCH** — clarifications or corrections  

---

# **14. References**

- Architecture.md  
- Ontology.md  
- Operators.md  
- Transitions.md  
- Topology.md  

These documents are normative.

---

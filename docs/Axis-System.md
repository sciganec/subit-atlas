# **SUBIT‑64 Axis System**

This document defines the six binary axes that generate the 64‑node SUBIT space.  
Axes are the fundamental semantic dimensions of the system.  
They determine node identity, adjacency, polarity, and topological structure.

The axis system is **normative** and must be preserved across all implementations.

---

# **1. Purpose of Axes**

Axes serve four structural roles:

1. **Generation** — produce the 64‑node space (2⁶)  
2. **Coordination** — assign each node a unique 6‑bit vector  
3. **Topology** — define adjacency via Hamming distance  
4. **Semantics** — encode fundamental tensions that shape meaning  

Axes are **binary**, **orthogonal**, **independent**, and **non‑overlapping**.

---

# **2. Axis Model**

Each axis is defined as:

```
ai ∈ {0, 1}
```

The full axis vector is:

```
b = (b1 b2 b3 b4 b5 b6)
```

This vector uniquely identifies a node.

---

# **3. Axis Properties**

All axes share the following properties:

### **3.1 Binary**
Each axis has two poles (0 and 1).

### **3.2 Orthogonal**
No axis can be derived from another.

### **3.3 Independent**
Changing one axis does not affect others.

### **3.4 Generative**
Together they produce the full 64‑node space.

### **3.5 Immutable**
Axis vectors cannot be altered except by explicit operators.

---

# **4. Axis Semantics**

Each axis encodes a fundamental semantic polarity.  
The exact naming of axes is implementation‑dependent, but their **functional role** is fixed.

Below is the canonical abstract definition.

---

## **Axis 1 — Stability / Change**

```
b1 = 0 → Stability
b1 = 1 → Change
```

Defines whether a node expresses:

- structural persistence  
- or dynamic transformation  

---

## **Axis 2 — Internal / External**

```
b2 = 0 → Internal
b2 = 1 → External
```

Defines orientation toward:

- inner states  
- or outer environment  

---

## **Axis 3 — Passive / Active**

```
b3 = 0 → Passive
b3 = 1 → Active
```

Defines whether a node:

- receives / absorbs  
- or initiates / acts  

---

## **Axis 4 — Singular / Distributed**

```
b4 = 0 → Singular
b4 = 1 → Distributed
```

Defines whether meaning is:

- concentrated  
- or spread across a field  

---

## **Axis 5 — Concrete / Abstract**

```
b5 = 0 → Concrete
b5 = 1 → Abstract
```

Defines the level of:

- material specificity  
- conceptual generality  

---

## **Axis 6 — Determinate / Indeterminate**

```
b6 = 0 → Determinate
b6 = 1 → Indeterminate
```

Defines whether a node expresses:

- clear boundaries  
- or open, fluid states  

---

# **5. Axis Vector and Node Identity**

A node is uniquely defined by its axis vector:

```
Node = (b1 b2 b3 b4 b5 b6)
```

Two nodes are identical if and only if their vectors match.

Axis vectors:

- cannot overlap  
- cannot be duplicated  
- cannot be reassigned  

This ensures the integrity of the 64‑node space.

---

# **6. Axis Distance**

Distance between nodes is measured by **Hamming distance**:

```
d(a, b) = number of differing bits
```

Interpretation:

- 1 → minimal semantic shift  
- 2 → two‑axis shift  
- 3 → orthogonal shift  
- 6 → full inversion  

Axis distance defines:

- similarity  
- transition cost  
- cluster membership  

---

# **7. Axis Operations**

Axis operations are defined in `Operators.md`.  
Key operations include:

- **Flip(i)** — invert axis i  
- **Toggle(i)** — alias of Flip(i)  
- **Mask(pattern)** — apply bitmask  
- **Merge(a, b)** — majority‑vote blending  

Axis operations must preserve:

- binary structure  
- orthogonality  
- independence  

---

# **8. Axis Constraints**

The following constraints are mandatory:

- number of axes = 6  
- each axis is binary  
- axes must be orthogonal  
- axes must generate 64 unique vectors  
- no axis may be removed or merged  
- no additional axes may be added  

Any system violating these constraints is not SUBIT‑64.

---

# **9. Axis–Layer Interaction**

Axes define **horizontal** structure.  
Layers define **vertical** semantics.

Axes do **not** determine layer.  
Layer does **not** modify axis vector.

A node is defined by:

```
axis vector + layer
```

Both are required.

---

# **10. Axis–Topology Relationship**

Topology is derived directly from axes:

- adjacency = 1‑bit difference  
- clusters = low‑distance sets  
- trajectories = axis‑wise movement  

Axes are the **geometry** of SUBIT‑64.

---

# **11. Axis–Semantics Relationship**

Axes encode the fundamental tensions that shape:

- node behavior  
- transitions  
- trajectories  
- cluster formation  

Semantic meaning is **structured**, not arbitrary.

---

# **12. Axis Invariants**

The following properties must never change:

- number of axes  
- binary nature of axes  
- orthogonality  
- independence  
- generative completeness  
- mapping to 64 nodes  

These invariants guarantee the stability of the system.

---

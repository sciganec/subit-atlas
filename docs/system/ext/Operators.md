# **SUBIT‑64 Operators**

This document defines the formal operator system of SUBIT‑64.  
Operators are transformations applied to:

- nodes  
- axis vectors  
- trajectories  
- clusters  
- semantic fields  

They form the **dynamic layer** of the SUBIT ontology: the rules that govern how states change, interact, and evolve.

---

# **1. Operator Categories**

SUBIT‑64 defines four classes of operators:

1. **Node Operators** — act on individual nodes  
2. **Axis Operators** — act on the 6‑bit vector  
3. **Trajectory Operators** — act on sequences of nodes  
4. **Cluster Operators** — act on groups of nodes  

Each operator preserves system invariants unless explicitly defined as non‑invariant.

---

# **2. Node Operators**

Node operators transform a single node into another node.

### **2.1 Flip(i)**  
Invert axis *i* of the node’s 6‑bit vector.

```
Flip(i): b_i → ¬b_i
```

Semantic meaning:  
Switch polarity along one dimension.

---

### **2.2 Neighbor(i)**  
Move to the adjacent node along axis *i*.

```
Neighbor(i): S → S'
where Hamming(S, S') = 1
```

Semantic meaning:  
Minimal semantic shift.

---

### **2.3 Invert()**  
Flip all axes.

```
Invert(): b → ¬b
```

Semantic meaning:  
Full semantic inversion (antipode).

---

### **2.4 Project(layer)**  
Map a node to the corresponding pattern in another layer.

```
Project(L): S → S_L
```

Semantic meaning:  
Cross‑layer reinterpretation.

---

### **2.5 Stabilize()**  
Move node toward its optimum expression.

Semantic meaning:  
Normalize distortions.

---

### **2.6 Destabilize()**  
Move node toward its pathology.

Semantic meaning:  
Stress‑induced degradation.

---

# **3. Axis Operators**

Axis operators act directly on the 6‑bit vector.

### **3.1 Set(i, value)**  
Force axis *i* to 0 or 1.

### **3.2 Toggle(i)**  
Equivalent to Flip(i).

### **3.3 Mask(pattern)**  
Apply a bitmask.

```
b → b ∧ pattern
```

### **3.4 Merge(a, b)**  
Combine two axis vectors.

```
Merge(a, b) = majority vote per bit
```

Semantic meaning:  
Blend two semantic states.

---

# **4. Trajectory Operators**

Trajectories are ordered sequences of nodes.

### **4.1 Extend()**  
Add the next topological step.

### **4.2 Compress()**  
Remove redundant or non‑essential transitions.

### **4.3 Smooth()**  
Ensure all steps follow adjacency.

### **4.4 Jump()**  
Allow non‑local transitions (explicit override).

### **4.5 Loop()**  
Detect or enforce cycles.

### **4.6 Reverse()**  
Invert trajectory order.

### **4.7 Mirror()**  
Apply Invert() to each node.

---

# **5. Cluster Operators**

Clusters are groups of topologically related nodes.

### **5.1 Centroid()**  
Compute the axis‑mean of a cluster.

### **5.2 Boundary()**  
Identify nodes with fewer than 6 neighbors.

### **5.3 Expand()**  
Include all neighbors of all nodes.

### **5.4 Contract()**  
Remove peripheral nodes.

### **5.5 Align()**  
Shift cluster toward a target axis pattern.

---

# **6. Semantic Field Operators**

Semantic fields are continuous interpretations of node distributions.

### **6.1 Gradient()**  
Compute direction of maximal semantic change.

### **6.2 Divergence()**  
Measure spreading or convergence of meaning.

### **6.3 Flow()**  
Simulate movement through the topology.

### **6.4 Attractor()**  
Identify stable end‑states.

### **6.5 Repeller()**  
Identify unstable states.

---

# **7. Operator Algebra**

Operators can be composed:

```
Flip(2) ∘ Neighbor(5) ∘ Stabilize()
```

Properties:

- **Associative**  
- **Non‑commutative**  
- **Closed** under node space  
- **Invertible** when based on axis flips  

---

# **8. Invariants Preserved by Operators**

Unless explicitly overridden:

- node identity is preserved under Stabilize()  
- layer membership is preserved under Neighbor()  
- topology is preserved under Flip(i)  
- Hamming distance is preserved under Mirror()  
- cluster connectivity is preserved under Expand()  

---

# **9. Non‑Invariant Operators**

Some operators intentionally break invariants:

- Jump() — breaks adjacency  
- Project(layer) — breaks layer identity  
- Merge(a, b) — breaks node identity  
- Destabilize() — breaks optimum stability  

These are used for modeling:

- stress  
- conflict  
- transformation  
- synthesis  
- collapse  

---

# **10. Operator Semantics**

Operators define the **dynamic logic** of SUBIT‑64:

- how states change  
- how meaning moves  
- how processes unfold  
- how clusters evolve  
- how trajectories resolve  

They are the functional counterpart to the static ontology.

---

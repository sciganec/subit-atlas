# **SUBIT‑64 Topology**

SUBIT‑64 is a semantic topology built on a 6‑dimensional hypercube.  
This document defines the structural geometry of the system: nodes, edges, distances, neighborhoods, clusters, and topological invariants.

Topology is the **spatial substrate** of SUBIT‑64.  
All semantic behavior emerges from this structure.

---

# **1. Topological Space**

SUBIT‑64 is defined as:

```
T = {0,1}^6
```

A 6‑dimensional binary vector space.

Each node corresponds to a unique 6‑bit vector:

```
b1 b2 b3 b4 b5 b6
```

Total nodes:

```
|T| = 2^6 = 64
```

This forms a **6D hypercube** (also known as Q6).

---

# **2. Nodes**

A node is defined by:

- a 6‑bit coordinate  
- a stack layer (0–7)  
- a semantic profile (mask, shadow, optimum, pathology)  

Nodes are **atomic** and **non‑overlapping**.

Example:

```
S28 = 011100
```

Coordinates are not exposed in the public dictionary but are structurally fixed.

---

# **3. Edges (Adjacency)**

Two nodes are adjacent if and only if they differ by **exactly one bit**.

Formally:

```
Hamming(Sa, Sb) = 1
```

This defines the edges of the hypercube.

### Properties

- each node has degree ≤ 6  
- edges represent minimal semantic transitions  
- adjacency is symmetric and reversible  

---

# **4. Distance**

Distance between nodes is defined by **Hamming distance**:

```
d(Sa, Sb) = number of differing bits
```

Interpretation:

- d = 1 → minimal shift  
- d = 2 → two‑axis shift  
- d = 3 → orthogonal shift  
- d = 6 → full inversion  

Distance determines:

- similarity  
- transition cost  
- cluster membership  
- semantic drift  

---

# **5. Neighborhoods**

The **1‑neighborhood** of a node S is:

```
N1(S) = { all nodes with Hamming distance 1 }
```

The **k‑neighborhood** is:

```
Nk(S) = { nodes with Hamming distance ≤ k }
```

Neighborhoods define:

- local semantic fields  
- gradient directions  
- transition options  

---

# **6. Layers and Topology**

The stack (8 layers) is **orthogonal** to the hypercube.

Meaning:

- topology is horizontal  
- stack is vertical  
- layers do not affect adjacency  
- nodes in different layers may share axis patterns  

Example:

```
S04 (Structure) and S54 (Institution)
```

These may share axis vectors but differ in layer semantics.

---

# **7. Clusters**

Clusters are groups of nodes with:

- minimal pairwise distances  
- shared axis patterns  
- functional similarity  

Types of clusters:

### **7.1 Local clusters**
Nodes within distance 1 or 2.

### **7.2 Axis clusters**
Nodes sharing specific bit patterns.

### **7.3 Layer clusters**
Nodes within the same stack layer.

### **7.4 Semantic clusters**
Nodes with similar behavioral profiles.

Clusters emerge naturally from topology.

---

# **8. Hypercube Properties**

The SUBIT hypercube has the following invariants:

- **64 nodes**  
- **192 edges**  
- **degree 6** for interior nodes  
- **bipartite**  
- **no cycles of odd length**  
- **diameter = 6**  
- **distance‑regular**  

These properties ensure:

- predictable transitions  
- uniform structure  
- no semantic gaps  
- no redundant states  

---

# **9. Topological Symmetries**

The hypercube is symmetric under:

- axis permutations  
- bit flips  
- reflections  
- rotations in any dimension  

This symmetry ensures:

- no privileged nodes  
- no privileged axes  
- no privileged directions  

Semantic meaning is derived from **layer + axis pattern**, not geometry alone.

---

# **10. Topological Transformations**

Valid transformations include:

- **bit flips** (axis inversion)  
- **axis permutations**  
- **reflections**  
- **rotations**  
- **translations** (bitwise XOR)  

Invalid transformations:

- collapsing nodes  
- merging axes  
- removing edges  

These would break system invariants.

---

# **11. Topological Constraints**

Transitions must respect:

- adjacency (unless explicitly non‑local)  
- axis polarity (unless flipped)  
- layer semantics (unless projected)  

Invalid transitions:

- multi‑bit jumps without justification  
- cross‑layer jumps without projection  
- contradictory semantic paths  

---

# **12. Topology and Semantics**

Topology determines:

- which transitions are natural  
- which transitions are costly  
- which states are neighbors  
- which clusters form  
- which trajectories are stable  

Semantics is **embedded** in topology, not layered on top of it.

---

# **13. Topology and Operators**

Operators act on topology:

- **Neighbor(i)** moves along an edge  
- **Flip(i)** inverts a dimension  
- **Invert()** moves to the antipode  
- **Project(layer)** moves vertically  
- **Jump()** overrides topology  

See `Operators.md` for details.

---

# **14. Topology and Trajectories**

Trajectories must follow adjacency:

```
S → N1 → N1 → …
```

Unless explicitly defined as non‑local.

Trajectory types:

- linear  
- branching  
- cyclic  
- convergent  
- divergent  
- spiral  

Topology defines which trajectories are possible.

---

# **15. Topological Invariants**

The following properties never change:

- number of nodes  
- number of edges  
- adjacency relations  
- axis dimensionality  
- Hamming metric  

These invariants guarantee the stability of SUBIT‑64 as a semantic system.

---

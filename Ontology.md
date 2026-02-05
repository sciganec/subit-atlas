# **SUBIT‑64 Ontology**

SUBIT‑64 is a formal semantic ontology built on a 64‑node state space.  
It defines the fundamental entities, relations, operators, and invariants that constitute the SUBIT semantic system.

This document describes the **conceptual ontology** of SUBIT‑64:  
the meaning of its axes, layers, nodes, transitions, and semantic operators.

---

# **1. Ontological Entities**

SUBIT‑64 defines four primary ontological entities:

1. **Node** — atomic semantic state  
2. **Axis** — binary semantic dimension  
3. **Layer (Stack)** — vertical semantic domain  
4. **Topology** — adjacency relations between nodes  

Secondary entities:

- **Trajectory** — ordered sequence of nodes  
- **Cluster** — group of topologically adjacent nodes  
- **Operator** — transformation applied to nodes or trajectories  
- **Invariant** — property preserved across transformations  

---

# **2. The Stack (8 Semantic Layers)**

The stack defines **vertical semantic domains**.  
Each layer contains eight nodes.

| Layer | Name        | Ontological Role |
|-------|-------------|------------------|
| 1     | Matter      | Physical primitives, form, structure |
| 2     | Organic     | Growth, function, biological logic |
| 3     | Dynamics    | Motion, interaction, processes |
| 4     | Perception  | Sensory qualities, experiential states |
| 5     | Spectrum    | Fields, gradients, cognitive tones |
| 6     | Psychic     | Emotions, internal states |
| 7     | Social      | Roles, groups, communication |
| 8     | Abstract    | Models, systems, conceptual structures |

The stack provides **semantic altitude**:  
higher layers integrate and reinterpret lower layers.

---

# **3. The Axes (6 Binary Dimensions)**

Every node in SUBIT‑64 is defined by a **6‑bit vector**:

```
b1 b2 b3 b4 b5 b6
```

Each bit represents a **binary semantic polarity**.  
Axes are:

- orthogonal  
- independent  
- generative  
- non‑overlapping  

Together they produce the full 64‑state space:

```
2^6 = 64 nodes
```

### **3.1 Ontological Role of Axes**

Axes define:

- polarity  
- orientation  
- semantic distance  
- adjacency  
- cluster membership  

Axes are the **coordinate system** of SUBIT‑64.

---

# **4. Nodes (64 Archetypes)**

A node is the fundamental ontological unit of SUBIT‑64.

Each node has:

- **code** — S00…S63  
- **axis vector** — 6‑bit coordinate  
- **layer** — stack position  
- **en_name** — canonical label  
- **mask** — functional expression  
- **shadow** — distortion  
- **optimum** — best‑case expression  
- **pathology** — destructive extreme  

Nodes are:

- atomic  
- interpretable  
- structurally positioned  
- behaviorally expressive  

Nodes do **not** overlap.  
Each node is a unique semantic state.

---

# **5. Topology (6‑Dimensional Hypercube)**

SUBIT‑64 forms a **6D hypercube** where:

- each node has up to **6 neighbors**  
- neighbors differ by exactly **1 bit**  
- distance is measured by **Hamming distance**  
- clusters emerge from structural proximity  

### **5.1 Ontological Meaning of Topology**

Topology defines:

- possible transitions  
- semantic similarity  
- local gradients  
- cluster boundaries  
- attractors and repellers  

Topology is the **semantic geometry** of SUBIT‑64.

---

# **6. Trajectories**

A trajectory is an ordered sequence of nodes:

```
S46 → S20 → S63
```

Trajectories represent:

- processes  
- transformations  
- evolutions  
- progressions  
- resolutions  

Trajectories must follow **topological adjacency** unless explicitly defined as non‑local.

---

# **7. Clusters**

A cluster is a group of nodes with:

- shared axis patterns  
- minimal Hamming distance  
- functional similarity  

Clusters can represent:

- emotional families  
- perceptual fields  
- organizational states  
- cognitive modes  

Clusters emerge naturally from topology.

---

# **8. Semantic Operators**

Operators transform nodes, trajectories, or axis vectors.

### **8.1 Node Operators**

- **Flip(i)** — invert axis i  
- **Neighbor(i)** — move to adjacent node along axis i  
- **Project(layer)** — map node to corresponding layer pattern  
- **Invert()** — flip all axes (semantic inversion)

### **8.2 Trajectory Operators**

- **Extend()** — add next topological step  
- **Compress()** — reduce trajectory to essential transitions  
- **Smooth()** — remove non‑adjacent jumps  
- **Loop()** — detect or enforce cycles  

### **8.3 Cluster Operators**

- **Centroid()** — compute axis‑mean  
- **Boundary()** — identify edge nodes  
- **Expand()** — include neighbors  

Operators allow SUBIT‑64 to function as a **semantic engine**, not just a classifier.

---

# **9. Invariants**

Certain properties remain constant across transformations.

### **9.1 Topological Invariants**

- number of nodes = 64  
- degree of each node ≤ 6  
- adjacency defined by Hamming distance  

### **9.2 Semantic Invariants**

- axis polarity is preserved unless flipped  
- layer membership is fixed  
- node identity is unique  

### **9.3 System Invariants**

- no redundant states  
- no missing states  
- no overlapping definitions  

These invariants ensure SUBIT‑64 remains stable and coherent.

---

# **10. Ontological Rules**

### **10.1 Node Identity Rule**
A node is defined solely by its axis vector and layer.

### **10.2 Adjacency Rule**
Nodes are adjacent if and only if they differ by one bit.

### **10.3 Trajectory Rule**
Valid trajectories follow adjacency unless explicitly non‑local.

### **10.4 Layer Rule**
Layer determines semantic altitude, not axis polarity.

### **10.5 Operator Rule**
Operators must preserve system invariants.

---

# **11. Ontology vs. Architecture**

- **Ontology** defines *what* exists in SUBIT‑64.  
- **Architecture** defines *how* the system is structured and operates.  

Together they form the canonical foundation of the SUBIT system.

---

# **12. Future Ontological Extensions**

Planned expansions include:

- formal axis definitions  
- operator algebra  
- semantic field equations  
- attractor/repeller modeling  
- multi‑trajectory composition  
- cross‑layer projection rules  

These will be added in future versions of the ontology.

---

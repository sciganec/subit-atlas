# **SUBIT‑64 Architecture**

SUBIT‑64 is a semantic architecture built on a 64‑node topological space.  
It provides a minimal, complete, and interpretable structure for modeling states, transitions, and semantic dynamics across domains.

This document describes the internal architecture of the system:  
its layers, axes, topology, node structure, and operational flow.

---

# **1. Architectural Overview**

SUBIT‑64 consists of three foundational components:

1. **Stack** — vertical hierarchy of eight semantic layers  
2. **Axes** — six binary dimensions generating the 64‑node space  
3. **Topology** — a 6‑dimensional hypercube defining adjacency and transitions  

Together they form a compact semantic engine capable of classification, mapping, and trajectory modeling.

---

# **2. The Stack (Vertical Architecture)**

The stack is an 8‑layer hierarchy representing increasing semantic complexity:

| Layer | Name        | Description |
|-------|-------------|-------------|
| 1     | Matter      | Physical primitives, form, structure |
| 2     | Organic     | Growth, function, biological logic |
| 3     | Dynamics    | Motion, interaction, processes |
| 4     | Perception  | Sensory qualities, experiential states |
| 5     | Spectrum    | Fields, gradients, cognitive tones |
| 6     | Psychic     | Emotions, internal states |
| 7     | Social      | Roles, groups, communication |
| 8     | Abstract    | Models, systems, conceptual structures |

Each layer contains **8 nodes**, forming the 8×8 grid.

The stack provides **vertical meaning**:  
higher layers integrate and transform the logic of lower layers.

---

# **3. The Axes (Dimensional Architecture)**

Every SUBIT node is defined by a **6‑bit vector**.  
These six axes represent fundamental semantic tensions.

Each axis is binary, orthogonal, and non‑overlapping.  
Together they generate the full 64‑state space:

```
2^6 = 64 nodes
```

Axes define:

- polarity  
- orientation  
- adjacency  
- semantic distance  

They are the **coordinate system** of SUBIT‑64.

---

# **4. The Topology (Spatial Architecture)**

SUBIT‑64 forms a **6‑dimensional hypercube**:

- each node has up to **6 neighbors**  
- neighbors differ by exactly **1 bit**  
- distance is measured by **Hamming distance**  
- clusters emerge from structural proximity  
- transitions follow topological adjacency  

This topology ensures:

- no redundant states  
- no missing states  
- predictable transitions  
- interpretable trajectories  

The topology is the **engine** of SUBIT‑64.

---

# **5. Node Architecture**

Each node is a compact semantic unit with four behavioral fields:

- **mask** — functional expression  
- **shadow** — distortion under stress  
- **optimum** — best‑case expression  
- **pathology** — destructive extreme  

Example:

```
S28:
  en_name: Warmth
  mask: Activates and energizes.
  shadow: Overheats.
  optimum: Creates comfort and vitality.
  pathology: Burns out.
```

Nodes are:

- minimal  
- interpretable  
- structurally positioned  
- behaviorally expressive  

---

# **6. Mapping Architecture**

SUBIT‑64 supports multiple mapping modes:

### **6.1 Nearest‑Example Mapping**
- tokenization  
- Jaccard similarity  
- deterministic selection  

### **6.2 Multi‑Label Mapping**
- multiple nodes activated  
- useful for mixed signals  

### **6.3 Trajectory Mapping**
- sequences of nodes  
- models processes, not states  

### **6.4 Axis‑Aware Mapping (v2)**
- axis vector scoring  
- polarity matching  
- stack weighting  

### **6.5 Topology‑Aware Mapping (v2)**
- neighbor expansion  
- distance‑based scoring  
- cluster inference  

---

# **7. Operational Flow**

A typical SUBIT classification pipeline:

```
Input text
   ↓
Tokenization
   ↓
Similarity scoring (examples, axes, topology)
   ↓
Primary node selection
   ↓
Secondary node inference
   ↓
Trajectory detection (optional)
   ↓
Node profile output (mask/shadow/optimum/pathology)
```

This flow is:

- transparent  
- deterministic  
- modular  
- extensible  

---

# **8. Implementation Architecture**

SUBIT‑64 includes three reference implementations:

### **8.1 Python (CLI)**
- `subit-mapper.py`  
- transparent logic  
- ideal for scripting and pipelines  

### **8.2 Node.js (CLI)**
- `subit-mapper.js`  
- portable, lightweight  
- integrates with JS ecosystems  

### **8.3 Browser Module**
- `subit-mapper-web.js`  
- ES module  
- fetch‑based loading  
- ideal for interactive tools  

All implementations share:

- identical dictionary  
- identical examples  
- identical output schema  

---

# **9. Extension Architecture (Planned)**

### **9.1 SUBIT Engine**
- axis projection  
- topology traversal  
- semantic blending  
- trajectory simulation  

### **9.2 SUBIT Studio**
- interactive 8×8 grid  
- node inspector  
- axis visualizer  
- trajectory composer  

### **9.3 SUBIT API**
- `/classify`  
- `/trajectory`  
- `/axes`  
- `/neighbors`  

### **9.4 SUBIT Ontology**
- formal definitions  
- operators  
- transitions  
- invariants  

---

# **10. Design Principles**

SUBIT‑64 adheres to strict architectural principles:

- **Minimalism** — no redundant components  
- **Completeness** — full semantic coverage  
- **Topology first** — structure determines behavior  
- **Interpretability** — every decision is explainable  
- **Fractality** — patterns repeat across layers  
- **Modularity** — components can evolve independently  
- **Authorial clarity** — no hidden assumptions  

---


Скажи, який документ генеруємо наступним.

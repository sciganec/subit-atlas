# **SUBIT‑64 Transitions**

This document defines the transition logic of the SUBIT‑64 semantic system.  
Transitions describe how states move, evolve, or transform within the 64‑node topology.

SUBIT transitions are governed by:

- **topology** (6‑dimensional hypercube)  
- **axes** (binary flips)  
- **stack layers** (vertical semantics)  
- **operators** (formal transformations)  
- **semantic constraints** (mask → shadow → optimum → pathology)  

Transitions are the **dynamic grammar** of SUBIT‑64.

---

# **1. Types of Transitions**

SUBIT‑64 defines six categories of transitions:

1. **Topological transitions** — adjacency in the 6D cube  
2. **Axis transitions** — flipping one or more bits  
3. **Layer transitions** — movement across stack layers  
4. **Semantic transitions** — mask → shadow → optimum → pathology  
5. **Trajectory transitions** — multi‑step processes  
6. **Non‑local transitions** — explicit jumps outside adjacency  

Each category has strict rules.

---

# **2. Topological Transitions (Local)**

A topological transition occurs when two nodes differ by **exactly one bit**.

```
Hamming(Sa, Sb) = 1
```

This is the **primary transition rule** of SUBIT‑64.

### Properties

- minimal semantic shift  
- preserves layer  
- preserves structural coherence  
- reversible  

### Example

```
S28 (Warmth) → S24 (Light)
```

Both differ by one axis flip.

---

# **3. Axis Transitions**

Axis transitions operate directly on the 6‑bit vector.

### **3.1 Single‑Axis Flip**

```
b_i → ¬b_i
```

Equivalent to moving to a topological neighbor.

### **3.2 Multi‑Axis Flip**

```
Flip(i, j, k)
```

Equivalent to multiple sequential topological transitions.

### **3.3 Axis Drift**

Gradual movement along an axis direction:

```
S → Neighbor(i) → Neighbor(i) → …
```

Represents:

- intensification  
- weakening  
- polarization  

---

# **4. Layer Transitions (Vertical)**

Layer transitions move between stack layers.

These transitions are **not topological** — they are **semantic projections**.

### **4.1 Upward Projection**

```
Matter → Organic → Dynamics → … → Abstract
```

Meaning:

- abstraction  
- integration  
- generalization  

### **4.2 Downward Projection**

```
Abstract → Social → Psychic → … → Matter
```

Meaning:

- concretization  
- embodiment  
- grounding  

### **4.3 Cross‑Layer Mapping**

Nodes with similar axis patterns across layers can be mapped:

```
S04 (Structure) ↔ S54 (Institution)
```

---

# **5. Semantic Transitions (Internal)**

Every node has four internal states:

1. **Mask** — functional expression  
2. **Shadow** — distortion  
3. **Optimum** — ideal expression  
4. **Pathology** — destructive extreme  

Transitions follow a predictable pattern:

### **5.1 Stress Path**

```
mask → shadow → pathology
```

### **5.2 Growth Path**

```
mask → optimum
```

### **5.3 Recovery Path**

```
pathology → shadow → mask
```

### **5.4 Collapse Path**

```
optimum → shadow
```

These transitions are **intra‑node**, not topological.

---

# **6. Trajectory Transitions**

A trajectory is a sequence of nodes:

```
S46 → S20 → S63
```

Trajectories represent:

- processes  
- transformations  
- resolutions  
- evolutions  

### **6.1 Valid Trajectory Rule**

All steps must follow adjacency:

```
Hamming(Sn, Sn+1) = 1
```

### **6.2 Non‑Local Trajectories**

Allowed only when explicitly defined:

```
Jump(Sa → Sb)
```

Used for:

- conflict resolution  
- synthesis  
- collapse  
- creative leaps  

---

# **7. Non‑Local Transitions**

Non‑local transitions break adjacency rules.

They occur when:

- stress forces collapse  
- synthesis requires integration  
- abstraction jumps layers  
- narrative logic overrides topology  

Examples:

```
S46 (Conflict) → S63 (Synthesis)
S60 (Emptiness) → S08 (Seed)
```

These transitions must be **explicitly defined** in examples or operators.

---

# **8. Transition Constraints**

Transitions must preserve:

- node identity (unless flipped)  
- axis polarity (unless flipped)  
- layer semantics (unless projected)  
- topology (unless non‑local)  

Invalid transitions:

- multi‑bit jumps without justification  
- cross‑layer jumps without projection  
- contradictory semantic paths  

---

# **9. Transition Patterns**

SUBIT‑64 supports several canonical patterns.

### **9.1 Oscillation**

```
S → Neighbor(i) → S
```

### **9.2 Spiral**

```
S → N1 → N2 → N3 → …
```

### **9.3 Collapse**

```
optimum → shadow → pathology
```

### **9.4 Resolution**

```
conflict → negotiation → synthesis
```

### **9.5 Emergence**

```
emptiness → seed → growth
```

---

# **10. Transition Graph**

The full transition graph is the 6D hypercube:

- 64 nodes  
- 192 edges  
- degree ≤ 6  

Edges represent valid local transitions.

Non‑local transitions form **overlays** on top of the cube.

---

# **11. Transition Operators**

Transitions are implemented through operators:

- **Neighbor(i)** — local move  
- **Flip(i)** — axis inversion  
- **Project(layer)** — vertical move  
- **Jump()** — non‑local move  
- **Extend()** — trajectory growth  
- **Smooth()** — enforce adjacency  
- **Compress()** — remove redundancy  

See `Operators.md` for full definitions.

---

# **12. Transition Invariants**

Transitions preserve:

- topological coherence  
- axis structure  
- semantic consistency  
- reversibility (except collapse)  

Collapse transitions are **irreversible** unless explicitly recovered.

---

# **13. Transition Semantics**

Transitions define:

- how meaning moves  
- how states evolve  
- how processes unfold  
- how systems stabilize or destabilize  

They are the **dynamic logic** of SUBIT‑64.

---

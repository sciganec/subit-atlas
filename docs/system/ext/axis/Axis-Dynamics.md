# **SUBIT‑64 Axis Dynamics**

This document describes the dynamic behavior of the six binary axes of SUBIT‑64.  
While Axis-System.md defines what each axis *is*, Axis-Dynamics.md defines how axes *move*, *shift*, *interact*, and *evolve* during semantic processes.

This document is **informative**, not normative.

---

# **1. Dynamic Model of Axes**

Axis dynamics describe:

- how axis values change over time  
- how transitions propagate through the 6‑bit vector  
- how stress, growth, collapse, and synthesis affect axes  
- how trajectories follow axis gradients  

Axes are static in definition but dynamic in expression.

---

# **2. Types of Axis Dynamics**

SUBIT‑64 supports five dynamic modes:

1. **Local flips** — single-axis changes  
2. **Axis cascades** — multi-axis propagation  
3. **Axis drift** — gradual directional movement  
4. **Axis oscillation** — back-and-forth switching  
5. **Axis convergence/divergence** — multi-axis alignment or dispersion  

Each mode corresponds to a class of semantic processes.

---

# **3. Local Axis Flips (Minimal Dynamics)**

A local flip is the smallest possible dynamic event:

```
b_i → ¬b_i
```

Properties:

- minimal semantic shift  
- preserves local coherence  
- corresponds to topological adjacency  
- reversible  

Examples:

- passive → active  
- concrete → abstract  
- determinate → indeterminate  

Local flips form the **atomic steps** of all trajectories.

---

# **4. Axis Cascades (Propagated Dynamics)**

A cascade occurs when one axis flip triggers others.

### **4.1 Definition**

```
Flip(i) → Flip(j) → Flip(k)
```

### **4.2 Causes**

- stress  
- overload  
- rapid change  
- systemic reconfiguration  

### **4.3 Example**

```
010010 → 110011
```

Flips:

- b1 (stability → change)  
- b2 (internal → external)  
- b6 (determinate → indeterminate)  

Cascades represent **nonlinear transitions**.

---

# **5. Axis Drift (Directional Dynamics)**

Axis drift is a gradual movement along one axis direction.

### **5.1 Definition**

```
S → Neighbor(i) → Neighbor(i) → …
```

### **5.2 Interpretation**

- intensification  
- weakening  
- polarization  

### **5.3 Example**

```
xx0xxx → xx1xxx → xx1xxx → xx1xxx
```

Passive → Active drift.

Drift is common in:

- learning  
- adaptation  
- long-term processes  

---

# **6. Axis Oscillation (Cyclic Dynamics)**

Oscillation is a back-and-forth switching of one or more axes.

### **6.1 Definition**

```
b_i → ¬b_i → b_i → ¬b_i → …
```

### **6.2 Interpretation**

- instability  
- conflict  
- feedback loops  
- unresolved tension  

### **6.3 Example**

```
xx0xxx ↔ xx1xxx
```

Passive ↔ Active oscillation.

Oscillation often appears in **social**, **psychic**, and **dynamic** layers.

---

# **7. Axis Convergence (Stabilizing Dynamics)**

Convergence occurs when multiple axes move toward a coherent pattern.

### **7.1 Definition**

```
b → b'
where b' has fewer mixed polarities
```

### **7.2 Example**

```
011100 → 011000 → 010000
```

Axes converge toward:

- stability  
- singularity  
- passivity  

Convergence corresponds to:

- resolution  
- grounding  
- simplification  

---

# **8. Axis Divergence (Expansive Dynamics)**

Divergence occurs when axes move toward more distributed, abstract, or indeterminate states.

### **8.1 Definition**

```
b → b'
where b' has more 1-poles
```

### **8.2 Example**

```
000011 → 010111 → 110111
```

Divergence corresponds to:

- expansion  
- exploration  
- complexity growth  

---

# **9. Axis Dynamics Under Stress**

Stress tends to push axes toward:

- **b1 = 1** (change)  
- **b3 = 1** (active)  
- **b6 = 1** (indeterminate)  

### **9.1 Example**

```
Base:     010010
Stress:   110011
```

Three axes flip.

Stress dynamics produce:

- cascades  
- divergence  
- oscillation  

---

# **10. Axis Dynamics Under Growth**

Growth tends to push axes toward:

- **b3 = 1** (active)  
- **b4 = 1** (distributed)  
- **b5 = 1** (abstract)  

### **10.1 Example**

```
Base:     001000
Growth:   001110
```

Three axes shift toward expansion.

Growth dynamics produce:

- convergence toward optimum  
- distributed abstraction  
- increased capacity  

---

# **11. Axis Dynamics in Trajectories**

Trajectories are sequences of axis changes.

### **11.1 Linear Trajectory**

```
011100 → 011000 → 010000
```

### **11.2 Divergent Trajectory**

```
000011 → 010111 → 110111
```

### **11.3 Spiral Trajectory**

```
101000 → 101100 → 001100 → 001000
```

Spirals combine:

- cascades  
- oscillations  
- convergence  

---

# **12. Axis Dynamics in Collapse**

Collapse tends to push axes toward:

- **b1 = 1** (change)  
- **b6 = 1** (indeterminate)  
- **b4 = 0** (singular)  

### **12.1 Example**

```
011110 → 111111 → 111101 → 011101
```

Collapse is:

- nonlinear  
- multi-axis  
- partially irreversible  

---

# **13. Axis Dynamics in Synthesis**

Synthesis tends to produce:

- distributed abstraction (b4 = 1, b5 = 1)  
- stable change (b1 = 1 but coherent)  
- determinate indeterminacy (b6 oscillates then stabilizes)  

### **13.1 Example**

```
010010 → 110011 → 110111 → 010111
```

Synthesis is:

- multi-step  
- cross-axis  
- stabilizing  

---

# **14. Summary**

Axis dynamics describe:

- how meaning moves  
- how states evolve  
- how processes unfold  
- how systems stabilize or destabilize  

They are the **temporal logic** of SUBIT‑64.

---

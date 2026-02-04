# SUBIT‑64 Mapping Rules  
## Formal Guidelines for Converting Inputs into Archetypes

This document defines the **official mapping rules** for translating any input — text, behavior, object, event, state, or concept — into one or more of the **64 SUBIT archetypes**.  
These rules ensure that classification is:

- consistent  
- interpretable  
- reproducible  
- domain‑agnostic  
- aligned with the System Stack, Axes, and Topology  

The mapping rules form the **core logic** of the SUBIT‑64 Classifier.

---

# 1. Mapping Pipeline Overview

Mapping proceeds through **four sequential stages**:

1. **Domain Identification**  
2. **Axis Extraction**  
3. **Topological Matching**  
4. **Stack‑Aligned Selection**

Each stage narrows the classification until a stable archetype (or cluster) is reached.

---

# 2. Rule Set A — Domain Identification

The first step is determining **which region of the System Stack** the input belongs to.

### A1. Physical inputs → Groups 1–2  
Objects, materials, structures, biological forms.

### A2. Behavioral inputs → Group 3  
Actions, processes, interactions.

### A3. Sensory inputs → Group 4  
Qualities, textures, perceptual descriptors.

### A4. Perceptual‑field inputs → Group 5  
Colors, atmospheres, experiential fields.

### A5. Emotional inputs → Group 6  
Feelings, moods, internal states.

### A6. Social inputs → Group 7  
Roles, communication, institutions.

### A7. Conceptual inputs → Group 8  
Models, abstractions, boundaries, meta‑structures.

**Domain identification does not determine the final archetype**, but it constrains the search space.

---

# 3. Rule Set B — Axis Extraction

Every input is mapped onto the **six SUBIT axes**:

1. Materiality ↔ Abstraction  
2. Unity ↔ Multiplicity  
3. Stability ↔ Change  
4. Internal ↔ External  
5. Order ↔ Chaos  
6. Passive ↔ Active  

### B1. Extract semantic polarity for each axis  
Example:

- “rapid escalation” → abstract? no; unity? no; change? yes; external? yes; chaos? yes; active? yes  
- Axis vector: `011111`

### B2. Convert axis polarities into a **6‑bit vector**  
This vector is the semantic fingerprint of the input.

### B3. Axis extraction always precedes archetype selection  
The classifier must not jump directly to a label.

---

# 4. Rule Set C — Topological Matching

The 6‑bit vector is compared to all 64 archetypes using **Hamming distance**.

### C1. Primary match = archetype with minimal distance  
Distance 0 → perfect match  
Distance 1 → adjacent  
Distance 2–3 → related  
Distance 4–5 → contrasting  
Distance 6 → opposite

### C2. If multiple archetypes tie, apply:  
- domain constraints  
- stack alignment  
- semantic density of the region  
- adjacency to known clusters (if multi‑label mode)

### C3. Topology determines **semantic smoothness**  
Transitions must follow axis flips, not arbitrary jumps.

---

# 5. Rule Set D — Stack‑Aligned Selection

After topological matching, the classifier ensures the result is consistent with the **System Stack**.

### D1. If the topological match contradicts domain identification  
→ choose the nearest archetype **within the correct group**.

Example:  
Input: “warm emotional support”  
Raw match: S28 Warmth (Perception)  
Corrected match: S48 Care (Social)

### D2. If multiple archetypes are equally valid  
→ choose the one **closest in stack level** to the domain.

### D3. If input spans multiple domains  
→ return a **cluster** (2–4 archetypes).

### D4. If input is ambiguous  
→ return a distribution, not a forced label.

---

# 6. Rule Set E — Multi‑Label Mapping

Some inputs naturally map to multiple archetypes.

### E1. Multi‑label mode is triggered when:  
- input contains multiple semantic centers  
- axis vector is unstable  
- topological neighbors have equal distance  
- domain is composite (e.g., “social tension”)

### E2. Output cluster must be:  
- topologically contiguous  
- stack‑consistent  
- semantically interpretable

### E3. Maximum cluster size: **4 archetypes**

---

# 7. Rule Set F — Trajectory Mapping

For sequences (narratives, processes, logs):

### F1. Each step is mapped independently  
### F2. Trajectory must follow topological adjacency  
### F3. Sudden jumps (>3 axes) require justification  
### F4. Output is a **path** through the 64‑node graph

This is used for:

- story arcs  
- emotional evolution  
- system state transitions  
- behavioral modeling  

---

# 8. Rule Set G — Differential Mapping

To compare two inputs:

### G1. Compute axis vectors for both  
### G2. Subtract vectors → semantic delta  
### G3. Map delta to nearest archetype(s)  
### G4. Output describes **how meaning changed**

Example:  
Calm → Tension  
Delta = +activation, +chaos, +external  
Mapped to: **S43 Tension**

---

# 9. Rule Set H — Error & Ambiguity Handling

### H1. If input is too vague  
→ classifier requests more context (if interactive)

### H2. If input spans incompatible domains  
→ return a **multi‑label distribution**

### H3. If input contradicts itself  
→ map to the **transition archetype** S58

### H4. If input is noise  
→ map to S32 Neutral

---

# 10. Summary

The SUBIT‑64 mapping rules ensure that classification is:

- axis‑driven  
- topologically consistent  
- stack‑aligned  
- interpretable  
- universal  

These rules form the **semantic contract** of the SUBIT‑64 Classifier.


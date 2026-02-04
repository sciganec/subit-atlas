# SUBIT‑64 Classifier — Examples  
## Practical Demonstrations of Mapping Inputs to Archetypes

This document provides **clear, practical examples** of how the SUBIT‑64 Classifier interprets real inputs and maps them to archetypes.  
Each example demonstrates:

- domain identification  
- axis extraction  
- topological matching  
- final archetype selection  
- optional secondary archetypes  
- explanation  

These examples serve as a reference for developers, researchers, and system designers integrating SUBIT‑64.

---

# 1. Physical / Material Examples (Groups 1–2)

## Example 1 — “a sharp metal tool”
**Domain:** Matter  
**Axes:** material, unity, stability, external, order, active  
**Vector:** `100101`  
**Primary:** **S04 Structure**  
**Secondary:** S27 Density, S07 Material  
**Explanation:** Defined by physical rigidity, form, and functional structure.

---

## Example 2 — “a growing plant”
**Domain:** Organic  
**Axes:** material, multiplicity, change, external, order, passive  
**Vector:** `110001`  
**Primary:** **S09 Growth**  
**Secondary:** S08 Seed, S14 System  
**Explanation:** Emphasizes biological expansion and development.

---

# 2. Dynamics Examples (Group 3)

## Example 3 — “rapid escalation”
**Domain:** Dynamics  
**Axes:** abstract, multiplicity, change, external, chaos, active  
**Vector:** `011111`  
**Primary:** **S17 Acceleration**  
**Secondary:** S43 Tension, S57 Chaos  
**Explanation:** Increase in speed, activation, and instability.

---

## Example 4 — “a repeating daily routine”
**Domain:** Dynamics  
**Axes:** abstract, unity, stability, internal, order, passive  
**Vector:** `101000`  
**Primary:** **S22 Cycle**  
**Secondary:** S06 State  
**Explanation:** Stable, repetitive pattern.

---

# 3. Perception & Spectrum Examples (Groups 4–5)

## Example 5 — “soft warm lighting”
**Domain:** Perception  
**Axes:** material, unity, stability, external, order, passive  
**Vector:** `100000`  
**Primary:** **S28 Warmth**  
**Secondary:** S26 Softness, S24 Light  
**Explanation:** Sensory qualities of heat, comfort, and illumination.

---

## Example 6 — “cold analytical tone”
**Domain:** Spectrum  
**Axes:** abstract, unity, stability, external, order, passive  
**Vector:** `101001`  
**Primary:** **S36 Blue**  
**Secondary:** S29 Cold  
**Explanation:** Structured, distant, intellectual quality.

---

# 4. Psychic Examples (Group 6)

## Example 7 — “feeling overwhelmed”
**Domain:** Psychic  
**Axes:** internal, multiplicity, change, chaos, passive  
**Vector:** `010110`  
**Primary:** **S45 Vulnerability**  
**Secondary:** S43 Tension, S57 Chaos  
**Explanation:** Internal overload and emotional instability.

---

## Example 8 — “calm confidence”
**Domain:** Psychic  
**Axes:** internal, unity, stability, order, active  
**Vector:** `101010`  
**Primary:** **S44 Strength**  
**Secondary:** S42 Calm  
**Explanation:** Stable internal equilibrium with directed will.

---

# 5. Social Examples (Group 7)

## Example 9 — “a supportive team environment”
**Domain:** Social  
**Axes:** multiplicity, stability, internal, order, active  
**Vector:** `011010`  
**Primary:** **S50 Community**  
**Secondary:** S48 Care  
**Explanation:** Collective cohesion and mutual support.

---

## Example 10 — “strict corporate hierarchy”
**Domain:** Social  
**Axes:** unity, stability, external, order, active  
**Vector:** `101011`  
**Primary:** **S54 Institution**  
**Secondary:** S49 Authority  
**Explanation:** Formal structure and top‑down organization.

---

# 6. Abstract Examples (Group 8)

## Example 11 — “a conceptual framework”
**Domain:** Abstract  
**Axes:** abstract, unity, stability, order, passive  
**Vector:** `101001`  
**Primary:** **S62 Model**  
**Secondary:** S56 Order  
**Explanation:** Structured abstraction representing reality.

---

## Example 12 — “a chaotic transition period”
**Domain:** Abstract  
**Axes:** abstract, multiplicity, change, chaos, active  
**Vector:** `011111`  
**Primary:** **S58 Transition**  
**Secondary:** S57 Chaos  
**Explanation:** Unstable change between states.

---

# 7. Multi‑Label Examples

## Example 13 — “social tension rising in a group”
**Domain:** Social + Psychic  
**Axes:** multiplicity, change, external, chaos, active  
**Vector:** `011111`  
**Primary:** **S43 Tension**  
**Cluster:** S20 Interaction, S50 Community, S57 Chaos  
**Explanation:** Emotional stress expressed through group dynamics.

---

## Example 14 — “creative synthesis of ideas”
**Domain:** Abstract  
**Axes:** abstract, multiplicity, change, internal, order, active  
**Vector:** `011011`  
**Primary:** **S63 Synthesis**  
**Secondary:** S37 Purple  
**Explanation:** Integration of multiple conceptual elements.

---

# 8. Trajectory Example

## Example 15 — “conflict → negotiation → agreement”
**Input sequence:**  
1. conflict  
2. negotiation  
3. agreement  

**Mapped trajectory:**  
- **S46 Conflict**  
- **S20 Interaction**  
- **S63 Synthesis**

**Explanation:**  
A classic transition from opposition → exchange → integration.

---

# Summary

This file demonstrates how SUBIT‑64 handles:

- physical descriptions  
- emotional states  
- social dynamics  
- abstract concepts  
- multi‑label cases  
- trajectories  

These examples illustrate the **practical, interpretable behavior** of the SUBIT‑64 Classifier.


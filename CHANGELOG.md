# SUBIT‑64 Changelog

All notable changes to this project will be documented in this file.  
This project follows a clean, semantic, human‑readable versioning style.

---

## [1.0.0] — Initial Public Release
### Added
- Full SUBIT‑64 semantic atlas (64 archetypes)
- Complete English dictionary:
  - `en_name`
  - `mask`
  - `shadow`
  - `optimum`
  - `pathology`
- YAML version of the dictionary for configuration‑friendly workflows
- Mapping examples dataset (`subit-mapping-examples.json`)
- Minimal interpretable classifiers:
  - `subit-mapper.py` (Python CLI)
  - `subit-mapper.js` (Node.js CLI)
  - `subit-mapper-web.js` (browser‑ready ES module)
- CLI documentation:
  - `cli-demo.md`
  - `cli-demo-advanced.md`
- Repository structure and release assets

### Notes
- Classifier uses transparent nearest‑example Jaccard similarity
- All outputs are deterministic and interpretable
- Designed for extension: axes, topology, embeddings, pipelines

---

## [0.9.0] — Pre‑Release (Internal)
### Added
- Initial SUBIT‑64 node definitions
- Early mapping examples
- Prototype Python classifier
- Internal documentation drafts

### Changed
- Refined naming conventions for all 64 nodes
- Updated mask/shadow/optimum/pathology structure
- Improved example coverage across stack layers

---

## [0.8.0] — System Architecture Draft
### Added
- SUBIT‑64 topological model
- Stack structure (Matter → Abstract)
- Axis definitions and polarity logic

---

## [0.1.0] — Concept Formation
### Added
- First sketches of SUBIT system
- Early archetype grid
- Initial semantic axes


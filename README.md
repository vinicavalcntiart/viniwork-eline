# UAE Character Project — Endstar

Working repository for the UAE character pipeline on **Endstar** (E-Line Media / Endless Studios).

**Art Lead:** Vinícius Vieira Cavalcanti
**Creative Director:** Daniel (final approval authority on all character work)
**Creative Director, Endstar:** Colin Morrison

---

## Authority hierarchy

```
Cavalcanti (2026) article
        ↓
UAE Character Art Direction Manual
        ↓
Production decisions (sculpt, texture, rig)
```

Anything outside the article's evidence base is marked `[EXTENSION]`. Anything the
evidence base does not answer is marked `[NEEDS EVIDENCE]` and researched before
production, never improvised.

---

## Contents

| Path | What it holds |
|---|---|
| `docs/article/` | The article and its supporting contextual report |
| `docs/manual/` | UAE Character Art Direction Manual source and build |
| `docs/process/` | Production process documents |
| `docs/reference/` | Research briefs and cultural evidence base |
| `source/` | Original files exactly as delivered (.docx, .md) |

Binaries stay in Google Drive. See [drive-index.md](docs/reference/drive-index.md).

Files under `docs/` are the canonical, working versions. Files under `source/`
are byte-for-byte originals kept for provenance. Where the two differ, the
difference is em-dash normalization and is recorded in the canonical file's
header comment and in its commit message.

### Process documents

- [UAE Character Reference Workflow](docs/process/uae-character-reference-workflow.md)
  Freepik 2D → Tripo AI 3D → manual sculpt. Includes the eight-check Cultural
  Verification Gate that every reference output must pass.

### Article

- [Designing Emirati Characters: Evidence-Based Criteria for Stylized 3D Games](docs/article/designing-emirati-characters.md)
  Full manuscript (Cavalcanti, 2026). Sole authority source for the Manual.
- [Endstar Contextual Report](docs/article/endstar-contextual-report.md)
  Platform definition, visual system, and UAE market context. Citation support
  for the article's non-peer-reviewed platform claims.

### Reference

- [Project Drive Index](docs/reference/drive-index.md)
  Every file in the project Drive folder: ID, link, and what it is. Source PDFs,
  the Manual, and reference images live there, not here. Also lists the gaps
  against the article's reference list.
- [UAE Cultural Research Brief](docs/reference/uae-cultural-research-brief.md)
  Compiled evidence base: facial features, skin tone, traditional dress, Freej,
  UAE animation industry context, plus the quick-reference checklist for
  evaluating any Emirati character WIP.

---

## Status

**Delivered to SVN:** UAE Very Old Female (elder) and UAE Young Female (18), with
high poly, low poly, LODs, rigging, three texture variants for the elder and two
for the young.

**Open action:** adjust the elder's head cover so it meets approximately the top
of the mask.

**Next cycle:** UAE male characters.

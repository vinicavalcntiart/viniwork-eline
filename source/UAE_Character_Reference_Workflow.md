# UAE Character Reference Workflow
### Internal reference pipeline — Freepik 2D → Tripo AI 3D → Manual Sculpt
**Author:** Vinícius Vieira Cavalcanti — Senior 3D Character Artist / Art Lead
**Project:** Endstar UAE Characters — E-Line Media / Endless Studios
**Status:** Internal process document
**Authority source:** UAE Character Art Direction Manual (Cavalcanti, 2026)

---

## 0. HARD RULES (read before every cycle)

**R1 — AI is reference only.**
Freepik and Tripo AI outputs are internal visual reference, equivalent to a mood board. No AI-generated geometry, topology, texture, or image enters any deliverable, handoff, or material shown to the Art Director. Everything delivered is manually sculpted, retopologized, and textured by the artist.

**R2 — The Manual is the cultural authority, not the AI.**
No AI output is culturally trustworthy by default. Generators trend toward generic MENA representation: incorrect burqa geometry, darkened or yellowed skin tones, orientalist patterns, wrong dress silhouettes. Every AI output passes the Cultural Verification Gate (Section 3) before it is allowed to influence the sculpt.

**R3 — Anything beyond documented evidence is flagged.**
Design elements not supported by the Manual's evidence base are marked `[EXTENSION]` and require Art Director approval. Cultural questions the Manual does not answer are marked `[NEEDS EVIDENCE]` and trigger research before production, never improvisation.

**R4 — Timebox.**
Reference generation (Stages 1 and 2 combined) is capped at 1 working day per character. Reference is a means, not a deliverable.

---

## 1. STAGE 1 — 2D Concept Reference (Freepik)

**Goal:** Visualize proportion and design directions in Endstar stylization before touching ZBrush.

**Process:**
1. Consult the Manual sections relevant to the variant (variant definition, identity carriers, dress specification) BEFORE writing any prompt.
2. Anchor every prompt with approved character references (`@` anchors) to lock Endstar stylization level.
3. Generate 2–3 directions maximum per open question (e.g., teen vs young adult proportion). Wide exploration is scope creep.
4. Prompts must explicitly specify the documented cultural markers so the generator does not default to generic MENA:
   - Sallat al saif nasal profile: straight bridge, narrow alar base, pointed tip
   - Correct burqa geometry when applicable: rigid golden mask, falcon read, eyes and cheekbones visible
   - Skin tone: warm light-medium, yellow present but not dominant
   - Abuteela in documented palette: deep green, red, white, gold
5. Run every output through the Cultural Verification Gate (Section 3).
6. Save passing outputs to the internal reference board with the variant tag. Discard failures; do not "fix them mentally" and keep them.

**Output:** Internal reference board, verified. Nothing from this stage is shown externally.

---

## 2. STAGE 2 — 3D Volume Reference (Tripo AI)

**Goal:** Translate the verified 2D direction into a rough 3D volume reference to study proportion in space (cranium-to-face ratio, silhouette, mass distribution).

**Process:**
1. Input only concepts that passed the Gate in Stage 1.
2. Treat the Tripo output as a 3D sketch to observe, the same way a maquette photo would be used. It is viewed, never imported into the production file.
3. What to extract from it: silhouette read, proportion relationships, volume balance.
4. What to ignore from it: surface detail, topology, facial specificity. Tripo will not produce a correct sallat al saif profile or correct burqa geometry. The Manual governs those, not the mesh.
5. Re-check the volume against the Gate. 2D-to-3D conversion frequently distorts nasal profile and face shape.

**Output:** Verified 3D visual reference, screenshots on the internal board. The Tripo mesh itself never enters ZBrush, Blender, or any production directory.

---

## 3. CULTURAL VERIFICATION GATE (mandatory, per output)

Binary pass/fail. One failure rejects the output as reference.

| # | Check | Pass condition | Source |
|---|-------|---------------|--------|
| G1 | Nasal profile | Straight bridge, no hump or concavity, narrow alar base, pointed tip. Legible at stylization level. | Wang et al. (2015); Manual §2.2 |
| G2 | Eye construction | Large almond shape, defined outer corner, constructed eyelid rim, socket depth present. | Manual evidence base |
| G3 | Face shape | Oval to round. Not angular, jaw does not dominate. | Manual evidence base |
| G4 | Skin tone | Warm light-medium. Yellow present, not dominant. Not darkened toward generic MENA. | Daniel's direct observation; Cultural Research Brief |
| G5 | Burqa (when present) | Rigid golden mask, falcon read, covers nose/mouth/chin, eyes and cheekbones visible. | Goto (2016); Khalaf (2005) |
| G6 | Dress | Abuteela in documented palette and pattern language (floral/geometric embroidery, or Art Director–supplied pattern). No orientalist generic costume. | Khalaf (2005); Cultural Research Brief |
| G7 | Aging (older variants) | Aging distributes around the nose, never across it. Nasal profile unchanged by age. | Manual §B.3/B.4 |
| G8 | Stylization ceiling | Face does not read more realistic than the approved UAE Female benchmark. | Approved character renders |

**On failure:** regenerate with a corrected prompt targeting the failed check, or discard. Never carry a failed output forward "with mental corrections."

**On uncertainty:** if a check cannot be evaluated from the Manual or the evidence base, mark `[NEEDS EVIDENCE]`, research per the project's academic protocol, and do not proceed on that element until resolved.

---

## 4. STAGE 3 — Manual Sculpt (ZBrush)

**Goal:** Produce the actual asset. This stage is 100% the artist's hand.

**Process:**
1. Sculpt from the approved base head/body of the parent character (asset reuse rule).
2. The reference board (Stages 1–2) informs proportion decisions; it is not traced, projected, or imported.
3. Sallat al saif is sculpted first and locked. All other proportion work (cranium ratio, eye scale, aging vectors) happens around it.
4. After each proportion or aging pass: re-run G1 and G7. Age and youth passes are the two highest-risk moments for nasal profile erosion.
5. Blockout screenshot goes to the Art Director at the earliest readable state ("sketches out and react" model). Feedback is incorporated before any refinement.
6. Previous versions are archived, never overwritten.

**Output:** Head blockout screenshots for Art Director reaction, then refined sculpt following approval.

---

## 5. STAGE 4 — Production Handoff

1. Retopology, UVs (one UV set per mesh), bake, textures (albedo + mixmap + normal only).
2. Extreme-pose deformation test BEFORE handoff (skinning verification on the shared rig).
3. Deliverables checklist confirmed against Endstar pipeline constraints.
4. Any `[EXTENSION]` items listed explicitly in the handoff message for Art Director sign-off.

---

## 6. WORKFLOW SUMMARY

```
Manual consult → Freepik 2D (anchored, 2–3 directions) → GATE
→ Tripo 3D volume (view only) → GATE
→ ZBrush sculpt from approved base (sallat al saif first)
→ Blockout screenshot → AD reaction → refine
→ Retopo / bake / texture → deformation test → handoff
```

**Speed comes from the gates, not despite them.** Every hour spent verifying reference against the Manual saves days of resculpting after a cultural miss reaches the Art Director.

# UAE Male, brief from Daniel

**Date:** 1 September 2026
**Source:** Slack, plus an annotated Blender screenshot over a placeholder mesh
**Status:** Direction received, research not started

---

## Variants

Four age variants on two shared bodies.

| Variant | Body | Note |
|---|---|---|
| Young | Slim | Shares body with Middle "for now" |
| Middle | Slim | |
| Old | Bigger | Shares body with Elderly "for now" |
| Elderly | Bigger | |

"For now" in both lines. Read that as: two bodies is the starting point, not a promise
that it stays two.

## Shared across all four

- Body, head, hands as the core asset
- Kandura with **no collar**
- **Emirati tarboosh tassel**, on a toggle
- **Gutra + agal**, on a toggle
- **Hair**, on a toggle
- **No separate toes**. Feet and sandals read as one mesh.

## What the annotations say, in the order they appear on the sketch

1. Gutra + agal, toggle
2. Young / middle age / old / elderly, written beside the head
3. Hair toggle
4. Head
5. Emirati tarboosh tassel, toggle
6. NO COLLAR
7. Body, head, hands
8. Slim / Fat
9. No separate toes

## Pipeline reading

Toggles on the Endstar rig mean separate meshes switched in engine. No shape keys, so
hair and gutra are two meshes that both have to sit on the same scalp volume without
one clipping through the other in either state. The tassel is a hanging element on a
rig with no skirt bones and no corrective smooth, so it either rides on an existing
bone or gets weighted to the chest with a soft falloff and tested on extreme poses
before handoff.

Two bodies, four heads. The asset reuse rule applies: each head is sculpted from the
approved base, *sallat al saif* first and locked, then the age pass around it.

## Open questions for Daniel

Not asked yet. Listed so they go into one message, not four.

- **Tassel default.** The collarless cut with the tassel is what makes a kandura read
  Emirati rather than Saudi or Omani. If the toggle defaults to off, the character loses
  the marker. Proposal: default on, toggle exists for a reason we name.
- **Beard.** Old and Elderly Emirati men read through a white or grey beard as much as
  through the face. Hair is on a toggle; beard is not mentioned. Is it a toggle, baked
  into the head, or absent?
- **Bisht.** The dark cloak with gold trim is elder and formal wear. Not in the brief.
  Confirm it is out of scope so no one sculpts it.
- **Gutra colour.** White gutra or red-checked shemagh. Both are worn. White is the
  safer default. Confirm.

## Evidence base

Khalaf (2005) covers men's national dress directly, kandura and gutra included. That is
the source to consult before any reference generation. Alshehhi et al. (2025) ran on 89
men and 83 women, so the facial morphology data holds for the male heads.

`[NEEDS EVIDENCE]` on age-specific conventions: whether elder men wear the gutra
differently, whether the agal is dropped with age, and what the young variant does when
hair is on and gutra is off. Research before improvising, per rule R3.

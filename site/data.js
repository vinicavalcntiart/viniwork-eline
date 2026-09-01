// UAE Character Project · task monitor data
// Edit this file to update the site. Status values: done | active | next | blocked | waiting | verify
window.PROJECT = {
  updated: "2026-09-01",
  deadline: "Before October 2026",
  drive: "https://drive.google.com/drive/folders/1fuf5EL2fl3Z_0pIhtapwFMalTcG7BDKf",
  repo: "https://github.com/vinicavalcntiart/viniwork-eline/tree/claude/uae-character-project-r0w45n",

  characters: [
    { name: "UAE Female", role: "Master reference", status: "done",
      note: "Burqa, green Abuteela. Stylization benchmark for every UAE character. Live gameplay demo with dialogue, July 2026." },
    { name: "UAE Very Old Female", role: "Elder", status: "done",
      note: "Delivered to SVN. High poly, low poly, LODs, rig, three texture variants. Daniel: \"looking great\"." },
    { name: "UAE Young Female", role: "18 years old", status: "done",
      note: "Delivered to SVN. Two texture variants. Daniel: \"this feels dead on\", \"she looks great\"." },
    { name: "UAE Male", role: "Next cycle", status: "active",
      note: "Variants, count and age range still to be defined with Daniel." },
  ],

  groups: [
    {
      title: "UAE Male cycle",
      tasks: [
        { t: "Define variants with Daniel: how many, which ages, which dress register", s: "blocked", why: "Call pending, Daniel is adding it to the calendar" },
        { t: "Consult the Manual and Khalaf (2005) on men's national dress: kandura, ghutra, agal, bisht, na'al", s: "next" },
        { t: "Male facial morphology beyond the nose: what the evidence base covers and what it does not", s: "next", flag: "NEEDS EVIDENCE" },
        { t: "Freepik 2D reference, anchored to approved characters, 2 to 3 directions per open question, one day cap", s: "next" },
        { t: "Tripo AI volume reference, view only, never imported", s: "next" },
        { t: "Cultural Verification Gate, G1 to G8, on every reference output", s: "next" },
        { t: "ZBrush blockout from approved base, sallat al saif sculpted first and locked", s: "next" },
        { t: "Blockout screenshot to Daniel, react before refining", s: "next" },
        { t: "Refine sculpt and polypaint", s: "next" },
        { t: "Retopo, one UV set per mesh, bake, albedo + mixmap + normal", s: "next" },
        { t: "Shared rig, weight paint with auto-normalize, extreme pose deformation test", s: "next" },
        { t: "SVN handoff with every [EXTENSION] item listed for Daniel", s: "next" },
      ]
    },
    {
      title: "Female cycle, closing",
      tasks: [
        { t: "Elder head cover continuity up to the top of the mask", s: "verify", why: "Daniel's single open note. Confirm it went into the delivered build." },
      ]
    },
    {
      title: "Article",
      tasks: [
        { t: "Locate Wang et al. (2015), Perception 44(3). One of the three pillars, not in the Drive folder", s: "active", pri: "high" },
        { t: "Settle the Moana attribution: Ercegovac et al. (2025) or Clarence & Rosli (2025)", s: "active", pri: "high", why: "The preservation-amplification lens rests on it. Read Ercegovac before E6." },
        { t: "Fix the broken sentence in Theoretical Framework: \"The representation of literature identifies the failure of modes\"", s: "next" },
        { t: "Renumber figures in order of first mention (currently 2, 3, 1, 4...)", s: "next" },
        { t: "Unify Endless Studios 2024a/b/c/d lettering between article and contextual report", s: "next" },
        { t: "Swap Figure 2 to UAEWomans.png and rewrite the caption for the plural subject", s: "next" },
        { t: "Trace or replace both burqa photographs, source unknown", s: "next", flag: "NEEDS EVIDENCE" },
        { t: "Hall (1980) Encoding/decoding: the folder has Da diáspora, a different edition", s: "next" },
        { t: "Studio clearance for Endstar images in an academic publication", s: "blocked", why: "Needs Daniel" },
        { t: "E6 protocolo checagem: AI language pass and APA 7 pass", s: "waiting" },
        { t: "Abstract, written last", s: "waiting" },
      ]
    },
    {
      title: "Art Direction Manual",
      tasks: [
        { t: "PDF layout refinement, build_manual.py", s: "active" },
        { t: "Male character section, after the research tasks above", s: "waiting" },
        { t: "Commit build_manual.py and Manual source to the repository", s: "next" },
      ]
    },
  ],

  pillars: [
    { name: "Emirati facial morphology", sources: "Wang et al. (2015); Alshehhi et al. (2025)", state: "Alshehhi in Drive. Wang missing." },
    { name: "Traditional dress as semiotic system", sources: "Khalaf (2005); Goto (2016)", state: "Both in Drive." },
    { name: "The Freej precedent", sources: "Ercegovac et al. (2025); Tariq & Willard (2022)", state: "Both in Drive." },
  ],

  sources: [
    { ref: "Alshehhi et al. (2025), PLOS ONE 20(2)", file: "journal_pone_0299660.pdf", id: "1cELTWpmnTHyO_ewvu0hvWzLEkWzvrzih", cited: true },
    { ref: "Khalaf (2005), national dress", file: "National_dress_and_the_construction_of_E_OCR.pdf", id: "1I84CbfKH4l9ryYlTjKE4HS5io7trka2k", cited: true },
    { ref: "Goto (2016), Burqu'", file: "2_04Goto1.pdf", id: "1OGrpnXf6OF_bG-L9d1IOqLaXt5rA3fgx", cited: true },
    { ref: "Ercegovac et al. (2025), Freej", file: "kkonline202516166.pdf", id: "1Ujh2iqegoLPsohK2AN_T3HL7M4CdSNCg", cited: true },
    { ref: "Tariq & Willard (2022)", file: "UAEAnimationIndustry.pdf", id: "1lvRfjZn4FBNdMBO_pp5zr_4tAnH9HgBB", cited: true },
    { ref: "Alghamdi (2024), hunting stereotypes", file: "HuntingStereotypes.pdf", id: "1bdTtU7nxouzaT75dNFdBKCAfkgTGW_pu", cited: true },
    { ref: "Hall, Da diáspora (edition mismatch)", file: "da-diaspora-stuart-hall_compressed.pdf", id: "1M4iMVbbQx4anBp5hIi-zWCxrIINz-GlW", cited: true, warn: true },
    { ref: "Clarence & Rosli (2025), IJRISS, Moana case", file: "UAEarticle1.pdf", id: "1PY5NTn7Q4Klo-m9t6GLtuwRr6jB4ajH6", cited: false },
    { ref: "Sheen et al. (2018), PLOS ONE, hijab", file: "UAEarticle3.pdf", id: "1z_k0DYaCYa8zjLXUUc180js_H9sl2zu2", cited: false },
    { ref: "Cartoons and cultures, UAE animation history", file: "Cartoons_and_Cultures_History_of_the_Uni.pdf", id: "1xM3SgNi5p36nAzzsS7XlAuuxY_n3vUsV", cited: false },
    { ref: "Martino, Métodos de pesquisa em comunicação", file: "905083266Martino...OCR.pdf", id: "1VICNt1kd3pW_0vRTFzhz143mxs9FFO0f", cited: false },
    { ref: "UAE Character Art Direction Manual", file: "UAE_Character_Art_Direction_Manual.pdf", id: "1SikVGqreft7j40A2pvbJOLNmyRfXT3UK", cited: false, project: true },
  ],

  missing: [
    "Wang et al. (2015)", "Šisler (2008)", "Al-Rawi (2024)", "Alfaraj (2019)",
    "Lataifeh et al. (2024)", "Said (1978)", "Creswell & Creswell (2018)", "Merriam & Tisdell (2016)",
  ],

  figures: [
    { n: 1, title: "UAE Female, full body and close-up", file: "imagem_20260526_174118913.png", id: "1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5", state: "mapped" },
    { n: 2, title: "Traditional Emirati woman wearing burqa", file: "UAEWomans.png (recommended) or imagem_20260526_234036116.png (current)", id: "1X3DKSRRjxrXkUQbmdaBaIFJKfHXJ1yvl", state: "swap" },
    { n: 3, title: "Shaheen and Zafina", file: "reproduce from Alghamdi (2024)", id: "1bdTtU7nxouzaT75dNFdBKCAfkgTGW_pu", state: "extract" },
    { n: 4, title: "GWAS Manhattan plots", file: "reproduce from Alshehhi et al. (2025), open access", id: "1cELTWpmnTHyO_ewvu0hvWzLEkWzvrzih", state: "extract" },
    { n: 5, title: "UAE Female, facial detail", file: "crop of imagem_20260526_174118913.png or new render", id: "1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5", state: "partial" },
    { n: 6, title: "Freej, the four main characters", file: "reproduce from Ercegovac et al. (2025)", id: "1Ujh2iqegoLPsohK2AN_T3HL7M4CdSNCg", state: "extract" },
    { n: 7, title: "UAE Female, applied criteria", file: "imagem_20260526_174118913.png with annotation", id: "1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5", state: "partial" },
    { n: 8, title: "Endstar character roster", file: "imagem_20260526_174155428.png (lineup)", id: "1VewIzZF3uM6um43G83GngEaQXzLobFr5", state: "mapped" },
  ],

  images: [
    { file: "imagem_20260526_174118913.png", id: "1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5", what: "UAE Female render, full body and close-up. Figures 1, 5, 7." },
    { file: "UAEWomans.png", id: "1X3DKSRRjxrXkUQbmdaBaIFJKfHXJ1yvl", what: "Four Emirati women, gold burqas, Abuteela in four colours, Al Sadu backdrop. Recommended Figure 2." },
    { file: "imagem_20260526_234036116.png", id: "14N2F_B6r-szq394JBytLsmhtwtpKwWY-", what: "Elderly woman, dark burqa with bronze strip, areesh wall. Current Figure 2. 532 by 392." },
    { file: "imagem_20260526_174155428.png", id: "1VewIzZF3uM6um43G83GngEaQXzLobFr5", what: "Endstar formation lineup, two rows. Figure 8." },
    { file: "imagem_20260526_174146371.png", id: "148xFg45hKHBdewWB3Jb6mXgDoDqNAKXi", what: "Endstar blacksmith scene, two characters at an anvil. Best close-range stylization ceiling example." },
    { file: "imagem_20260526_174128009.png", id: "1Zq29io2O72suHn-RtMKKmgqspj-cHdp8", what: "Endstar group on deck. Too crowded for print." },
    { file: "imagem_20260526_174137432.png", id: "13YZaFJcmxALfQp4l7OgqCR78D_l4QbH1", what: "Endstar development build, dungeon interior, UI and watermark visible. Recapture clean if wanted." },
    { file: "imagem_20260526_174110039.png", id: "1yzk6JoEiYlLo5zVxCHa3NUvyOqcCQAhN", what: "E-Line Media portfolio sheet, sea-warrior character with trident, three views. Stylization reference." },
  ],

  locked: [
    ["Nose", "Sallat al saif. Straight bridge, narrow alar base, pointed descending tip. Aging goes around it, never over it."],
    ["Eyes", "Large almond, defined outer corner, constructed eyelid rim, socket depth. Flush lids read flat."],
    ["Face", "Oval to round. Jaw does not dominate. Cheekbones present, not exaggerated."],
    ["Skin", "Paler than assumed for MENA, per Daniel in person. Yellow present, never dominant."],
    ["Shayla", "Pure matte black. Zero sheen."],
    ["Burqa", "Rigid gold mask over nose and mouth, eyes and cheekbones visible. Falcon read."],
    ["Elder underdress", "Al Sadu bands, red / black / white / burnt orange. [EXTENSION]"],
    ["Jewelry", "Dark aged gold, matching the approved UAE Female."],
  ],

  pipeline: [
    "No skirt bones", "No shape keys", "No corrective smooth", "Auto-normalize on",
    "No facial bones or blend shapes", "Albedo + mixmap + normal only", "One UV set per mesh", "No 2D concept art, vis dev goes to 3D",
  ],
};

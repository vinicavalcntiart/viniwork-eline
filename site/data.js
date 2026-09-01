// UAE Character Project · task monitor data
// Edit this file to update the site. Status values: done | active | next | blocked | waiting | verify
window.PROJECT = {
  updated: "2026-09-01",
  deadlineISO: "2026-10-01",
  articleStage: 5,
  stages: ["Martino + Creswell + Merriam","Bullets in Portuguese","Verify all references","Send for approval","Wait for approval","Write English, APA 7","Protocolo checagem","Correct all flags","Approval","Advance"],
  gate: [
    ["G1","Nasal profile","Straight bridge, no hump or concavity, narrow alar base, pointed tip. Legible at stylization level."],
    ["G2","Eye construction","Large almond, defined outer corner, constructed eyelid rim, socket depth present."],
    ["G3","Face shape","Oval to round. Not angular. Jaw does not dominate."],
    ["G4","Skin tone","Warm light-medium. Yellow present, not dominant. Not darkened toward generic MENA."],
    ["G5","Burqa, when present","Rigid golden mask, falcon read, covers nose, mouth and chin. Eyes and cheekbones visible."],
    ["G6","Dress","Documented palette and pattern language. No orientalist generic costume."],
    ["G7","Aging, older variants","Aging distributes around the nose, never across it."],
    ["G8","Stylization ceiling","Does not read more realistic than the approved UAE Female."],
  ],
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
    { name: "Male, Young", role: "Slim body · due 15 Sep", status: "active",
      note: "White robe, no collar, tassel. White head cloth up off the shoulders, ears covered. Hair toggle." },
    { name: "Male, Elderly", role: "Bigger body · due 15 Sep", status: "active",
      note: "Same dress. Aging around the nose, never over it. Bigger body is shared with Old later." },
    { name: "Male, Middle", role: "Slim body · later", status: "waiting",
      note: "Reuses the Young body. Head only." },
    { name: "Male, Old", role: "Bigger body · later", status: "waiting",
      note: "Reuses the Elderly body. Head only." },
  ],

  groups: [
    {
      title: "Sprint · Young + Elderly · due 15 Sep",
      tasks: [
        { t: "Slim body blockout from the approved base (Young)", s: "next" },
        { t: "Bigger body blockout (Elderly)", s: "next" },
        { t: "Young head: straight nose first, then the rest", s: "next" },
        { t: "Elderly head: straight nose first, age around it, check the nose again after", s: "next" },
        { t: "White robe, no collar, tassel on. Same mesh for both bodies, scaled", s: "next" },
        { t: "White head cloth + black cord as one toggle mesh. Off the shoulders, ears covered", s: "next" },
        { t: "Hair mesh for the Young, fits under the head cloth volume", s: "next" },
        { t: "Feet + sandals as one mesh, no toes", s: "next" },
        { t: "Blockout screenshots to Daniel", s: "next" },
        { t: "Refine + polypaint. White on white: separate robe and head cloth by weave in normal and roughness", s: "next" },
        { t: "Retopo, UVs, bake, albedo + mixmap + normal", s: "next" },
        { t: "Rig, weights, tassel to chest with soft falloff, extreme pose test", s: "next" },
        { t: "SVN handoff, both characters", s: "next" },
      ]
    },
    {
      title: "Later · Middle + Old",
      tasks: [
        { t: "Middle head on the Young body", s: "waiting" },
        { t: "Old head on the Elderly body", s: "waiting" },
      ]
    },
    {
      title: "Article · parked",
      tasks: [
        { t: "Find Wang et al. (2015). Pillar source, not in Drive", s: "waiting" },
        { t: "Check who actually analysed Moana: Ercegovac or the IJRISS paper", s: "waiting" },
        { t: "Fix figure order, citation letters, one broken sentence, Figure 2 swap", s: "waiting" },
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
    ["Male dress", "All white. Kandura with no collar, tarboosh tassel. Daniel, 1 Sep 2026."],
    ["Gutra fit", "Never on the shoulders. Always covering the ears. Every pose. Daniel, 1 Sep 2026."],
  ],

  pipeline: [
    "No skirt bones", "No shape keys", "No corrective smooth", "Auto-normalize on",
    "No facial bones or blend shapes", "Albedo + mixmap + normal only", "One UV set per mesh", "No 2D concept art, vis dev goes to 3D",
  ],
};

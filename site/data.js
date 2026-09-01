// Monitor do projeto UAE. Edite este arquivo para atualizar o site.
// Status: done | active | next | blocked | waiting | verify
window.PROJECT = {
  version: 3,
  updated: "2026-09-01",
  deadline: "15 de setembro",
  deadlineISO: "2026-09-15",
  drive: "https://drive.google.com/drive/folders/1fuf5EL2fl3Z_0pIhtapwFMalTcG7BDKf",
  repo: "https://github.com/vinicavalcntiart/viniwork-eline/tree/claude/uae-character-project-r0w45n",
  articleStage: 5,
  stages: ["Martino, Creswell, Merriam","Bullets em português","Verificar referências","Enviar para aprovação","Aguardar aprovação","Escrever em inglês, APA 7","Protocolo checagem","Corrigir flags","Aprovação","Avançar"],

  characters: [
    { name: "UAE Female", role: "Referência mestra", status: "done",
      note: "Burqa, Abuteela verde. Benchmark de estilização para todo personagem UAE. Demo ao vivo com diálogo, julho 2026." },
    { name: "UAE Very Old Female", role: "Idosa", status: "done",
      note: "Entregue no SVN. High, low, LODs, rig, três variantes de textura. Daniel: \"looking great\"." },
    { name: "UAE Young Female", role: "18 anos", status: "done",
      note: "Entregue no SVN. Duas variantes de textura. Daniel: \"this feels dead on\"." },
    { name: "Masculino, Jovem", role: "Corpo magro · 15 set", status: "active",
      note: "Robe branco sem colarinho, tassel ligado. Pano branco na cabeça acima dos ombros, orelhas cobertas. Toggle de cabelo." },
    { name: "Masculino, Idoso", role: "Corpo maior · 15 set", status: "active",
      note: "Mesma roupa. Envelhecimento em volta do nariz, nunca por cima. Corpo compartilhado com o Velho depois." },
    { name: "Masculino, Meia-idade", role: "Corpo magro · depois", status: "waiting",
      note: "Reusa o corpo do Jovem. Só cabeça." },
    { name: "Masculino, Velho", role: "Corpo maior · depois", status: "waiting",
      note: "Reusa o corpo do Idoso. Só cabeça." },
  ],

  groups: [
    {
      title: "Jovem + Idoso · entrega 15 set",
      tasks: [
        { t: "Cabeças do Jovem e do Idoso. Nariz reto primeiro, envelhecer em volta", s: "active", why: "Começou 1 set. Rostos antes dos corpos." },
        { t: "Blockout do corpo magro (Jovem)", s: "next" },
        { t: "Blockout do corpo maior (Idoso)", s: "next" },
        { t: "Roupa: robe branco com tassel, pano + cordão em toggle, cabelo do Jovem em toggle, pés com sandália numa mesh", s: "next" },
        { t: "Screenshots do blockout para o Daniel", s: "next" },
        { t: "Refino e polypaint", s: "next" },
        { t: "Retopo, bake, albedo + mixmap + normal", s: "next" },
        { t: "Rig, teste de pose extrema, handoff no SVN", s: "next" },
      ]
    },
  ],

  pillars: [
    { name: "Morfologia facial emiradense", sources: "Wang et al. (2015); Alshehhi et al. (2025)", state: "Alshehhi no Drive. Wang faltando." },
    { name: "Vestimenta como sistema de sinais", sources: "Khalaf (2005); Goto (2016)", state: "Os dois no Drive." },
    { name: "O precedente do Freej", sources: "Ercegovac et al. (2025); Tariq & Willard (2022)", state: "Os dois no Drive." },
  ],

  sources: [
    { ref: "Alshehhi et al. (2025), PLOS ONE 20(2)", file: "journal_pone_0299660.pdf", id: "1cELTWpmnTHyO_ewvu0hvWzLEkWzvrzih", cited: true },
    { ref: "Khalaf (2005), vestimenta nacional", file: "National_dress_and_the_construction_of_E_OCR.pdf", id: "1I84CbfKH4l9ryYlTjKE4HS5io7trka2k", cited: true },
    { ref: "Goto (2016), a burqa", file: "2_04Goto1.pdf", id: "1OGrpnXf6OF_bG-L9d1IOqLaXt5rA3fgx", cited: true },
    { ref: "Ercegovac et al. (2025), Freej", file: "kkonline202516166.pdf", id: "1Ujh2iqegoLPsohK2AN_T3HL7M4CdSNCg", cited: true },
    { ref: "Tariq & Willard (2022)", file: "UAEAnimationIndustry.pdf", id: "1lvRfjZn4FBNdMBO_pp5zr_4tAnH9HgBB", cited: true },
    { ref: "Alghamdi (2024), estereótipos", file: "HuntingStereotypes.pdf", id: "1bdTtU7nxouzaT75dNFdBKCAfkgTGW_pu", cited: true },
    { ref: "Hall, Da diáspora (edição diferente da citada)", file: "da-diaspora-stuart-hall_compressed.pdf", id: "1M4iMVbbQx4anBp5hIi-zWCxrIINz-GlW", cited: true, warn: true },
    { ref: "Clarence & Rosli (2025), IJRISS, caso Moana", file: "UAEarticle1.pdf", id: "1PY5NTn7Q4Klo-m9t6GLtuwRr6jB4ajH6", cited: false },
    { ref: "Sheen et al. (2018), PLOS ONE, hijab", file: "UAEarticle3.pdf", id: "1z_k0DYaCYa8zjLXUUc180js_H9sl2zu2", cited: false },
    { ref: "Cartoons and cultures, história da animação nos Emirados", file: "Cartoons_and_Cultures_History_of_the_Uni.pdf", id: "1xM3SgNi5p36nAzzsS7XlAuuxY_n3vUsV", cited: false },
    { ref: "Martino, Métodos de pesquisa em comunicação", file: "905083266Martino...OCR.pdf", id: "1VICNt1kd3pW_0vRTFzhz143mxs9FFO0f", cited: false },
    { ref: "Manual de Direção de Arte UAE", file: "UAE_Character_Art_Direction_Manual.pdf", id: "1SikVGqreft7j40A2pvbJOLNmyRfXT3UK", cited: false, project: true },
  ],

  missing: [
    "Wang et al. (2015)", "Šisler (2008)", "Al-Rawi (2024)", "Alfaraj (2019)",
    "Lataifeh et al. (2024)", "Said (1978)", "Creswell & Creswell (2018)", "Merriam & Tisdell (2016)",
  ],

  figures: [
    { n: 1, title: "UAE Female, corpo inteiro e close", file: "imagem_20260526_174118913.png", id: "1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5", state: "mapeada" },
    { n: 2, title: "Mulher emiradense com burqa", file: "UAEWomans.png (recomendada) ou imagem_20260526_234036116.png (atual)", id: "1X3DKSRRjxrXkUQbmdaBaIFJKfHXJ1yvl", state: "trocar" },
    { n: 3, title: "Shaheen e Zafina", file: "reproduzir de Alghamdi (2024)", id: "1bdTtU7nxouzaT75dNFdBKCAfkgTGW_pu", state: "extrair" },
    { n: 4, title: "Gráficos do estudo genético", file: "reproduzir de Alshehhi et al. (2025), acesso aberto", id: "1cELTWpmnTHyO_ewvu0hvWzLEkWzvrzih", state: "extrair" },
    { n: 5, title: "UAE Female, detalhe do rosto", file: "recorte da imagem_20260526_174118913.png ou render novo", id: "1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5", state: "parcial" },
    { n: 6, title: "Freej, as quatro protagonistas", file: "reproduzir de Ercegovac et al. (2025)", id: "1Ujh2iqegoLPsohK2AN_T3HL7M4CdSNCg", state: "extrair" },
    { n: 7, title: "UAE Female, critérios aplicados", file: "imagem_20260526_174118913.png com anotação", id: "1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5", state: "parcial" },
    { n: 8, title: "Elenco do Endstar", file: "imagem_20260526_174155428.png (fileira)", id: "1VewIzZF3uM6um43G83GngEaQXzLobFr5", state: "mapeada" },
  ],

  images: [
    { file: "imagem_20260526_174118913.png", id: "1pf6ZRnrscJMOXMO_RaF-YRT_sD69LPV5", what: "Render da UAE Female, corpo inteiro e close. Figuras 1, 5 e 7." },
    { file: "UAEWomans.png", id: "1X3DKSRRjxrXkUQbmdaBaIFJKfHXJ1yvl", what: "Quatro mulheres, burqa dourada, Abuteela em quatro cores, fundo Al Sadu. Figura 2 recomendada." },
    { file: "imagem_20260526_234036116.png", id: "14N2F_B6r-szq394JBytLsmhtwtpKwWY-", what: "Senhora com burqa escura de faixa bronze, parede de palha. Figura 2 atual." },
    { file: "imagem_20260526_174155428.png", id: "1VewIzZF3uM6um43G83GngEaQXzLobFr5", what: "Fileira do Endstar, duas linhas. Figura 8." },
    { file: "imagem_20260526_174146371.png", id: "148xFg45hKHBdewWB3Jb6mXgDoDqNAKXi", what: "Cena da forja, dois personagens na bigorna. Melhor exemplo de teto de estilização em close." },
    { file: "imagem_20260526_174128009.png", id: "1Zq29io2O72suHn-RtMKKmgqspj-cHdp8", what: "Grupo no convés. Cheio demais para impressão." },
    { file: "imagem_20260526_174137432.png", id: "13YZaFJcmxALfQp4l7OgqCR78D_l4QbH1", what: "Development build, masmorra, UI e marca d'água visíveis." },
    { file: "imagem_20260526_174110039.png", id: "1yzk6JoEiYlLo5zVxCHa3NUvyOqcCQAhN", what: "Folha de portfólio E-Line, guerreira do mar com tridente, três vistas." },
  ],

  locked: [
    ["Nariz", "Reto, base estreita, ponta descendente. Envelhecimento em volta, nunca por cima."],
    ["Olhos", "Amendoados grandes, canto externo definido, rim da pálpebra construído, profundidade de órbita."],
    ["Rosto", "Oval a redondo. Mandíbula não domina. Maçãs presentes, não exageradas."],
    ["Pele", "Mais clara do que se assume para a região, Daniel confirmou ao vivo. Amarelo presente, nunca dominante."],
    ["Shayla", "Preto fosco puro. Zero brilho."],
    ["Burqa", "Máscara dourada rígida sobre nariz e boca, olhos e maçãs visíveis."],
    ["Vestido da idosa", "Faixas Al Sadu, vermelho / preto / branco / laranja queimado. [EXTENSÃO]"],
    ["Joia", "Ouro escuro envelhecido, igual à UAE Female aprovada."],
    ["Roupa masculina", "Toda branca. Robe sem colarinho, tassel ligado. Daniel, 1 set 2026."],
    ["Pano da cabeça", "Nunca nos ombros. Sempre cobrindo as orelhas. Toda pose. Daniel, 1 set 2026."],
  ],

  gate: [
    ["G1","Perfil do nariz","Ponte reta, sem corcova ou concavidade, base estreita, ponta pontuda. Legível no nível de estilização."],
    ["G2","Construção do olho","Amendoado grande, canto externo definido, rim da pálpebra construído, órbita com profundidade."],
    ["G3","Formato do rosto","Oval a redondo. Não anguloso. Mandíbula não domina."],
    ["G4","Tom de pele","Claro-médio quente. Amarelo presente, não dominante. Não escurecido para o genérico da região."],
    ["G5","Burqa, quando presente","Máscara dourada rígida, leitura de falcão, cobre nariz, boca e queixo. Olhos e maçãs visíveis."],
    ["G6","Vestimenta","Paleta e padrão documentados. Sem figurino orientalista genérico."],
    ["G7","Envelhecimento","Distribui em volta do nariz, nunca por cima."],
    ["G8","Teto de estilização","Não lê mais realista que a UAE Female aprovada."],
  ],

  pipeline: [
    "Sem skirt bones", "Sem shape keys", "Sem corrective smooth", "Auto-normalize ligado",
    "Sem ossos faciais ou blend shapes", "Só albedo + mixmap + normal", "Um UV set por mesh", "Sem concept 2D, vis dev vai direto pro 3D",
  ],
};

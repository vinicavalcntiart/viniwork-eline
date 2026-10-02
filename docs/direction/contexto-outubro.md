# Contexto completo: ciclo dos personagens masculinos UAE, Endstar

Escrito em 1 de outubro de 2026, 22h30 de Recife. Para colar em outro assistente.

---

## Quem

**Vinícius Vieira Cavalcanti (Vini).** Senior 3D Character Artist e Art Lead na E-Line Media / Endless Studios. Mora em Recife. Também mestrando em Indústrias Criativas na UNICAP, com artigo em andamento sobre critérios para personagens emiradenses em jogos estilizados. Escreve em português, trabalha em inglês.

**Dan (Daniel Williams).** Creative Director / Art Lead, chefe direto do Vini. Aprovação final em todo personagem. Comunicação curta, casual, técnica. Dá feedback em uma ou duas linhas e às vezes esculpe por cima do arquivo quando não consegue descrever o que quer.

**Colin.** Head of Product. Quem demite.

**Alex Bascom.** Lead Programmer.

**Emily, Tim.** Colegas de arte.

**Lee.** Ex-Character Artist, demitido pouco antes de maio de 2026. Fazia o UAE Male antes; o trabalho dele foi descartado e o Male inteiro passou para o Vini.

**DCT.** Department of Culture and Tourism de Abu Dhabi. Cliente cultural que revisa os personagens UAE.

## O projeto

Endstar é uma plataforma de criação de jogos 3D colaborativa da Endless Studios, usada em programas educacionais com estudantes dos Emirados. Os personagens UAE existem para esse público. O estilo é semi-estilizado: silhueta forte, formas simplificadas, mas estrutura anatômica real por baixo. Rig compartilhado sem shape keys, sem skirt bones, sem corrective smooth. Texturas só albedo, mixmap e normal.

**Autoridade de decisão cultural:** o artigo do Vini alimenta um Manual de Direção de Arte UAE, e o Manual governa a produção. Decisões fora da evidência do artigo são marcadas `[EXTENSION]`. Pilares de evidência: morfologia facial emiradense (Wang et al. 2015; Alshehhi et al. 2025), vestimenta tradicional como sistema de sinais (Khalaf 2005; Goto 2016), e o precedente da série Freej (Ercegovac et al. 2025).

**Decisões culturais travadas:** nariz "como espada desembainhada", ponte reta, base estreita, ponta descendente, é o marcador étnico principal e o envelhecimento vai em volta dele, nunca por cima. Olhos amendoados grandes com rim de pálpebra construído. Rosto oval. Pele mais clara do que se assume para a região, confirmado pelo Dan ao vivo. Burqa feminina em ouro escuro. Joia em ouro envelhecido.

## Situação financeira e emocional

Salário do Vini atrasado. Estúdio apertado: a produtora Elissa saiu junto com a demissão do Lee, clima de reestruturação. Vini mandou mais de mil currículos com automação, só recebe não. O emprego é o único sustento. Ele tem medo recorrente de ser o próximo, e associa cada bronca do Dan ao padrão que viu com o Lee. Depois da demissão do Lee, o Dan garantiu explicitamente ao Vini que o emprego dele estava seguro.

Como o Lee caiu: silêncio no Slack por dias, faltar reunião, evitar tarefa complexa, entregar sem variantes, trabalho final que parecia blockout, tirar a empresa do LinkedIn antes de sair. O oposto do comportamento do Vini.

## As personagens femininas, já entregues

UAE Female (referência mestra, burqa dourada, Abuteela verde, aprovada, apareceu em demo ao vivo). UAE Very Old Female e UAE Young Female (18 anos), entregues no SVN com high poly, low poly, LODs, rig e variantes de textura. Dan: "looking great", "this feels dead on".

**Feedback do DCT em 28 de setembro sobre as fêmeas:** burqa só em ouro escuro ou latão, nunca prata; joia prata está errada, colares devem ser longos porque o lenço esconde o pescoço; a abaya de uma personagem é moderna e deveria ser a drapeada; a borda inferior do vestido não é emiradense; três personagens de uma última fileira estão fora do estilo, referências apontadas: Zuhba e Brides Procession no registro de patrimônio de Abu Dhabi. Tudo que o Manual travou, o DCT confirmou. As notas caíram nas desvios do Manual. A borda do vestido provavelmente é a faixa Al Sadu que o projeto tinha marcado como `[EXTENSION]` por ser têxtil de tenda, não de roupa. A flag previu a rejeição. Essas correções ainda não começaram.

## O ciclo masculino, dia a dia

**1 set.** Dan define o brief: quatro idades (Young, Middle, Old, Elderly) em dois corpos (magro para Young e Middle, maior para Old e Elderly). Roupa toda branca. Robe sem colarinho, com tassel na frente. Pano branco na cabeça com cordão preto, em toggle, nunca nos ombros, sempre cobrindo as orelhas. Cabelo em toggle. Pés e sandália numa mesh só, sem dedos separados. Prazo: Young e Elderly completos até 15 de setembro.

**1 set.** Primeiro blockout de cabeça do Young, com barba. Dan: "looking a bit too disney in some cases perhaps? also just from the bust he looks like he'd be more of a lifter than someone who does farming". Correção: nariz mais longo e pontudo, pescoço mais fino.

**11 set.** Busto vestido do Young enviado. Dan: barba mais redonda ("System of a Down vibes"), e "I can't overstate enough how there should be no collar or embroidery", o robe emiradense é liso, o único detalhe é costura (filas na abertura, linhas diagonais da gola até o ombro). Mandou fotos de referência. No mesmo dia o Dan abriu o arquivo do Vini e esculpiu por cima: tirou a barba (Young fica imberbe, lê 17), afinou nariz e rosto, baixou a pálpebra superior para cobrir o topo da íris (a leitura "Disney" estava na íris inteira exposta, não no tamanho do olho), trouxe mais anatomia (rim da órbita, plano da maçã, filtro, tendão do pescoço), arrumou a gola e a mão. Vini ficou mal: leu como "falhei fortemente". Numa reunião depois, o Dan disse que não gostava nem do sculpt que ele mesmo fez. O alvo estava indefinido dos dois lados.

**15 set.** Prazo passa sem entrega.

**17 set.** Dan pergunta "any news on those updates?". Vini responde que ainda não está feliz com o rosto. Dan: "alright". Mesmo dia, Vini manda Young e Elderly lado a lado, com mais anatomia. Dan em um minuto: "nice! this is looking a bit less disney (not that disney is bad XD)". Young aprovado. Elderly com barba branca em U aprovado no nível de estilização.

**24 set.** Depois de uma semana sem update, Vini manda o high poly com detalhes: corpo inteiro, costas, pano amarrado atrás, costura, botões, tassel, sandália, Young com e sem barba. Dan: "looking very clean!!!!! once you get the first guy out, we should be able to use him to do lots of head variants fairly easy, as long as you reserve a nice spot in the uv's for head/eyes/mouth that stays isolated and consistent". Regra de pipeline: rosto, olhos e boca num bloco de UV isolado e igual em todos os personagens, para variante de cabeça virar troca de textura.

**29 set.** Vini avisa em DM: "I'll send some updates soon and I will finish tomorrow morning". Primeira mensagem com data.

**30 set, meia-noite e meia.** Vini posta "Almost there! fixing the hands" com screenshot do rig. Na verdade só tinha retopo e UV do Young; faltava rig, bake, textura, LOD1, LOD2, e o Elderly inteiro. Exausto, com medo de demissão. O contrato com os Emirados terminava em 1 de outubro, último dia.

**1 out, 19:10 (Recife).** Vini avisa no grupo de arte (4 pessoas, com o Dan): "the young male is up on the SVN: high poly, low poly, LODs, rig and textures". Dan responde no mesmo minuto: "awesome, thanks". Sem abrir nada.

**1 out, 19:20.** Vini posta no canal endstar-dev-team (25 pessoas) os renders finais dos três masculinos: Young imberbe, Middle com barba curta, Elderly com barba branca. Corpo inteiro, textura com trama no pano, cordão trançado, sandália. "Hi friends, sharing the UAE male characters I've been working on these past weeks. Hope you like them."

**1 out, 19:36.** Alex Bascom no canal: "awesome! something about the young-shaven version make him look... maybe confused? not sure what it is, something with the mouth. maybe its just me". A boca do Young em repouso tem cantos levemente para baixo e sobrancelha levantada, lê como quem não entendeu algo.

**1 out, 19:41, DM.** Dan: "yeah i was hoping you WOULDNT post this in the open channel until we were able to discuss it. because now im implementing the engineers feedback without me even having seen the finished piece yet? not a great position to be in". Vini, 19:45: "Oh Dan, I'm so sorry, I just thought you catch the file but it was too fast. this wasn't good. It won't happen again. Im sorry". Dan, 19:46: "Not quite yet, I've been swamped. No worries, but definitely we'll want to be on the same page first before we 'release' to the team just in case. Alex's feedback is good btw, I think there's some stuff we can do to lessen that confused look, but first I want to get these guys in the game, and we'll review tomorrow at the review meeting". Vini: "Makes total sense. Let's get them in the game first and go over it at the review tomorrow". Dan: "indeed, thanks Vini".

## Onde está agora

Três masculinos entregues no dia do fim do contrato. Dan colocando no jogo. Nenhuma nota de arte dele nos finais. Uma bronca de processo: postar no canal aberto antes dele revisar, com o agravante de que a primeira nota veio de engenharia e sobre expressão facial. Regra que saiu: a imagem vai para o Dan primeiro; o canal do time só depois que ele comentar. Aviso de SVN não conta como revisão.

Revisão com o Dan: sexta, 2 de outubro. Na revisão, a nota do Alex sobre a boca deve chegar pelo Dan, não pelo Vini.

Pendente: ajuste da boca do Young; correções do DCT nas fêmeas (cor da burqa, joia, colares, borda do vestido, abaya drapeada, última fileira); Middle e Old ainda não têm cabeça própria além da variante com barba; artigo parado, com três pendências (Wang et al. 2015 faltando, atribuição do Moana, figuras e citações).

## Como falar com o Vini

Português, direto, sem enfeite. Nomes das peças em termos comuns, não em árabe. Pesquisar e responder em vez de perguntar. Nunca mandar ele dormir ou descansar. Nunca mandar ele fazer nada. Em screenshot, comentar só o que ele perguntou. Sempre considerar o horário de Recife (UTC-3). Mensagens para o Dan: curtas, no registro dele, sem polimento, sem cara de tradução ou de IA. Validar primeiro o que funciona, depois um problema por vez, sempre com próximo passo.

## Onde a documentação vive

Repositório GitHub `vinicavalcntiart/viniwork-eline`, branch `claude/uae-character-project-r0w45n`. Lá estão: o artigo, o brief masculino, o log de feedback datado, os prompts de Freepik, o feedback do DCT com triagem, o índice do Drive, e um site de monitor de tarefas publicado no GitHub Pages.

# Freepik prompts

Reference generation only. Nothing from here enters a deliverable.
Anchor toggle "Prompt com IA" stays OFF, always.
O anchor tem que ser citado inline no texto como @img1, senao o gerador ignora
o desenho ancorado e devolve personagem generico.

---

## Masculino Jovem · busto 3/4 com roupa · 11 set 2026

Anchor: o blockout de cabeça do Jovem (três vistas, ZBrush), citado como @img1 no prompt.
Objetivo: ver a cabeça vestida antes de esculpir a roupa, já com as duas
correções do Daniel aplicadas.

Nota: os nomes árabes das peças foram deixados fora do prompt de propósito.
Nomear a peça puxa o gerador para imagem genérica da região. Descrever a
geometria segura o desenho que o Daniel pediu.

```
Tight bust portrait, three-quarter view, single male character, the same character as @img1.

HEAD COVERING: a plain pure white cloth draped over the head, falling straight down at both sides so it completely covers and hides both ears, held in place by a thick black double rope band circling the crown. The cloth ends around the jawline and hangs forward, clear of the shoulders, with visible empty space between the cloth and the shoulder line. The cloth never rests on the shoulders and never drapes over them. No hair visible anywhere.

GARMENT: a plain pure white robe, visible only at the upper chest in this crop. No collar of any kind, a plain round neckline with a short vertical buttoned opening at the center of the chest. A slim white braided cord tassel hangs from the neckline down the center of that opening. Subtle tone-on-tone white embroidery along the neckline and the opening edges, raised surface relief, not flat engraved lines.

FACE: keep the same face, beard shape, eyebrows, eyes and skin tone as @img1. Change only these two things. First, the nose is longer from bridge to tip, with a straight bridge, a pointed tip angling downward so the underside is visible, and a narrow nostril base, not a short rounded button nose. Second, the neck is slimmer, about three quarters of the jaw width, the neck muscles read as one smooth plane instead of separate ropes, and the shoulders slope down rather than squaring off. Lean build, not muscular.

STYLE: match the sculpt style of @img1. Stylized 3D game character, ZBrush sculpt screenshot, clean matte clay surface with polypaint, soft even studio lighting, flat neutral grey background, simplified planes, strong readable silhouette. Semi-stylized with solid anatomical structure underneath. Not photoreal, and not a soft rounded cartoon look.

Bust only, cropped at the upper chest. One single figure, no text, no logos, no props, no second character.
```

Checar na saída antes de usar: nariz longo e descendente com base estreita,
pescoço fino, orelhas cobertas, pano fora dos ombros, cordão preto presente,
sem colarinho, tassel presente, tudo branco.

---

## Masculino Idoso · busto 3/4 com roupa · 11 set 2026

Anchor: o mesmo blockout de cabeça do Jovem, citado como @img1 no prompt.
Objetivo: ver o Idoso vestido antes de esculpir. O envelhecimento entra em
volta do nariz, nunca por cima dele. O perfil do nariz sai igual ao do Jovem,
esse é o marcador e ele não muda com a idade.

Barba branca está fora das fontes que temos. Vai como extensão no handoff.

```
Tight bust portrait, three-quarter view, single elderly male character, the same character design and face structure as @img1, aged to roughly seventy years old.

HEAD COVERING: a plain pure white cloth draped over the head, falling straight down at both sides so it completely covers and hides both ears, held in place by a thick black double rope band circling the crown. The cloth ends around the jawline and hangs forward, clear of the shoulders, with visible empty space between the cloth and the shoulder line. The cloth never rests on the shoulders and never drapes over them. No hair visible anywhere.

GARMENT: a plain pure white robe, visible only at the upper chest in this crop. No collar of any kind, a plain round neckline with a short vertical buttoned opening at the center of the chest. A slim white braided cord tassel hangs from the neckline down the center of that opening. Subtle tone-on-tone white embroidery along the neckline and the opening edges, raised surface relief, not flat engraved lines.

NOSE, UNCHANGED BY AGE: the nose keeps exactly the same shape as a young adult, long from bridge to tip, straight bridge, pointed tip angling downward so the underside is visible, narrow nostril base. The nose is not widened, not bulbous, not drooping, and carries no age detail on its surface. It stays the cleanest form in the face.

AGE, EVERYWHERE EXCEPT THE NOSE: heavy hooded upper eyelids with a deep fold, crow's feet at the outer eye corners, deep horizontal forehead lines, hollow temples, a pronounced fold running from beside the nostril down past the mouth corner, softened sagging flesh along the jawline, a slightly lowered brow. Skin reads dry and loose, never smooth.

BEARD: a full white beard, thick and cleanly shaped, covering the jaw and chin. White eyebrows, thicker and slightly unruly.

BUILD: a heavier build than a young man. The neck is thicker and softer with loose skin, the shoulders are broad and sloping, the upper chest fuller. Not muscular, not athletic, a solid older body.

SKIN: warm light-medium tone, the same tone family as @img1, with yellow present but never dominant. Not darkened.

STYLE: match the sculpt style of @img1. Stylized 3D game character, ZBrush sculpt screenshot, clean matte clay surface with polypaint, soft even studio lighting, flat neutral grey background, simplified planes, strong readable silhouette. Semi-stylized with solid anatomical structure underneath. Not photoreal, and not a soft rounded cartoon look.

Bust only, cropped at the upper chest. One single figure, no text, no logos, no props, no second character.
```

Checar na saída antes de usar: nariz longo, reto e descendente, base estreita,
igual ao do Jovem. Rugas em volta, nada sobre o dorso do nariz. Orelhas
cobertas, pano fora dos ombros, cordão preto, sem colarinho, tassel, tudo
branco.

---

## Masculino Jovem · iteração 2 · dobras e barba · 11 set 2026

Anchor: a saída da iteração 1 (busto 3/4 vestido), citada como @img1.
O que a iteração 1 acertou: nariz longo e descendente, pescoço fino, orelhas
cobertas, pano fora dos ombros, cordão duplo, sem colarinho, tassel, bordado
tom sobre tom. Tudo isso fica.

O que muda: o pano lê como chapa lisa de espessura uniforme, e a barba saiu
em tufos de pelo em vez da massa gráfica limpa do blockout. As duas mudanças
puxam em direções opostas de propósito, pano com lógica de material real,
barba como forma simplificada. É o mesmo equilíbrio da UAE Female aprovada.

```
Same character, same pose, same three-quarter bust framing, same head covering, same robe, same face, same lighting and background as @img1. Change only two things.

CLOTH: the white head cloth behaves like real lightweight cotton instead of a smooth uniform sheet. The fabric gathers and bunches under the black cord band, with soft pleats radiating outward from the crown. The two front panels hang with visible weight, a few long soft folds running down their length, and the lower edges curl slightly inward. The fabric edge is thin. Where the cloth passes over the shoulders of the robe it creases naturally. The robe shows soft tension folds from the shoulder toward the chest opening. Fabric still reads clean and simplified, no noisy micro-wrinkles, but every fold follows gravity and the shape underneath.

BEARD: the beard is a single clean sculpted mass with a sharp graphic silhouette, built from three or four large simplified clumps with smooth surfaces and crisp edges. No individual hair strands, no fur texture, no fluffy or soft clumping. The moustache is one clean shape that connects into the beard. Same dark color, same overall size and coverage as @img1, only the treatment changes, from fur to sculpted graphic form. Eyebrows get the same treatment, two clean simplified shapes.

Everything else stays exactly as in @img1. ZBrush sculpt screenshot look, matte clay with polypaint, flat neutral grey background. Bust only, one single figure, no text.
```

# Freepik prompts

Reference generation only. Nothing from here enters a deliverable.
Anchor toggle "Prompt com IA" stays OFF, always.

11 set: bloco GARMENT corrigido em todos os prompts. Sem bordado, sem faixa na
gola, só costura. Daniel. Saídas geradas antes disso têm a gola errada.
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

GARMENT: a plain pure white robe, visible only at the upper chest in this crop. A flat round-cut neckline with no collar and no standing band of any kind, lying flat against the neck. A short vertical buttoned opening at the center of the chest with three small fabric-covered buttons. A slim white braided cord tassel hangs from a loop at the top button down the center of that opening. No embroidery anywhere. The only surface detail is top-stitching: several parallel rows of stitching run vertically along both edges of the buttoned opening and converge into a point below it, and a single stitched seam line runs diagonally from each side of the neckline out to the shoulder seam. Stitching reads as fine raised lines in the fabric, not decoration.

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

GARMENT: a plain pure white robe, visible only at the upper chest in this crop. A flat round-cut neckline with no collar and no standing band of any kind, lying flat against the neck. A short vertical buttoned opening at the center of the chest with three small fabric-covered buttons. A slim white braided cord tassel hangs from a loop at the top button down the center of that opening. No embroidery anywhere. The only surface detail is top-stitching: several parallel rows of stitching run vertically along both edges of the buttoned opening and converge into a point below it, and a single stitched seam line runs diagonally from each side of the neckline out to the shoulder seam. Stitching reads as fine raised lines in the fabric, not decoration.

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

## Masculino Jovem · iteração 2 · dobras, barba, idade · 11 set 2026

Anchor: a saída da iteração 1 (busto 3/4 vestido), citada como @img1.
O que a iteração 1 acertou: nariz longo e descendente, pescoço fino, orelhas
cobertas, pano fora dos ombros, cordão duplo, sem colarinho, tassel, bordado
tom sobre tom. Tudo isso fica.

O que muda: o pano lê como chapa lisa, a barba saiu em tufos de pelo em vez
de massa gráfica, e o rosto lê uns quarenta anos. Barba curta é o que mais
puxa para vinte. Barba curta no jovem não está nas fontes da pasta, vai como
extensão no handoff, junto com a barba branca do Idoso.

```
Same character, same pose, same three-quarter bust framing, same head covering, same robe, same nose, same lighting and background as @img1. Change only three things.

CLOTH: the white head cloth behaves like real lightweight cotton instead of a smooth uniform sheet. The fabric gathers and bunches under the black cord band, with soft pleats radiating outward from the crown. The two front panels hang with visible weight, a few long soft folds running down their length, and the lower edges curl slightly inward. The fabric edge is thin. Where the cloth passes over the shoulders of the robe it creases naturally. The robe shows soft tension folds from the shoulder toward the chest opening. Fabric still reads clean and simplified, no noisy micro-wrinkles, but every fold follows gravity and the shape underneath.

BEARD: a short, closely trimmed beard that follows the jawline, much shorter than in @img1, sculpted as one clean graphic mass with a sharp silhouette and smooth surface. No individual hair strands, no fur texture, no fluffy clumps. The moustache is a thin clean shape connecting into it. Eyebrows are two clean simplified shapes, lighter and less heavy than in @img1.

AGE: the face reads clearly as a man of about twenty. Fuller, rounder cheeks with more soft volume over the cheekbones, smooth simple planes with no hollows under the cheekbones, a softer and slightly narrower jaw, eyes more open with the upper eyelid lifted, a lighter brow ridge, smooth skin with no lines anywhere. The nose stays exactly as in @img1, long, straight bridge, pointed tip angling down, narrow base.

Everything else stays exactly as in @img1. ZBrush sculpt screenshot look, matte clay with polypaint, flat neutral grey background. Bust only, one single figure, no text.
```

---

## Masculino Jovem · iteração 3 · barba em blocos, mais novo · 11 set 2026

Anchor: a saída da iteração 2, citada como @img2. Dobras do pano ficaram
boas. Rosto ainda lê uns trinta.

Referência de barba (estilo Fortnite, mechas esculpidas em cunha) NÃO vai
como segundo anchor. Segundo anchor vaza desenho, cor e fundo. O tratamento
vai descrito em texto.

```
Same character, same pose, same three-quarter bust framing, same head cloth with its folds, same black cord, same robe with its embroidery and tassel, same nose, same lighting and background as @img2. Change only two things.

BEARD TREATMENT: the beard is built from thick sculpted locks, each lock a tapered wedge with a hard ridge along its top and a sharp edge where it meets the next lock, like hair carved from a solid block. The locks flow in one direction, from the cheek down and forward toward the chin, overlapping in layers like roof shingles. Surfaces are smooth and slightly glossy between the ridges, no fur, no strands, no soft fuzz. The moustache is two thick tapered sweeps meeting at the center. The beard itself is short and close to the jawline, no longer than in @img2, so the locks are small and few, about six to eight visible wedges in total. Same dark color as @img2. Eyebrows get the same carved treatment as two clean tapered shapes.

AGE: the face reads as eighteen, a teenager becoming a man. Rounder, softer cheeks with clear baby-fat volume, no hollows anywhere, a rounder and slightly smaller jaw, eyes larger in proportion to the face and fully open with lifted upper lids, a flat light brow with no ridge, a shorter distance between the nose and the upper lip, smooth skin. The beard is sparser toward the cheeks, denser only along the jaw and chin. The nose stays exactly as in @img2, long, straight bridge, pointed tip angling down, narrow base.

Everything else stays exactly as in @img2. ZBrush sculpt screenshot look, matte clay with polypaint, flat neutral grey background. Bust only, one single figure, no text.
```

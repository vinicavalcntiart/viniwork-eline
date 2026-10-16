# Por que o SVN está lento: diagnóstico pelo manual

Baseado no manual oficial do TortoiseSVN espelhado em [`manual/`](manual/).
Cada causa aponta a seção de origem. Contexto: máquina potente (RAM e CPU não
são gargalo), uso pela extensão do Windows Explorer, working copy de arte 3D
(arquivos binários grandes: .ztl, .blend, .fbx, texturas).

Com hardware de sobra, a lentidão do TortoiseSVN quase nunca é processamento.
É **I/O e latência**: disco sendo varrido, rede, servidor, e a extensão
consultando status de arquivos dentro do próprio Explorer.

Não tenho acesso ao seu computador, então isto é uma lista de causas prováveis
em ordem de impacto, com o teste para confirmar cada uma.

---

## 0. Repo-Browser lento (seu caso principal)

O Repo-Browser não usa working copy nem `TSVNCache`. Tudo que ele faz é
requisição ao servidor. Se ele está lento, a causa está em **rede, servidor ou
nas duas opções abaixo**, não no seu computador.

**O que o manual diz** (Settings → Dialogs 3):
- **Pre-fetch folders for faster browsing** (ligado por padrão): busca em segundo
  plano o conteúdo de todas as pastas visíveis. "Alguns servidores não aguentam as
  várias requisições ou, mal configurados, tratam isso como abuso e começam a
  bloquear." Desligar.
- **Show externals** (ligado por padrão): resolve cada `svn:externals` ao listar.
  "Também pode estressar servidores fracos." Desligar se o repo usa externals.
Fonte: [Dialog Settings 3](manual/tsvn-dug-settings.md#tortoisesvn-dialog-settings-3).

**Rede** (Settings → Network): proxy configurado errado força desvio ou timeout.
Se a URL é `svn+ssh://`, cada operação abre uma conexão SSH nova; o manual
recomenda TortoisePlink e Pageant para não renegociar senha a cada vez.
Fonte: [Network Settings](manual/tsvn-dug-settings.md#network-settings).

**[EXTENSION] Latência (fora do manual, conhecimento geral de SVN).** O protocolo
SVN sobre HTTP faz muitas idas e voltas pequenas por operação. Se o servidor da
E-Line está nos EUA, cada ida e volta Recife → servidor custa ~120-200 ms, e uma
listagem de pasta pode fazer dezenas delas. Hardware não compensa isso. Para
arquivos grandes, o limite é o **upload** da sua internet, que no Brasil
costuma ser bem menor que o download.

**Teste para separar as causas:**
1. Cole a URL do repositório no navegador. Se a listagem no browser também
   demora, é servidor ou rede. Se o browser é rápido e o Repo-Browser lento, são
   as opções de pre-fetch/externals.
2. `ping` e `tracert` para o host do servidor: acima de ~150 ms, a latência
   explica a lentidão de navegação entre pastas.
3. Separe "demora para listar pasta" (latência/pre-fetch) de "demora para
   transferir arquivo" (banda, principalmente upload).
4. Lembre que arrastar vários itens de uma vez gera **um commit por item**, cada
   um com seu próprio ciclo de requisições. Agrupar numa pasta e arrastar a pasta
   faz um commit só.

---

## 1. TSVNCache.exe (cache de ícones) varrendo tudo

**O que é.** Os ícones verdes/vermelhos no Explorer vêm de um processo separado,
`TSVNCache.exe`. No modo *Default* ele "observa todos os drives" e recalcula o
status sempre que um arquivo muda. Roda o tempo todo, com a menor prioridade
possível, por isso os ícones podem demorar segundos para atualizar.
Fonte: [Icon Overlay Settings](manual/tsvn-dug-settings.md#icon-overlay-settings).

**Por que pesa no seu caso.** Não é RAM, é disco. Arquivos de arte mudam o tempo
inteiro (autosave do ZBrush, Blender, exports, caches de bake). Cada gravação faz
o TSVNCache reler o status de pastas com arquivos de centenas de MB. Enquanto
isso, o Explorer espera a resposta para desenhar ícones e o menu de contexto.

**Teste.** Gerenciador de Tarefas → aba Desempenho → Monitor de Recursos → Disco.
Se `TSVNCache.exe` aparece no topo de leitura enquanto o Explorer engasga, é ele.

**Correção (Settings → Icon Overlays):**
- Desmarque todos os tipos de drive e coloque em **Include Paths** só a pasta da
  working copy. O manual diz que o TSVNCache usa essas listas para limitar a varredura.
- Coloque em **Exclude Paths** pastas de alto giro: exports, renders, `autosave`,
  caches, bakes. Exemplo:
  ```
  Exclude:
  C:\
  D:\eline\uae\exports
  D:\eline\uae\renders
  Include:
  D:\eline\uae
  ```
- Se ainda pesar: troque o cache para **Shell** (só a pasta aberta, status em
  tempo real) ou **None** (o manual: "não deixa o Explorer lento de forma alguma";
  sem ícones, use *Check for Modifications* para ver o status).
- Marque **Disable status cache for elevated processes**. Se algum programa roda
  como administrador (instalador, launcher, às vezes o próprio Explorer), sobe um
  segundo `TSVNCache.exe` varrendo as mesmas pastas em paralelo.

## 1b. A extensão dentro do Explorer e das janelas Abrir/Salvar

Pontos específicos da extensão do Explorer, mesma página do manual:

- **Abrir/Salvar dos programas 3D.** Por padrão os ícones e o menu do TortoiseSVN
  carregam também nas janelas *Abrir/Salvar* de todo programa (ZBrush, Blender,
  Substance, Photoshop). Abrir um arquivo dentro de uma pasta grande da working copy
  dispara consulta de status. Correção: marcar **Show overlays and context menu
  only in explorer**.
- **Botão direito lento.** O menu de contexto consulta o status do item clicado.
  Em Settings → Context Menu: marcar **Hide menus for unversioned paths** e
  listar pastas onde o menu não deve aparecer (renders, exports). No Windows 11
  existe uma página separada para o menu novo.
  Fonte: [Context Menu Settings](manual/tsvn-dug-settings.md#context-menu-settings).
- **Ícones somem ou ficam errados.** O Windows só tem 15 slots de overlay e usa 4.
  OneDrive, Dropbox, Google Drive e outros brigam pelos 11 restantes; quem perde
  não mostra ícone. Não deixa lento, mas confunde o diagnóstico ("o status não
  atualiza"). Em Settings → Icon Overlays → **Icon Handlers** dá para desligar os
  overlays que você não usa (ex. *Unversioned*, *Ignored*).
  Fonte: [Implementation Details](manual/tsvn-app-internals.md#icon-overlays).
- **Drive SUBST.** Se a working copy é acessada por uma letra criada com `subst`,
  os ícones podem nunca atualizar. Excluir o caminho original e deixar só o SUBST.

## 2. Cópias "pristine": cada arquivo existe duas vezes

**O que é.** Por padrão o SVN guarda dentro de `.svn` uma cópia intacta de cada
arquivo (a versão BASE). Um .ztl de 800 MB ocupa 1,6 GB no disco.
Fonte: [Store pristine copies](manual/tsvn-dug-checkout.md#store-pristine-copies).

**Por que pesa.** Checkout, update e status leem e gravam o dobro de dados.
Em disco cheio ou HD lento, tudo arrasta.

**Correção.**
- A partir do Subversion 1.15 dá para desmarcar **Store pristine copies in working
  copy** no checkout. O SVN baixa a cópia só quando precisa (diff, revert). Para
  binários grandes que você raramente compara, é exatamente o caso indicado pelo manual.
  Exige um checkout novo com TortoiseSVN 1.15+.
- Sem trocar de versão: **Cleanup → Vacuum pristine copies** apaga pristines
  órfãos e comprime os restantes.

## 3. Timestamps desalinhados forçam comparação byte a byte

**O que é.** O SVN decide se um arquivo mudou pelo timestamp. Se o timestamp
gravado não bate (cópia de pasta, sincronização com Drive/OneDrive, antivírus,
restore), ele precisa comparar o conteúdo inteiro. Em arquivos de centenas de MB,
o diálogo de Commit e o Check for Modifications ficam muito lentos.

**Correção.** **TortoiseSVN → Cleanup** na raiz da working copy, com
**Fix time stamps** e **Vacuum pristine copies** marcados. O manual diz que isso
"acelera checagens de status futuras" e todos os diálogos que listam arquivos.
Fonte: [Cleanup](manual/tsvn-dug-cleanup.md).

## 4. Checkout inteiro quando você só precisa de uma parte

**O que é.** Checkout completo traz o repositório inteiro, inclusive pastas de
outros personagens e assets que você não toca.
Fonte: [Checkout Depth](manual/tsvn-dug-checkout.md#checkout-depth).

**Correção.** Checkout **sparse**: no diálogo de checkout use **Choose items...**
e marque só as pastas do seu trabalho. Updates futuros só trazem o que você tem.
Para adicionar pastas depois, use o **Repo-Browser → Update item to revision**
(o método via *Update to Revision → Choose items* funciona, mas o manual avisa
que é lento porque atualiza item por item).

Se o repositório usa `svn:externals`, cada update busca também os externals.
Marque **Omit externals** se não precisar deles.

## 5. Working copy ou repositório em rede / pasta sincronizada

**O que é.** O manual diz que drives de rede "podem ser muito lentos" e por isso
nem mostra ícones neles. Repositório acessado por `file://` em pasta
compartilhada é "fortemente desaconselhado" (lento e risco de corrupção).
Fontes: [Icon Overlay Settings](manual/tsvn-dug-settings.md#icon-overlay-settings),
[Accessing a Repository on a Network Share](manual/tsvn-repository.md#accessing-a-repository-on-a-network-share).

**Teste.** Veja onde está a pasta. Se estiver dentro de Google Drive, OneDrive,
Dropbox ou num drive mapeado, essa é provavelmente a causa principal: o
sincronizador e o SVN brigam pelos mesmos arquivos, e o `.svn` tem milhares de
arquivos pequenos.

**Correção.** Working copy em disco local, fora de qualquer pasta sincronizada.

## 6. Log e Revision Graph lentos

**O que é.** O Revision Graph baixa *todo* o histórico do repositório. Show Log
baixa mensagens do servidor a cada abertura.
Fontes: [Revision Graph](manual/tsvn-dug-revgraph.md),
[Log Caching](manual/tsvn-dug-settings.md#log-caching).

**Correção (Settings):**
- **Log Cache → Enable log caching** ligado (só sofre a espera uma vez).
- **Timeout before updating the HEAD revision**: 300 (sugestão do próprio manual).
- **Dialogs 1 → Default number of log messages**: reduzir (ex. 50) se a conexão
  for lenta.

## 7. Repo-Browser travando

O **Pre-fetch folders for faster browsing** faz várias requisições em paralelo.
Alguns servidores bloqueiam ou atrasam isso. Se o Repo-Browser congela, desligue.
Fonte: [Dialog Settings 3](manual/tsvn-dug-settings.md#tortoisesvn-dialog-settings-3).

## 8. Shelving V3

Se você usa Shelve, o manual diz que a versão **V3** "pode ser inutilizavelmente
lenta para repositórios grandes". Use **V2** (Settings → Dialogs 3).

---

## Ordem para testar

1. Onde está a working copy? Se estiver em pasta sincronizada ou rede, mover para
   disco local resolve mais do que todo o resto.
2. Cleanup com **Fix time stamps** + **Vacuum pristine copies**.
3. Restringir o TSVNCache com Include/Exclude Paths e marcar **Show overlays and
   context menu only in explorer**. Para isolar o problema: cache em **None** por
   um dia. Se o Explorer ficar rápido, a causa é a extensão; se commit/update
   continuarem lentos, a causa é rede ou servidor.
4. Ligar log cache.
5. Próximo checkout: sparse, e sem pristine copies se tiver o 1.15.

Para eu fechar o diagnóstico, preciso de: versão do TortoiseSVN, caminho da
working copy, tamanho da pasta `.svn`, protocolo da URL (`https://`, `svn://`
ou `file://`) e qual operação está lenta (abrir pasta, commit, update, log).

# Por que o SVN está lento: diagnóstico pelo manual

Baseado no manual oficial do TortoiseSVN espelhado em [`manual/`](manual/).
Cada causa aponta a seção de origem. Contexto: máquina com pouca RAM, working
copy de arte 3D (arquivos binários grandes: .ztl, .blend, .fbx, texturas).

Não tenho acesso ao seu computador, então isto é uma lista de causas prováveis
em ordem de impacto, com o teste para confirmar cada uma.

---

## 1. TSVNCache.exe (cache de ícones) varrendo tudo

**O que é.** Os ícones verdes/vermelhos no Explorer vêm de um processo separado,
`TSVNCache.exe`. No modo *Default* ele "observa todos os drives" e recalcula o
status sempre que um arquivo muda. Usa 10 a 50 MB de RAM e roda o tempo todo,
mesmo sem você estar usando o SVN.
Fonte: [Icon Overlay Settings](manual/tsvn-dug-settings.md#icon-overlay-settings).

**Por que pesa no seu caso.** Arquivos de arte mudam o tempo inteiro (autosave do
ZBrush, Blender, exports, caches de bake). Cada gravação faz o TSVNCache reescanear.
Com pouca RAM, isso compete com o software 3D e o Explorer trava.

**Teste.** Abra o Gerenciador de Tarefas e veja CPU, disco e memória do
`TSVNCache.exe` enquanto trabalha.

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
- Se ainda pesar: troque o cache para **Shell** (~1 MB de RAM, só a pasta aberta)
  ou **None** (zero custo, sem ícones; use *Check for Modifications* para ver o status).

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
3. Restringir o TSVNCache com Include/Exclude Paths (ou trocar para Shell).
4. Ligar log cache.
5. Próximo checkout: sparse, e sem pristine copies se tiver o 1.15.

## Sobre usar pelo navegador

TortoiseSVN é extensão do Windows Explorer; não existe versão web. O que dá para
fazer no navegador é **ler** o repositório, se o servidor da E-Line expõe
HTTP(S) (a URL do repositório abre num browser e lista os arquivos). Editar e
commitar exige um cliente local. Se a RAM é o gargalo, os passos 1 e 3 acima são
os que mais liberam memória, e o modo **None** do cache zera o custo do
TSVNCache.

Para eu fechar o diagnóstico, preciso de: versão do TortoiseSVN, caminho da
working copy, tamanho da pasta `.svn`, protocolo da URL (`https://`, `svn://`
ou `file://`) e qual operação está lenta (abrir pasta, commit, update, log).

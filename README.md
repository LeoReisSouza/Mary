# Mary Reis — Massage Therapy (Dublin)

`https://leoreissouza.github.io/Mary/`

Site estático: HTML + CSS + JavaScript puro. Sem build, sem dependências.

## Fluxo da página

`Hero → Sobre a Mary + Localização → Tratamentos + Extras + Planos → Reserva → Footer`

## Configuração

Tudo que costuma mudar está no `CONFIG`, no topo do [`script.js`](script.js):
número de WhatsApp, Instagram e endereço (o endereço gera o link "Get directions").
Se algum valor virar `REPLACE_WITH_...`, os botões param de abrir e aparece um aviso
discreto na seção Reserve.

Textos: objeto `translations` (EN/PT) no mesmo arquivo. No HTML, `data-i18n="chave"` troca
texto e `data-i18n-attr="alt:chave"` troca atributos. Todo texto novo precisa da chave nos
dois idiomas.

Preços aparecem no HTML (accordion, extras, planos e formulário) — se mudarem, procure por
`€` no `index.html`.

Ao publicar em domínio próprio, atualize as URLs absolutas no `<head>` (canonical, og:url,
og:image) e no JSON-LD.

## Assets

`assets/`: `logo.png` (emblema em disco verde), `logo-mark.png` (branco, transparente),
`logo-watermark.png` (verde, transparente), `favicon.png`, `mary.jpg` e `mary-2.jpg`
(fotos da Mary), `massage-1.jpg` (hero), `og-image.jpg` (compartilhamento).
Originais em `assets/reference/`.

Para trocar uma imagem, substitua o arquivo mantendo o nome. As imagens que têm o verde da
marca embutido (`logo.png`, `favicon.png`, `logo-watermark.png`, `og-image.jpg`) precisam ser
regeradas se `--primary-green` mudar.

A cobra decorativa é um SVG traçado a partir do logo, definido uma vez no topo do
`index.html` (`<symbol id="snake">`) e reutilizado com `<use href="#snake">`. Ela herda a cor
via `currentColor`, então funciona em fundo claro e escuro sem arquivo extra e sem perder
nitidez em nenhum tamanho.

# Site — Sueli Ribeiro, Nutricionista (CRN7/RO 17285)

Site estático (HTML, CSS e JavaScript), publicado na Vercel a partir deste repositório.

## Onde editar
- **WhatsApp, cidade, endereço, horários, mapa:** no topo de `js/main.js` (objeto `CONFIG`). Com o WhatsApp preenchido, todos os botões de agendamento passam a abrir o WhatsApp com mensagem pronta. Vazio, eles abrem o direct do Instagram.
- **Textos, receitas, dicas e dúvidas:** escritos direto no `index.html`.
- **Depoimentos:** não há seção de depoimentos porque ainda não existem avaliações reais autorizadas. Só adicione depoimentos verdadeiros, enviados por escrito e com autorização.

## Animações
GSAP + ScrollTrigger + SplitText + Lenis (em `js/vendor`). Respeita `prefers-reduced-motion`. Se qualquer animação falhar, o site aparece normalmente sem ela.

## Cache
Ao trocar CSS ou JS, aumente o número `?v=` nos links do `index.html`.

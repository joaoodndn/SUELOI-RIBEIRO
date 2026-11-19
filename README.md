# Site — Sueli Ribeiro, Nutricionista (CRN7/RO 17285)

Site estático feito com **Astro**, publicado na **Vercel** a cada push na branch `main`.

## Como editar os dados de contato

Tudo fica em **`src/config.ts`** (objeto `CONFIG`). Campos com `'PREENCHER'` ainda não foram
confirmados e ficam escondidos no site até serem preenchidos:

| Campo | Exemplo | Enquanto estiver `PREENCHER` |
| --- | --- | --- |
| `whatsapp` | `'5569999999999'` (DDI + DDD + número) | Botões "Agendar" abrem o Direct do Instagram |
| `cidade` | `'Porto Velho'` | Site mostra só "Rondônia" |
| `endereco` | `'Rua X, 123, Centro'` | Endereço não aparece |
| `mapaEmbedUrl` | link do Google Maps > Compartilhar > Incorporar | Mapa não aparece |
| `horarios` | `'Segunda a sexta, 8h às 18h'` | Horário não aparece |
| `atendimentoPresencial` / `atendimentoOnline` | `true` | Modalidades não aparecem |
| `formacao` | lista de cursos | Só "Graduação em Nutrição" e o CRN |

Textos das 6 áreas: `src/data/areas.ts`. FAQ e conteúdos: `src/data/conteudo.ts`.

## Fotos

- **Rosto da Sueli**: só as duas fotos em `src/assets/img/` (avatar e retrato). Para trocar, substitua o
  arquivo mantendo o mesmo nome.
- **Demais fotos**: banco de imagens **Unsplash** (licença Unsplash: uso comercial livre, sem exigência de
  crédito — https://unsplash.com/license). Carregadas direto da CDN do Unsplash, que entrega AVIF/WebP no
  tamanho certo. A lista, com o id de cada foto e o link da página original, está em `src/data/fotos.ts`.
  Para trocar uma foto, troque o id ali. Nenhuma foto de banco mostra o rosto de outra profissional.

## Publicar

```bash
npm install
npm run dev      # prévia local em http://localhost:4321
npm run build    # gera a pasta dist/
```

Push na `main` = publicação automática na Vercel. Push em outra branch = link de prévia.

## O que foi instalado e por quê

| Pacote | Para quê |
| --- | --- |
| astro | Site multipágina estático, rápido, com otimização das fotos locais |
| gsap (+ ScrollTrigger) | Animações de rolagem, abertura, máscaras e scroll horizontal |
| lenis | Rolagem suave sincronizada com as animações |
| split-type | Divide títulos em linhas/palavras para a revelação com máscara |
| @fontsource-variable/playfair-display, @fontsource-variable/manrope | Fontes hospedadas no próprio site (sem Google Fonts) |
| @astrojs/sitemap | Gera o sitemap.xml |

Não usei Swiper: o carrossel é o scroll horizontal com GSAP no desktop e rolagem nativa com
scroll-snap no celular, o que é mais leve.

## Animações (seção × efeito × motivo)

| Seção | Efeito | Motivo |
| --- | --- | --- |
| Abertura (1ª visita da sessão) | Monograma SR desenhado em traço dourado, nome letra a letra, linha que cresce, painel que se abre em duas metades | Momento de marca, só uma vez por sessão; botão "Pular" |
| Cabeçalho | Some ao descer, volta ao subir; fundo sólido com desfoque | Libera a tela para leitura sem perder o menu |
| Menu mobile | Abertura em círculo (clip-path) e links em sequência | Transição clara de estado |
| Hero | Título revelado por linha com máscara; fotos com clip-path e zoom de saída; botão magnético | Entrada orquestrada da primeira dobra |
| Faixa de confiança | Marquee contínuo (pausa no hover e fora da tela) | Mostra diferenciais sem ocupar espaço |
| A proposta | Palavras que acendem conforme a rolagem | Conduz a leitura da frase principal |
| Áreas de atuação | Cartões em sequência; zoom suave da foto e tilt 3D discreto no hover | Convida ao clique sem exagero |
| Sobre | Retrato com revelação em máscara | Destaque elegante para a única foto grande dela |
| Como funciona | Linha vertical que se desenha com a rolagem; número da etapa muda de cor ao chegar | Mostra a sequência das etapas |
| Nutrição vai além do prato | Seção fixa com scroll horizontal e parallax interno nas fotos (desktop); arraste com snap (celular) | Momento de destaque do site |
| Conteúdos, FAQ, páginas internas | Títulos com máscara, blocos subindo, FAQ abrindo com altura suave | Ritmo consistente sem repetir o mesmo efeito em tudo |
| Entre páginas | View Transitions (esmaece e desloca levemente) | Navegação contínua |

**Acessibilidade:** quem desativou animações no sistema (Windows: Configurações > Acessibilidade >
Efeitos visuais > Efeitos de animação) vê uma versão suave, só com esmaecimentos. Para ver a versão
completa mesmo assim, abra o site com `?movimento=1` no fim do endereço.

## O que não foi verificado

- Lighthouse não foi rodado neste ambiente.
- O layout de celular foi feito com breakpoints, mas não foi conferido visualmente em um aparelho.

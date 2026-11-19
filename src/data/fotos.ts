/**
 * Fotos de banco (Unsplash, licença Unsplash: uso comercial livre, sem
 * necessidade de crédito). Carregadas direto da CDN do Unsplash, que gera
 * o tamanho e o formato (AVIF/WebP) certos para cada tela.
 *
 * Regra do site: o rosto da Sueli aparece só nas duas fotos dela
 * (src/assets/img). Nenhuma foto de banco mostra o rosto de outra
 * profissional, para não parecer que é ela.
 *
 * Para trocar uma foto: abra a foto no unsplash.com, clique com o botão
 * direito na imagem > "Copiar endereço da imagem" e cole aqui só a parte
 * entre "photo-" e o "?".
 */
export interface Foto {
  src: string; // id da imagem na CDN (photo-...)
  pagina: string; // id da página da foto no unsplash.com (licença/crédito)
  alt: string;
  foco?: string; // ponto de foco do recorte (object-position)
}

const f = (src: string, pagina: string, alt: string, foco?: string): Foto => ({
  src: `photo-${src}`,
  pagina,
  alt,
  foco,
});

export const FOTOS = {
  // Hero
  heroConsulta: f('1675270360889-2c850358e364', 'SaN6XB1DrJk', 'Mesa de atendimento com prancheta, anotações e uma tigela de frutas', '45% 50%'),
  heroPrato: f('1644704170910-a0cdf183649b', 'VepJDAuitQ4', 'Mãos segurando uma tigela com grãos, legumes e folhas', '50% 60%'),

  // Áreas de atuação
  emagrecimento: f('1675270444770-1a6d1f69aefc', 'oThoRP1zGzE', 'Profissional medindo a circunferência da cintura de um paciente com fita métrica', '50% 50%'),
  glp1: f('1685485276223-0bb0226dcca8', '8gG2PDqpktY', 'Mãos usando um lancetador para medir a glicemia, sobre mesa de madeira', '45% 50%'),
  hipertrofia: f('1516481265257-97e5f4bc50d5', 'KIzBvHNe7hY', 'Pessoa preparando uma barra com anilhas para o treino de força', '50% 50%'),
  metabolica: f('1685061269933-563cc709b973', 's9TB1EbIhzs', 'Glicosímetro e frasco de tiras reagentes sobre mesa de madeira', '40% 55%'),
  intestinal: f('1618771622532-421eda797750', 'dLfwYP33vi4', 'Pessoa com as mãos sobre a barriga, sinal de desconforto digestivo', '50% 55%'),
  intolerancias: f('1657299156147-13f929a63ce4', 'RxQGRXKShQ8', 'Mulher lendo o rótulo de um produto durante as compras', '50% 35%'),

  // Como funciona
  avaliacao: f('1675270347058-8066cd1fe523', 'On_9vGMsFHI', 'Profissional preenchendo uma ficha de avaliação ao lado do notebook', '60% 50%'),
  planejamento: f('1655890193532-3f51318b23c0', 'GN1kHuSGHD0', 'Mãos picando ervas e legumes sobre uma tábua de madeira', '50% 50%'),
  acompanhamento: f('1760074032551-fef8992ca72d', 'Vw2O5QkDJQo', 'Mãos com luvas segurando um tubo de coleta de sangue para exame', '50% 45%'),

  // Dicas
  dicaProteina: f('1691480184494-d9f822edd4d1', '8oNpesw9idE', 'Ovo frito em prato branco'),
  dicaFibras: f('1564894809611-1742fc40ed80', 't4X660oKiYs', 'Feijões de cores variadas'),
  dicaBalanca: f('1778918006457-54fcf15d4a5a', 'KswNFGi1s44', 'Mãos segurando uma fita métrica'),

  // Contato
  agua: f('1564644411757-a723deba07a8', '-hNBS5q5klc', 'Copo de água sobre mesa de madeira com luz natural'),
} satisfies Record<string, Foto>;

/** Faixa "Nutrição vai além do prato" (scroll horizontal) */
export const FAIXA: (Foto & { legenda: string })[] = [
  { ...f('1760074032551-fef8992ca72d', 'Vw2O5QkDJQo', 'Tubo de coleta de sangue para exame laboratorial'), legenda: 'Leitura de exames' },
  { ...f('1778918006457-54fcf15d4a5a', 'KswNFGi1s44', 'Mãos segurando uma fita métrica'), legenda: 'Composição corporal' },
  { ...f('1547560488-bae538ffad63', 'v5oafxFZQqc', 'Pessoa dormindo em cama iluminada pela luz da manhã'), legenda: 'Sono' },
  { ...f('1564644411757-a723deba07a8', '-hNBS5q5klc', 'Copo de água sobre mesa de madeira'), legenda: 'Hidratação' },
  { ...f('1584863265045-f9d10ca7fa61', 'DHsdSeCpjRU', 'Mulher segurando uma anilha durante o treino de força'), legenda: 'Treino' },
  { ...f('1644704170910-a0cdf183649b', 'VepJDAuitQ4', 'Mãos segurando uma tigela com grãos, legumes e folhas'), legenda: 'Comida de verdade' },
  { ...f('1655890193532-3f51318b23c0', 'GN1kHuSGHD0', 'Mãos picando ervas sobre uma tábua de madeira'), legenda: 'Cozinhar em casa' },
  { ...f('1646836390736-ee0af3b6e9c6', 'xnWM1LwY75s', 'Cesta de compras com frutas e alimentos'), legenda: 'Compras e rótulos' },
  { ...f('1700070220976-1f167b2a92f7', 'eZqvZNaL4Hc', 'Pessoa caminhando em uma trilha arborizada'), legenda: 'Movimento' },
  { ...f('1758691461990-03b49d969495', '8WYkI3cEZm8', 'Médico fazendo anotações em uma prancheta'), legenda: 'Junto com o médico' },
];

/** Monta a URL da CDN do Unsplash com recorte e formato automáticos. */
export function urlFoto(foto: Foto, w: number, h?: number, q = 72) {
  const p = new URLSearchParams({ auto: 'format', fit: 'crop', w: String(w), q: String(q) });
  if (h) p.set('h', String(h));
  if (foto.foco) {
    const [x, y] = foto.foco.split(' ').map((v) => parseFloat(v) / 100);
    p.set('crop', 'focalpoint');
    p.set('fp-x', String(x));
    p.set('fp-y', String(y));
  }
  return `https://images.unsplash.com/${foto.src}?${p}`;
}

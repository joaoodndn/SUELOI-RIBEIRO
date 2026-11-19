/**
 * CONFIG — todos os dados de contato e identificação do site ficam aqui.
 *
 * Campos com o valor 'PREENCHER' ainda não foram confirmados pela Sueli.
 * Enquanto estiverem assim, o site esconde a informação (ou usa a
 * alternativa indicada no comentário) em vez de mostrar um dado inventado.
 */
export const PENDENTE = 'PREENCHER';

export const CONFIG = {
  nome: 'Sueli Ribeiro',
  profissao: 'Nutricionista',
  crn: 'CRN7/RO 17285',

  /** URL final do site (usada em SEO, sitemap e Open Graph). */
  siteUrl: 'https://sueliribeiro.vercel.app',

  /**
   * WhatsApp com DDI + DDD + número, só dígitos. Ex.: '5569999999999'.
   * Enquanto estiver 'PREENCHER', os botões de agendamento abrem o
   * Direct do Instagram.
   */
  whatsapp: PENDENTE,
  mensagemWhatsapp: 'Olá, Sueli! Vim pelo site e gostaria de agendar uma consulta.',

  instagram: 'nutri.sueliribeiro',

  /** Cidade do consultório. Ex.: 'Porto Velho'. */
  cidade: PENDENTE,
  estado: 'Rondônia',
  uf: 'RO',

  /** Endereço completo do consultório (rua, número, bairro). */
  endereco: PENDENTE,

  /**
   * Link de incorporação do Google Maps (Compartilhar > Incorporar um mapa >
   * copiar só o endereço que está dentro de src="...").
   */
  mapaEmbedUrl: PENDENTE,

  /** Ex.: 'Segunda a sexta, das 8h às 18h'. */
  horarios: PENDENTE,

  /** Marque true só depois de confirmar com a Sueli. */
  atendimentoPresencial: false,
  atendimentoOnline: false,

  /**
   * Formação. Só entra no site o que a Sueli confirmar.
   * A instituição só aparece se for preenchida.
   */
  formacao: [
    { titulo: 'Graduação em Nutrição', instituicao: PENDENTE, ano: PENDENTE },
    // { titulo: 'Pós-graduação em ...', instituicao: '...', ano: '...' },
  ],
} as const;

export const preenchido = (v: unknown): v is string =>
  typeof v === 'string' && v.trim() !== '' && v !== PENDENTE;

export const instagramUrl = `https://www.instagram.com/${CONFIG.instagram}/`;

/** Link de agendamento: WhatsApp se houver número, senão Direct do Instagram. */
export function linkAgendamento(mensagem: string = CONFIG.mensagemWhatsapp) {
  if (preenchido(CONFIG.whatsapp)) {
    return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  }
  return `https://ig.me/m/${CONFIG.instagram}`;
}

export const canalAgendamento = preenchido(CONFIG.whatsapp) ? 'WhatsApp' : 'Instagram';

export function localTexto() {
  return preenchido(CONFIG.cidade) ? `${CONFIG.cidade}, ${CONFIG.uf}` : CONFIG.estado;
}

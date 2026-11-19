import { FOTOS } from './fotos';

export const FAQ = [
  {
    p: 'Como funciona a primeira consulta?',
    r: 'É uma conversa longa sobre o seu histórico de saúde, rotina, alimentação, sono, treino e objetivos. Também fazemos a avaliação antropométrica e, quando aplicável, a bioimpedância. O plano alimentar é montado a partir dessas informações.',
  },
  {
    p: 'Preciso levar exames?',
    r: 'Se você tiver exames recentes, leve ou envie antes. Eles ajudam a montar um plano mais preciso. Se for necessário, a nutricionista pode solicitar novos exames.',
  },
  {
    p: 'Quanto tempo dura a consulta?',
    r: 'A primeira consulta costuma ser a mais longa, porque inclui a avaliação completa. Os retornos são mais curtos e focados em ajustes. O tempo exato é informado no agendamento.',
  },
  {
    p: 'O atendimento é presencial ou online?',
    r: 'As modalidades disponíveis e os horários são confirmados no momento do agendamento. Pergunte pela opção que fica melhor para você.',
  },
  {
    p: 'Vou receber um cardápio fixo?',
    r: 'Não. O plano é individualizado e traz opções e substituições, para que você consiga seguir em casa, no trabalho e fora de casa.',
  },
  {
    p: 'Com que frequência são os retornos?',
    r: 'Depende do objetivo e do momento do acompanhamento. Nos retornos, revisamos o que funcionou, refazemos as medidas e ajustamos o plano.',
  },
  {
    p: 'O que é a bioimpedância?',
    r: 'É um exame rápido e indolor que estima a composição do corpo, como massa gorda, massa magra e água. Ajuda a acompanhar a evolução além do peso na balança.',
  },
  {
    p: 'Uso medicamento para emagrecer. A nutricionista pode me acompanhar?',
    r: 'Sim. O acompanhamento cuida da alimentação durante o uso. A prescrição, o ajuste e a suspensão do medicamento são sempre decisões do seu médico.',
  },
  {
    p: 'Vou precisar cortar pão, arroz ou doces?',
    r: 'Não existe proibição padrão. O que entra, em que quantidade e com que frequência depende do seu objetivo, dos seus exames e da sua rotina.',
  },
  {
    p: 'Como faço para agendar?',
    r: 'Pelo botão "Agendar consulta" deste site. Ele abre a conversa de agendamento, onde você combina data, horário e modalidade.',
  },
];

export const DICAS = [
  {
    titulo: 'Proteína ao longo do dia',
    texto:
      'Distribuir a proteína entre as refeições, em vez de concentrar tudo no almoço e no jantar, ajuda na saciedade e na manutenção da massa muscular. Ovos, iogurte, feijões, carnes e queijos podem entrar no café da manhã e nos lanches.',
    foto: FOTOS.dicaProteina,
  },
  {
    titulo: 'Fibras pedem água',
    texto:
      'Aumentar frutas, verduras, legumes, feijões e grãos integrais faz bem para o intestino, mas a mudança precisa ser gradual e acompanhada de mais água. Fibra demais de uma vez, sem hidratação, pode piorar gases e desconforto.',
    foto: FOTOS.dicaFibras,
  },
  {
    titulo: 'O que a balança não mostra',
    texto:
      'O peso soma tudo: gordura, músculo, água e ossos. A avaliação de composição corporal ajuda a entender o que mudou de fato entre uma consulta e outra, e evita conclusões apressadas a partir de um único número.',
    foto: FOTOS.dicaBalanca,
  },
];

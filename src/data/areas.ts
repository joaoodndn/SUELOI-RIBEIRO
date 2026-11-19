import { FOTOS, type Foto } from './fotos';

export interface Area {
  slug: string;
  titulo: string;
  tituloCurto: string;
  resumo: string;
  foto: Foto;
  oQueE: string[];
  paraQuem: string[];
  acompanhamento: string[];
  naConsulta: string[];
  observacao?: string;
}

export const AREAS: Area[] = [
  {
    slug: 'emagrecimento-e-composicao-corporal',
    titulo: 'Emagrecimento e composição corporal',
    tituloCurto: 'Emagrecimento',
    resumo:
      'Olhar além do número da balança: massa gorda, massa magra, hidratação, fome e rotina, com um plano que dê para manter.',
    foto: FOTOS.emagrecimento,
    oQueE: [
      'Emagrecer não é só perder peso. Duas pessoas com o mesmo peso podem ter composições corporais muito diferentes, e é a composição, junto com os exames e o seu bem-estar, que orienta o trabalho.',
      'O foco é reduzir gordura preservando massa muscular, com um plano que respeite a sua rotina, seus horários e o que você gosta de comer.',
    ],
    paraQuem: [
      'Quem quer emagrecer sem dieta extrema ou cardápio genérico',
      'Quem já tentou várias vezes e recupera o peso',
      'Quem sente muita fome ao longo do dia ou belisca à noite',
      'Quem quer entender melhor a própria composição corporal',
    ],
    acompanhamento: [
      'Avaliação de peso, medidas e, quando aplicável, bioimpedância.',
      'Leitura da rotina: horários, trabalho, sono, treino e refeições fora de casa.',
      'Estratégias para fome e saciedade, com refeições que sustentem até a próxima.',
      'Ajustes a cada retorno, com base no que funcionou e no que não funcionou.',
    ],
    naConsulta: [
      'Conversa detalhada sobre histórico, hábitos e objetivos',
      'Avaliação antropométrica e de composição corporal',
      'Análise de exames recentes, se você tiver',
      'Plano alimentar individualizado, entregue após a consulta',
    ],
  },
  {
    slug: 'acompanhamento-glp-1',
    titulo: 'Acompanhamento nutricional com GLP-1',
    tituloCurto: 'GLP-1',
    resumo:
      'Apoio na alimentação de quem usa medicamentos da classe GLP-1: proteína suficiente, massa muscular, hidratação e conforto digestivo.',
    foto: FOTOS.glp1,
    oQueE: [
      'Os medicamentos da classe GLP-1 reduzem o apetite. Com menos fome, fica mais fácil comer pouco demais, deixar de lado a proteína e perder massa muscular junto com a gordura.',
      'O papel da nutricionista é cuidar da qualidade do que você come nesse período: garantir proteína suficiente, hidratação, boa tolerância digestiva e um padrão alimentar que continue funcionando depois.',
    ],
    paraQuem: [
      'Quem já usa um medicamento da classe GLP-1 com prescrição médica',
      'Quem tem dificuldade de comer o suficiente com o apetite reduzido',
      'Quem sente náusea, empachamento ou intestino preso durante o uso',
      'Quem quer se preparar para a fase de redução ou suspensão definida pelo médico',
    ],
    acompanhamento: [
      'Organização das refeições em porções menores, sem perder qualidade.',
      'Prioridade para proteína e alimentos que ajudem a preservar massa muscular.',
      'Orientações para hidratação e para o conforto digestivo.',
      'Comunicação com a equipe médica sempre que for necessário.',
    ],
    naConsulta: [
      'Histórico do uso do medicamento e dos sintomas',
      'Avaliação de composição corporal, quando aplicável',
      'Leitura de exames recentes',
      'Plano alimentar ajustado à fase do tratamento',
    ],
    observacao:
      'A nutricionista não prescreve, ajusta nem suspende medicamentos. Qualquer decisão sobre o remédio é do seu médico. O trabalho aqui é feito em conjunto com a equipe médica.',
  },
  {
    slug: 'hipertrofia-e-ganho-de-massa-muscular',
    titulo: 'Hipertrofia e ganho de massa muscular',
    tituloCurto: 'Hipertrofia',
    resumo:
      'Plano alimentar alinhado ao treino: energia e proteína adequadas, bem distribuídas no dia, e atenção à recuperação.',
    foto: FOTOS.hipertrofia,
    oQueE: [
      'Ganhar massa muscular depende do treino, do descanso e da alimentação. Sem energia e proteína suficientes, o treino rende menos e a recuperação demora mais.',
      'O plano é montado em cima da sua rotina de treinos, com refeições e lanches práticos para os horários em que você realmente consegue comer.',
    ],
    paraQuem: [
      'Quem treina musculação e não vê evolução',
      'Quem tem dificuldade de comer o suficiente ao longo do dia',
      'Quem quer ganhar massa sem ganhar gordura em excesso',
      'Quem quer preservar músculo com o passar dos anos',
    ],
    acompanhamento: [
      'Cálculo das necessidades de energia e proteína a partir da sua avaliação.',
      'Distribuição das refeições em torno dos treinos.',
      'Opções de lanches práticos para levar e preparar.',
      'Reavaliação da composição corporal para acompanhar a evolução.',
    ],
    naConsulta: [
      'Rotina de treino, sono e trabalho',
      'Avaliação de composição corporal, quando aplicável',
      'Análise do que você come hoje',
      'Plano com refeições e lanches ajustados ao treino',
    ],
  },
  {
    slug: 'saude-metabolica-e-endocrina',
    titulo: 'Saúde metabólica e endócrina',
    tituloCurto: 'Saúde metabólica',
    resumo:
      'Apoio nutricional em resistência à insulina, diabetes, colesterol, triglicerídeos, tireoide e alterações hormonais.',
    foto: FOTOS.metabolica,
    oQueE: [
      'Alterações como resistência à insulina, diabetes, colesterol e triglicerídeos altos, problemas de tireoide e mudanças hormonais têm relação direta com a alimentação.',
      'O plano é construído a partir dos seus exames e sempre em conjunto com o acompanhamento médico, com trocas que cabem na sua rotina em vez de proibições.',
    ],
    paraQuem: [
      'Quem recebeu diagnóstico de pré-diabetes ou diabetes',
      'Quem tem colesterol ou triglicerídeos alterados',
      'Quem trata alterações de tireoide ou hormonais',
      'Quem quer cuidar da saúde metabólica antes que os exames se alterem',
    ],
    acompanhamento: [
      'Leitura detalhada dos exames laboratoriais.',
      'Organização das refeições para mais estabilidade ao longo do dia.',
      'Escolha de carboidratos, gorduras e fibras de acordo com o seu quadro.',
      'Ajustes a cada retorno, acompanhando os novos exames.',
    ],
    naConsulta: [
      'Histórico de saúde e medicamentos em uso',
      'Leitura dos exames que você já tem',
      'Avaliação de composição corporal, quando aplicável',
      'Plano alimentar individualizado',
    ],
  },
  {
    slug: 'saude-intestinal-e-hepatica',
    titulo: 'Saúde intestinal e hepática',
    tituloCurto: 'Intestino e fígado',
    resumo:
      'Constipação, gases, distensão e desconforto digestivo, além do cuidado alimentar na gordura no fígado.',
    foto: FOTOS.intestinal,
    oQueE: [
      'Intestino preso, gases, barriga distendida e desconforto depois de comer atrapalham o dia a dia e costumam ter relação com o que, como e quando se come.',
      'A gordura no fígado (esteatose) é outro quadro em que a alimentação tem papel central. Nos dois casos, o trabalho é feito em etapas, com mudanças graduais que o corpo consiga acompanhar.',
    ],
    paraQuem: [
      'Quem convive com intestino preso ou irregular',
      'Quem sente gases, distensão ou desconforto após as refeições',
      'Quem recebeu diagnóstico de gordura no fígado',
      'Quem quer hábitos que favoreçam a microbiota intestinal',
    ],
    acompanhamento: [
      'Mapeamento dos sintomas e da relação deles com as refeições.',
      'Ajuste gradual de fibras, água e variedade de alimentos.',
      'Estratégia alimentar para a esteatose, em conjunto com o médico.',
      'Reavaliação dos sintomas e dos exames a cada etapa.',
    ],
    naConsulta: [
      'Histórico dos sintomas digestivos',
      'Leitura de exames, incluindo os do fígado, se houver',
      'Avaliação de composição corporal, quando aplicável',
      'Plano alimentar em etapas',
    ],
  },
  {
    slug: 'intolerancias-alimentares',
    titulo: 'Intolerâncias alimentares',
    tituloCurto: 'Intolerâncias',
    resumo:
      'Identificar gatilhos junto com a equipe de saúde e evitar restrições desnecessárias, com uma dieta completa e saborosa.',
    foto: FOTOS.intolerancias,
    oQueE: [
      'Cortar alimentos por conta própria pode empobrecer a dieta sem resolver o problema. O primeiro passo é entender o que realmente causa os sintomas, junto com a equipe de saúde.',
      'Quando a restrição é necessária, como na alimentação sem glúten ou sem lactose, o trabalho é garantir que a dieta continue completa, variada e gostosa.',
    ],
    paraQuem: [
      'Quem tem diagnóstico de intolerância à lactose ou doença celíaca',
      'Quem suspeita que algum alimento faz mal, mas não sabe qual',
      'Quem já retirou vários alimentos e sente a dieta pobre',
      'Quem precisa de ideias práticas sem glúten ou sem lactose',
    ],
    acompanhamento: [
      'Investigação dos sintomas e da relação com os alimentos.',
      'Restrições só quando indicadas, e pelo tempo necessário.',
      'Substituições que mantenham os nutrientes da dieta.',
      'Receitas e opções práticas para o dia a dia.',
    ],
    naConsulta: [
      'Histórico de sintomas e diagnósticos',
      'Análise do que você já retirou da alimentação',
      'Leitura de exames, se houver',
      'Plano alimentar com substituições adequadas',
    ],
  },
];

export const getArea = (slug: string) => AREAS.find((a) => a.slug === slug);

import { Article, Author, Category } from './types';

const authorAdmin: Author = {
  id: '1',
  name: 'Diretoria de Comunicação',
  role: 'Assessoria de Imprensa AAFAB'
};

const authorSpecialist: Author = {
  id: '2',
  name: 'Cel. Av. Ricardo Mendes (Res)',
  role: 'Analista de Geopolítica'
};

const authorJournalist: Author = {
  id: '3',
  name: 'Mariana Souza',
  role: 'Repórter de Política Nacional'
};

// Exemplos de matérias prontas conforme solicitado nos entregáveis
export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'AAFAB reforça compromisso com a história da aviação em evento anual',
    subtitle: 'Encontro reuniu veteranos, autoridades e pesquisadores para discutir o legado da Força Aérea Brasileira e o futuro da associação.',
    category: Category.AAFAB,
    author: authorAdmin,
    publishDate: '2023-10-24',
    imageUrl: 'https://picsum.photos/800/400?grayscale',
    imageCaption: 'Auditório principal durante a execução do hino da aviação.',
    isFeatured: true,
    tags: ['Institucional', 'Evento', 'Memória'],
    content: `
A Associação de Amigos da Força Aérea Brasileira (AAFAB) realizou neste fim de semana seu encontro anual, reafirmando seu papel fundamental na preservação da memória aeronáutica nacional e no apoio à família militar.

O evento, ocorrido na sede social, contou com a presença de mais de 200 associados, incluindo veteranos de missões de paz e ex-comandantes da organização. Durante a abertura, a diretoria destacou a importância da união entre civis e militares para o fortalecimento da mentalidade de defesa no Brasil.

### Preservando o Legado

"Nossa missão não é apenas olhar para o passado com saudosismo, mas garantir que as lições de ontem sirvam de alicerce para as gerações futuras", afirmou o presidente da AAFAB em seu discurso oficial. Foram apresentados novos projetos de digitalização do acervo histórico da associação, que estarão disponíveis ao público em breve.

### Agenda Futura

Além das celebrações, foram discutidas pautas administrativas e o calendário de eventos para o próximo ano, que incluirá ciclos de palestras sobre soberania e tecnologia aeroespacial. A AAFAB convida todos os interessados a se associarem e participarem ativamente dessa construção coletiva.
    `
  },
  {
    id: '2',
    title: 'Orçamento de Defesa para 2024 entra em pauta no Congresso Nacional',
    subtitle: 'Parlamentares debatem a alocação de recursos para projetos estratégicos, incluindo o programa Gripen e a modernização de blindados.',
    category: Category.POLITICA_BR,
    author: authorJournalist,
    publishDate: '2023-10-23',
    imageUrl: 'https://picsum.photos/800/401',
    imageCaption: 'Plenário do Congresso Nacional em Brasília.',
    isFeatured: false,
    tags: ['Orçamento', 'Congresso', 'Defesa'],
    content: `
A Comissão Mista de Orçamento (CMO) iniciou nesta terça-feira a análise setorial das verbas destinadas ao Ministério da Defesa para o exercício fiscal de 2024. O debate é crucial para a continuidade de projetos estratégicos das Forças Armadas.

Entre os pontos de destaque está o cronograma de repasses para o caça F-39 Gripen, vital para a soberania do espaço aéreo brasileiro. Especialistas apontam que a previsibilidade orçamentária é o maior desafio para a indústria de defesa nacional.

### O Papel do Legislativo

Deputados e senadores da base e da oposição concordam, em sua maioria, sobre a necessidade de manter os investimentos em tecnologia dual (civil e militar). No entanto, o teto de gastos impõe restrições que exigirão articulação política apurada.

O relator do projeto garantiu que as Forças Armadas não sofrerão descontinuidade em operações de Garantia da Lei e da Ordem (GLO) nem no monitoramento de fronteiras, essenciais para o combate aos ilícitos transnacionais.
    `
  },
  {
    id: '3',
    title: 'A Nova Corrida Espacial e os Impactos na Geopolítica Sul-Americana',
    subtitle: 'Como o retorno das grandes potências à Lua e a militarização do espaço afetam a soberania e as alianças estratégicas no hemisfério sul.',
    category: Category.DEFESA,
    author: authorSpecialist,
    publishDate: '2023-10-22',
    imageUrl: 'https://picsum.photos/800/402',
    imageCaption: 'Lançamento de foguete ilustrando a tecnologia aeroespacial.',
    isFeatured: false,
    tags: ['Geopolítica', 'Espaço', 'Soberania'],
    content: `
O espaço sideral deixou de ser apenas uma fronteira de exploração científica para se tornar, novamente, um teatro de operações geopolíticas. Com EUA e China acelerando seus programas lunares, nações sul-americanas precisam recalibrar suas estratégias de defesa e cooperação tecnológica.

O Brasil, com o Centro de Lançamento de Alcântara (CLA), possui uma posição geográfica privilegiada. Contudo, a vantagem geográfica deve ser acompanhada de diplomacia robusta e investimento em tecnologia nacional.

### Soberania e Satélites

A dependência de sistemas de posicionamento global estrangeiros (GPS, GLONASS, Galileo) é um ponto de vulnerabilidade. O desenvolvimento de constelações de satélites de baixa órbita para monitoramento da Amazônia e do Atlântico Sul é, portanto, não apenas uma questão ambiental, mas de defesa nacional.

Para a Força Aérea Brasileira, a doutrina do "Poder Aeroespacial" nunca foi tão atual. A capacidade de vigiar e proteger nossos ativos espaciais será determinante para a manutenção da soberania no século XXI.
    `
  },
  {
    id: '4',
    title: 'NOTA OFICIAL: Posicionamento sobre a Reestruturação de Carreiras',
    subtitle: 'A AAFAB vem a público esclarecer pontos importantes sobre o projeto de lei em tramitação.',
    category: Category.COMUNICADO,
    author: authorAdmin,
    publishDate: '2023-10-20',
    imageUrl: 'https://picsum.photos/800/403?grayscale',
    imageCaption: 'Diretoria Executiva da AAFAB.',
    isFeatured: false,
    tags: ['Comunicado', 'Administrativo', 'Jurídico'],
    content: `
A Associação de Amigos da Força Aérea Brasileira (AAFAB), no uso de suas atribuições estatutárias, vem a público manifestar-se sobre as recentes notícias veiculadas a respeito da reestruturação das carreiras militares.

Reiteramos nosso compromisso com a defesa dos direitos adquiridos e com a valorização da família militar. Estamos acompanhando atentamente a tramitação das propostas legislativas e mantendo diálogo constante com as autoridades competentes.

Pedimos aos associados que busquem informações exclusivamente através dos canais oficiais da AAFAB, evitando a propagação de rumores que não contribuem para o debate sério e institucional necessário ao momento.

Atenciosamente,
Diretoria Executiva da AAFAB.
    `
  }
];

export const navigation: { main: { name: string; href: string }[]; categories: { name: string; href: string }[] } = {
  main: [
    { name: 'Início', href: '/' },
    { name: 'A AAFAB', href: '/categoria/institucional-aafab' },
    { name: 'Política', href: '/categoria/politica-brasileira' },
    { name: 'Defesa', href: '/categoria/defesa-nacional' },
    { name: 'Geopolítica', href: '/categoria/politica-internacional' },
  ],
  categories: [
    { name: 'Força Aérea', href: '/categoria/forca-aerea-brasileira' },
    { name: 'Opinião', href: '/categoria/opiniao' },
    { name: 'Comunicados', href: '/categoria/comunicado-oficial' },
  ]
};

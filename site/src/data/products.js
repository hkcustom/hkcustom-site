// Estrutura de dados dos produtos.
// Para adicionar um novo produto no futuro, basta incluir um novo objeto neste array —
// os componentes Products, ProductCard e ProductDetails já renderizam a partir daqui.

export const products = [
  {
    id: "welcome-lights",
    name: "Interface Welcome Lights",
    model: "Modelo 2.0",
    category: "Módulo de Acendimento Automático dos Faróis",
    shortDescription:
      "Iluminação automática dos faróis ao travar e destravar o veículo pelo alarme.",
    icon: "headlight",
    heroText: "Iluminação Automática dos Faróis",
    intro:
      "Desenvolvida para ativar a função Welcome Lights, a Interface Modelo 2.0 acende automaticamente os faróis ao travar e destravar o veículo pelo controle do alarme. Uma solução prática para quem busca mais estilo, comodidade e tecnologia, mantendo a originalidade do veículo.",
    highlights: [
      "Função Welcome Lights",
      "Acendimento automático dos faróis",
      "4 opções de tempo",
      "Instalação simplificada",
      "Preserva a originalidade do veículo",
      "Sem cortes ou adaptações invasivas",
      "Compatível com diversos veículos e alarmes",
    ],
    features: [
      {
        title: "Acendimento automático",
        icon: "headlight",
        text: "Os faróis são acionados automaticamente conforme o comando de travamento ou destravamento do veículo.",
      },
      {
        title: "4 opções de tempo",
        icon: "clock",
        text: "Selecione o tempo de funcionamento: 15, 25, 40 ou 60 segundos.",
        list: ["15 segundos", "25 segundos", "40 segundos", "60 segundos"],
      },
      {
        title: "Instalação simplificada",
        icon: "tools",
        text: "Produto acompanhado de manual passo a passo.",
      },
      {
        title: "Preserva a originalidade",
        icon: "shield",
        text: "Projetado para evitar cortes ou adaptações invasivas na instalação.",
      },
    ],
    compatibilityNote:
      "Compatível com a maioria dos veículos e alarmes disponíveis no mercado.",
    compatibilityWarning:
      "Alguns veículos equipados com rede CAN podem apresentar incompatibilidade. Consulte a compatibilidade antes da compra.",
  },
  {
    id: "interblock",
    name: "INTERBLOCK",
    model: "",
    category: "Bloqueador de Combustível + Controle de Suspensão a Ar",
    shortDescription:
      "Sistema inteligente de proteção e controle para veículos equipados com alarme e suspensão a ar.",
    icon: "lock",
    heroText: "Bloqueador de Combustível e Controle de Suspensão a Ar",
    intro:
      "O INTERBLOCK é um sistema desenvolvido para veículos equipados com alarme e suspensão a ar, seja de fábrica ou instalada posteriormente. O sistema integra funções de bloqueio, segurança e controle, proporcionando uma camada adicional de proteção e praticidade ao veículo.",
    highlights: [
      "Bloqueio da bomba de combustível",
      "Bloqueio da suspensão a ar",
      "Saída auxiliar para controle de altura",
      "Função manobrista",
      'Modo de segurança "assalto"',
    ],
    features: [
      {
        title: "Bloqueio da bomba de combustível",
        icon: "fuel",
        text: 'O bloqueio é ativado automaticamente dois minutos após a abertura e fechamento da porta do motorista, caso o botão master (segredo) não seja pressionado. O LED pisca em vermelho durante o bloqueio. Para desbloquear: feche a porta, ligue a ignição e pressione o botão master — o LED muda para verde contínuo.',
      },
      {
        title: "Bloqueio da suspensão a ar",
        icon: "suspension",
        text: "Quando o alarme do veículo é acionado, a suspensão a ar é desativada automaticamente, podendo baixar completamente o veículo e dificultar sua movimentação. Para restaurar: ligue a ignição e pressione o botão master.",
      },
      {
        title: "Saída auxiliar para controle da suspensão",
        icon: "suspension",
        text: "Permite utilizar o comando do alarme para controlar a altura do veículo — rebaixando ao travar e elevando ao destravar, conforme a programação.",
      },
      {
        title: "Função manobrista",
        icon: "key",
        text: "Desativa temporariamente as proteções do sistema para que terceiros possam movimentar o veículo. Para ativar: porta fechada, ignição ligada e pressione o botão master por 10 segundos. Permite entregar o veículo a um manobrista sem informar a localização do botão master.",
      },
      {
        title: 'Modo de segurança "assalto"',
        icon: "alert",
        text: "Aumenta a proteção em situação de abordagem durante a condução. Se uma porta é aberta com o veículo em movimento, o sistema inicia o processo de segurança: após 2 minutos bloqueia a bomba de combustível e, após mais 1 minuto, desativa a suspensão a ar.",
        note: "Camada adicional de proteção — não é uma garantia absoluta contra furtos ou roubos.",
      },
    ],
    compatibilityNote:
      "Destinado a veículos equipados com alarme e suspensão a ar (de fábrica ou instalada posteriormente).",
    compatibilityWarning:
      "A compatibilidade deve ser verificada antes da instalação.",
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

import { TemplateProps } from './types'

export const templates: TemplateProps[] = [
  {
    name: 'Geração de Leads',
    emoji: '🤝',
    fileName: 'lead-gen.json',
    category: 'marketing',
    description:
      'Você é uma agência de marketing e este bot permite gerar novos leads interessados nos seus serviços',
  },
  {
    name: 'Suporte ao Cliente',
    emoji: '😍',
    fileName: 'customer-support.json',
    category: 'produto',
    description:
      'Um bot cuja função é coletar feedback dos usuários: perguntas, bugs e solicitações de recursos.',
  },
  {
    name: 'Quiz',
    emoji: '🕹️',
    fileName: 'quiz.json',
    category: 'marketing',
    description:
      'Um quiz divertido para interagir com seus usuários e coletar seus e-mails',
  },
  {
    name: 'Pontuação de Leads',
    emoji: '🏆',
    fileName: 'lead-scoring.json',
    category: 'marketing',
    description:
      'Calcule uma pontuação ao lado de perguntas de qualificação de leads para classificar seus novos prospects',
  },
  {
    name: 'Lead Magnet',
    emoji: '🧲',
    fileName: 'lead-magnet.json',
    category: 'marketing',
    description:
      'Forneça um conteúdo gratuito aos seus prospects em troca das informações de contato deles.',
  },
  {
    name: 'Recomendação de Produto',
    emoji: '🍫',
    fileName: 'product-recommendation.json',
    category: 'marketing',
    description:
      'Näak é uma empresa que vende barras de energia, misturas de hidratação e produtos de recuperação. Este bot ajuda um visitante a escolher o produto certo. Ele ajuda você a qualificar seu lead e fornecer uma recomendação personalizada.',
    backgroundColor: '#010000',
  },
  {
    name: 'Pesquisa NPS',
    emoji: '⭐',
    fileName: 'nps.json',
    category: 'produto',
    description:
      'Uma simples pesquisa NPS para medir a satisfação do cliente e melhorar o seu produto',
  },
  {
    name: 'Integração de Usuários',
    emoji: '🧑‍🚀',
    fileName: 'onboarding.json',
    category: 'produto',
    description:
      'Um bot que solicita informações de novos usuários antes de começarem a usar seu produto',
  },
  {
    name: 'Pagamento de Produto Digital',
    emoji: '🖼️',
    fileName: 'digital-product-payment.json',
    description:
      'Um bot que permite vender produtos digitais (e-books, cursos, etc.) e só disponibiliza o conteúdo após a confirmação do pagamento',
  },
  {
    name: 'FAQ',
    emoji: '💬',
    fileName: 'faq.json',
    category: 'produto',
    description:
      'Um bot que responde a perguntas frequentes sobre o seu produto ou serviço',
  },
  {
    name: 'Recomendação de Filme',
    emoji: '🍿',
    fileName: 'movie-recommendation.json',
    description: 'Um bot que recomenda filmes baseados nas preferências do usuário',
  },
  {
    name: 'ChatGPT Básico',
    emoji: '🤖',
    fileName: 'basic-chat-gpt.json',
    description:
      'Um bot que usa o modelo ChatGPT para gerar respostas com base na entrada do usuário',
  },
  {
    name: 'ChatGPT de Áudio',
    emoji: '🤖',
    fileName: 'audio-chat-gpt.json',
    description:
      'Um bot de IA de áudio que usa o bloco OpenAI para gerar respostas com base na entrada do usuário',
    isNew: true,
  },
  {
    name: 'Personas ChatGPT',
    emoji: '🎭',
    fileName: 'chat-gpt-personas.json',
    description:
      'Um bot que usa o modelo ChatGPT para gerar respostas com base na entrada do usuário e na persona selecionada',
  },
  {
    name: 'Geração de Leads com IA',
    emoji: '🦾',
    fileName: 'lead-gen-ai.json',
    category: 'marketing',
    description:
      'Você é uma agência de marketing e este bot permite gerar novos leads interessados nos seus serviços. Um bloco de IA é usado para aprofundar nas necessidades do usuário.',
  },
  {
    name: 'Oferta de Seguro',
    emoji: '🐶',
    fileName: 'dog-insurance-offer.json',
    category: 'marketing',
    description:
      'Você é uma empresa de seguro para cães. Este bot permite coletar informações sobre o cão e fornecer uma cotação.',
  },
  {
    name: 'Condições OpenAI',
    emoji: '🧠',
    fileName: 'openai-conditions.json',
    isNew: true,
    description:
      'Este é um exemplo de como você pode usar o bloco OpenAI para tomar decisões inteligentes com base na entrada do usuário e redirecionar a conversa para o caminho certo.',
  },
]

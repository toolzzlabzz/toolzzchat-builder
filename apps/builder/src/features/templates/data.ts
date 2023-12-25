import { TemplateProps } from './types'

export const templates: TemplateProps[] = [
  {
    name: 'Geração de Leads',
    emoji: '🤝',
    fileName: 'lead-gen.json',
    category: 'marketing',
    description:
      'Você é uma agência de marketing e este bot permite gerar novos leads interessados nos seus serviços.',
  },
  {
    name: 'Suporte ao Cliente',
    emoji: '😍',
    fileName: 'customer-support.json',
    category: 'product',
    description:
      'Um bot cuja função é coletar feedback dos usuários: perguntas, bugs e solicitações de recursos.',
  },
  {
    name: 'Quiz',
    emoji: '🕹️',
    fileName: 'quiz.json',
    category: 'marketing',
    description:
      'Um quiz divertido para interagir com seus usuários e coletar seus e-mails.',
  },
  {
    name: 'Pontuação de Leads',
    emoji: '🏆',
    fileName: 'lead-scoring.json',
    category: 'marketing',
    description:
      'Calcule uma pontuação ao lado de perguntas de qualificação de leads para classificar seus novos prospects.',
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
    category: 'product',
    description:
      'Uma simples pesquisa NPS para medir a satisfação do cliente e melhorar o seu produto.',
  },
  {
    name: 'Integração de Usuários',
    emoji: '🧑‍🚀',
    fileName: 'onboarding.json',
    category: 'product',
    description:
      'Um bot que solicita informações de novos usuários antes de começarem a usar seu produto.',
  },
  {
    name: 'Pagamento de Produto Digital',
    emoji: '🖼️',
    fileName: 'digital-product-payment.json',
    description:
      'Um bot que permite vender produtos digitais (e-books, cursos, etc.) e só disponibiliza o conteúdo após a confirmação do pagamento.',
  },
  {
    name: 'FAQ',
    emoji: '💬',
    fileName: 'faq.json',
    category: 'product',
    description:
      'Um bot que responde a perguntas frequentes sobre o seu produto ou serviço.',
  },
  {
    name: 'Recomendação de Filme',
    emoji: '🍿',
    fileName: 'movie-recommendation.json',
    description: 'Um bot que recomenda filmes baseados nas preferências do usuário.',
  },
  {
    name: 'ChatGPT Básico',
    emoji: '🤖',
    fileName: 'basic-chat-gpt.json',
    description:
      'Um bot que usa o modelo ChatGPT para gerar respostas com base na entrada do usuário.',
  },
  {
    name: 'ChatGPT de Áudio',
    emoji: '🤖',
    fileName: 'audio-chat-gpt.json',
    description:
      'Um bot de IA de áudio que usa o bloco OpenAI para gerar respostas com base na entrada do usuário.',
    isNew: true,
  },
  {
    name: 'Personas ChatGPT',
    emoji: '🎭',
    fileName: 'chat-gpt-personas.json',
    description:
      'Um bot que usa o modelo ChatGPT para gerar respostas com base na entrada do usuário e na persona selecionada.',
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
  {
    name: 'Análise Financeira',
    emoji: '💹',
    fileName: 'financial-analysis.json',
    category: 'financeiro',
    description:
      'Um bot destinado a ajudar na análise de dados financeiros, fornecendo insights e relatórios personalizados com base nas informações do usuário.',
  },
  {
    name: 'Recrutamento Inteligente',
    emoji: '🔍',
    fileName: 'smart-recruitment.json',
    category: 'rh',
    description:
      'Automatize o processo de recrutamento, utilizando IA para filtrar candidatos com base em habilidades e experiência, melhorando a eficiência do RH.',
  },
  {
    name: 'Feedback de Equipe',
    emoji: '🗣️',
    fileName: 'team-feedback.json',
    category: 'rh',
    description:
      'Colete e analise feedback de funcionários sobre o ambiente de trabalho, políticas da empresa e satisfação geral, para melhorar a gestão de RH.',
  },
  {
    name: 'Gerenciamento de Projetos',
    emoji: '📊',
    fileName: 'project-management.json',
    category: 'tecnologia',
    description:
      'Um bot que auxilia no gerenciamento de projetos de TI, organizando tarefas, prazos e recursos, facilitando a comunicação entre as equipes.',
  },
  {
    name: 'Assistente de Vendas',
    emoji: '💼',
    fileName: 'sales-assistant.json',
    category: 'marketing',
    description:
      'Um bot que ajuda equipes de vendas a acompanhar leads, agendar reuniões e gerenciar funil de vendas, aumentando a eficiência do processo comercial.',
  },
  {
    name: 'Análise de Tendências de Mercado',
    emoji: '🔍',
    fileName: 'market-trend-analysis.json',
    category: 'marketing',
    description:
      'Um bot que utiliza IA para analisar tendências de mercado e fornecer insights valiosos para estratégias de marketing e desenvolvimento de produtos.',
  },
  {
    name: 'Suporte Técnico',
    emoji: '🔧',
    fileName: 'tech-support.json',
    category: 'tecnologia',
    description:
      'Um bot projetado para oferecer suporte técnico, resolvendo problemas comuns e encaminhando casos mais complexos para especialistas técnicos.',
  },
  {
    name: 'Gestão de Desempenho',
    emoji: '📈',
    fileName: 'performance-management.json',
    category: 'rh',
    description:
      'Este bot ajuda na gestão de desempenho dos funcionários, facilitando avaliações, feedbacks e planejamento de desenvolvimento de carreira.',
  },
  {
    name: 'Análise de Risco Financeiro',
    emoji: '🔥',
    fileName: 'financial-risk-analysis.json',
    category: 'financeiro',
    description:
      'Um bot especializado em identificar e analisar riscos financeiros, ajudando empresas a tomar decisões mais informadas e seguras.',
  },
  {
    name: 'Distribuição de Conteúdo',
    emoji: '📰',
    category: 'marketing',
    description: 'Um bot que distribui conteúdo para sua audiência, como artigos, vídeos ou notícias.',
    fileName: 'content-distribution-bot.json'
  },
  {
    name: 'Consulta de Produtos',
    emoji: '🔍',
    category: 'marketing',
    description: 'Um bot que ajuda os usuários a encontrar produtos específicos em seu catálogo.',
    fileName: 'product-query-bot.json'
  },
  {
    name: 'Qualificação de Leads com IA',
    emoji: '🤖',
    category: 'marketing',
    description: 'Um bot que usa IA para qualificar leads automaticamente com base em critérios predefinidos.',
    fileName: 'ai-lead-qualification-bot.json'
  },
  {
    name: 'Campanha de Marketing Digital',
    emoji: '💻',
    category: 'marketing',
    description: 'Um bot que ajuda a criar e gerenciar campanhas de marketing digital.',
    fileName: 'digital-marketing-campaign-bot.json'
  },
  {
    name: 'Análise de Mercado',
    emoji: '📊',
    category: 'marketing',
    description: 'Um bot que fornece análises e insights sobre o mercado relevante para o seu negócio.',
    fileName: 'market-analysis-bot.json'
  },
  {
    name: 'Estratégia de Branding',
    emoji: '🌟',
    category: 'marketing',
    description: 'Um bot que ajuda a desenvolver estratégias de branding para fortalecer a identidade da marca.',
    fileName: 'branding-strategy-bot.json'
  },
  {
    name: 'Controle de Fluxo de Caixa',
    emoji: '💰',
    category: 'financeiro',
    description: 'Um bot que auxilia na gestão e controle do fluxo de caixa da empresa.',
    fileName: 'cash-flow-management-bot.json'
  },
  {
    name: 'Consulta de Investimentos',
    emoji: '💹',
    category: 'financeiro',
    description: 'Um bot que fornece informações sobre investimentos e ajuda os usuários a tomar decisões financeiras.',
    fileName: 'investment-consultation-bot.json'
  },
  {
    name: 'Treinamento Corporativo',
    emoji: '🏢',
    category: 'educação',
    description: 'Um bot que ajuda a criar e gerenciar programas educacionais para funcionários.',
    fileName: 'corporate-educational-programs-bot.json'
  },
  {
    name: 'Tutoria Inteligente',
    emoji: '🧑‍🏫',
    category: 'educação',
    description: 'Um bot que oferece tutoria personalizada e respostas a perguntas dos alunos.',
    fileName: 'intelligent-tutoring-bot.json'
  },
  {
    name: 'Estratégias de Retenção',
    emoji: '🔄',
    category: 'atendimento',
    description: 'Um bot que ajuda a implementar estratégias de retenção de clientes.',
    fileName: 'customer-retention-strategies-bot.json'
  },
  {
    name: 'Resposta a Incidentes',
    emoji: '🚨',
    category: 'atendimento',
    description: 'Um bot que ajuda a lidar com incidentes e problemas de forma eficiente.',
    fileName: 'incident-response-bot.json'
  },
  {
    name: 'Análise de Satisfação do Cliente',
    emoji: '😄',
    category: 'atendimento',
    description: 'Um bot que analisa a satisfação do cliente por meio de pesquisas e feedbacks.',
    fileName: 'customer-satisfaction-analysis-bot.json'
  },
  {
    name: 'Respostas Automáticas a FAQ',
    emoji: '❓',
    category: 'faq',
    description: 'Um bot que fornece respostas automáticas para perguntas frequentes dos clientes.',
    fileName: 'auto-faq-responses-bot.json'
  },
  {
    name: 'Relatórios Automatizados',
    emoji: '📊',
    category: 'relatórios',
    description: 'Um bot que gera relatórios automatizados com base em dados específicos.',
    fileName: 'automated-reports-bot.json'
  },
  {
    name: 'Análise de Dados',
    emoji: '📈',
    category: 'relatórios',
    description: 'Um bot especializado em analisar dados e fornecer insights valiosos.',
    fileName: 'data-analysis-bot.json'
  },
  {
    name: 'Relatórios Financeiros',
    emoji: '💹',
    category: 'relatórios',
    description: 'Um bot que gera relatórios financeiros detalhados com base em informações financeiras.',
    fileName: 'financial-reports-bot.json'
  },
]

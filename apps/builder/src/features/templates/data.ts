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
    category: 'atendimento',
    description:
      'Um bot cuja função é coletar feedback dos usuários: perguntas, bugs e solicitações de recursos.',
  },
  {
    name: 'Suporte ao Aluno',
    emoji: '🧑‍🎓',
    fileName: 'student-support.json',
    category: 'educação',
    description:
      'Um bot cuja função é coletar feedback dos alunos: perguntas, bugs e solicitações de recursos.',
  },
  {
    name: 'Incidentes de Segurança',
    emoji: '👾',
    fileName: 'security-issues.json',
    category: 'tecnologia',
    description:
      'Um bot que auxilia o CTO na formalização e gestão de incidentes de segurança',
  },
  {
    name: 'Gerar Post Morten',
    emoji: '📋',
    fileName: 'postmorten.json',
    category: 'tecnologia',
    description:
      'Um bot que auxilia o CTO na geração de postmorten',
  },
  {
    name: 'Atendimento Acadêmico',
    emoji: '🏫',
    fileName: 'school-support.json',
    category: 'educação',
    description:
      'Um bot cuja função é oferecer atendimento e suporte academico automatizado referente a matrícula, notas, provas, agenda do aluno e mais.',
  },
  {
    name: 'Trilha Personalizada',
    emoji: '🚩',
    fileName: 'trails-recommendation.json',
    category: 'educação',
    description:
      'Este bot cria uma trilha personalizada para cada aluno e fornece uma recomendação personalizada.',
    backgroundColor: '#010000',
  },
  {
    name: 'Treinamento Corporativo',
    emoji: '🏢',
    category: 'educação',
    description: 'Um bot que ajuda a criar e gerenciar programas educacionais para funcionários.',
    fileName: 'corporate-educational-programs-bot.json'
  },
  {
    name: 'Recomendação de Conteúdos',
    emoji: '📚',
    fileName: 'content-recommendation.json',
    category: 'educação',
    description:
      'Este bot ajuda um aluno a encontrar o curso ou conteúdo certo na hora certa fornecer uma recomendação personalizada.',
    backgroundColor: '#010000',
  },
  {
    name: 'Tutoria Inteligente',
    emoji: '🧑‍🏫',
    category: 'educação',
    description: 'Um bot que oferece tutoria personalizada e respostas a perguntas dos alunos.',
    fileName: 'intelligent-tutoring-bot.json'
  },
  {
    name: 'Solicitar Relatórios do LMS',
    emoji: '📊',
    fileName: 'lms-reports.json',
    category: 'educação',
    description:
      'Um bot cuja função é extrair relatórios do Toolzz LMS em minutos e enviar para o email do solicitante',
  },
  {
    name: 'Quiz via chatbot',
    emoji: '🕹️',
    fileName: 'quiz.json',
    category: 'educação',
    description:
      'Esse bot funciona como um quiz para seu aluno. Teste o conhecimento de seus alunos e colete as respostas.',
  },
  {
    name: 'Criar video com Avatar IA',
    emoji: '📽️',
    fileName: 'criar-video.json',
    category: 'educação',
    description:
      'Esse bot coleta os inputs necessarios para criação de um video usando Synthesia',
  },
  {
    name: 'Criar tarefa no Pipefy',
    emoji: '📤',
    fileName: 'criar-task-pipefy.json',
    category: 'gestão-projetos',
    description:
      'Esse bot cria tarefas em um board no Pipefy, mas pode ser alterado para criar no Trello ou em outra plataforma de gestão',
  },
  {
    name: 'Criar novo projeto',
    emoji: '🆕',
    fileName: 'criar-novo-projeto.json',
    category: 'gestão-projetos',
    description:
      'Esse bot te ajuda a criar um novo projeto de forma organizada e já criar as automações necessarias para gestão ',
  },
  {
    name: 'Solicitar Status Report',
    emoji: '📋',
    fileName: 'solicitar-status-report.json',
    category: 'gestão-projetos',
    description:
      'Esse bot ajuda o cliente final a solicitar um status report do projeto, e facilita a sua vida na hora de gerar o relatorio feito pelo bot',
  },
  {
    name: 'Agendamento de Reuniões',
    emoji: '🗓️',
    fileName: 'agendamento-reunioes.json',
    category: 'produtividade',
    description:
      'Um bot cuja função é facilitar o agendamento de reuniões no Google Meet.',
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
    emoji: '🔀',
    fileName: 'product-recommendation.json',
    category: 'recomendação',
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
    name: 'Onboarding de Usuários',
    emoji: '🧑‍🚀',
    fileName: 'onboarding.json',
    category: 'product',
    description:
      'Um bot que solicita informações de novos usuários antes de começarem a usar seu produto.',
  },
  {
    name: 'Pagamento via Cartão',
    emoji: '💳',
    fileName: 'card-payment.json',
    category: 'financeiro',
    description: 'Um bot que facilita o processo de pagamento de produtos ou serviços utilizando cartão de crédito, incluindo a verificação e confirmação do pagamento.'
  },
  {
    name: 'Cobrança de Infoproduto',
    emoji: '📚',
    fileName: 'digital-product-payment.json',
    category: 'financeiro',
    description:
      'Um bot que permite vender produtos digitais (e-books, cursos, etc.) e só disponibiliza o conteúdo após a confirmação do pagamento.',
  },
  {
    name: 'Processo de Compras',
    emoji: '🛒',
    fileName: 'process-purchase.json',
    category: 'financeiro',
    description: 'Um bot que permite guiar os usuários pelo processo de compra de produtos ou serviços em sua loja online.'
  },
  {
    name: 'Solicitação de Reembolso',
    emoji: '💰',
    fileName: 'refund-request.json',
    category: 'financeiro',
    description: 'Um bot que permite aos clientes solicitar reembolsos para produtos ou serviços adquiridos e fornece assistência durante o processo de reembolso.'
  },
  {
    name: 'Envio de 2ª via de Boleto',
    emoji: '📄',
    fileName: 'send-invoice-copy.json',
    category: 'financeiro',
    description: 'Um bot que ajuda os clientes a solicitar e receber uma segunda via de boleto para pagamento de faturas pendentes.'
  },
  {
    name: 'Cobrança de Inadimplentes',
    emoji: '⚖️',
    fileName: 'debt-collection.json',
    category: 'financeiro',
    description: 'Um bot que auxilia na cobrança de clientes inadimplentes, enviando lembretes de pagamento e fornecendo opções para regularização de dívidas.'
  },  
  {
    name: 'FAQ - Perguntas Frequentes',
    emoji: '💬',
    fileName: 'faq.json',
    category: 'atendimento',
    description:
      'Um bot que responde a perguntas frequentes sobre o seu produto ou serviço.',
  },
  {
    name: 'Resolution Bot',
    emoji: '🤖',
    fileName: 'resolution.json',
    category: 'atendimento',
    description:
      'Um bot que responde a perguntas frequentes sobre o seu produto ou serviço.',
  },
  {
    name: 'Recrutamento e Seleção',
    emoji: '👥',
    fileName: 'recruitment-selection.json',
    category: 'rh',
    description: 'Um bot que auxilia o departamento de RH no processo de recrutamento e seleção de novos talentos, coletando informações dos candidatos e agendando entrevistas.'
  },
  {
    name: 'Onboarding de Colaboradores',
    emoji: '🤝',
    fileName: 'employee-onboarding.json',
    category: 'rh',
    description: 'Um bot que orienta os novos colaboradores durante o processo de onboarding, apresentando a empresa, sua cultura, políticas e procedimentos.'
  },
  {
    name: 'Avaliação de Desempenho',
    emoji: '📈',
    fileName: 'performance-evaluation.json',
    category: 'rh',
    description: 'Um bot que facilita o processo de avaliação de desempenho dos funcionários, permitindo que eles preencham formulários de avaliação e acompanhem feedbacks.'
  },
  {
    name: 'Desligamento de Funcionário',
    emoji: '🚪',
    fileName: 'employee-offboarding.json',
    category: 'rh',
    description: 'Um bot que guia os processos de desligamento de funcionários, auxiliando em tarefas como entrega de documentos e feedback de saída.'
  },
  {
    name: 'Admissão Digital',
    emoji: '📄',
    fileName: 'digital-admission.json',
    category: 'rh',
    description: 'Um bot que permite que os novos funcionários realizem a admissão digitalmente, preenchendo formulários e enviando documentos necessários online.'
  },
  {
    name: 'Abertura de Vagas',
    emoji: '📢',
    fileName: 'job-opening.json',
    category: 'rh',
    description: 'Um bot que auxilia no processo de abertura de vagas, coletando informações sobre os cargos disponíveis e orientando os funcionários sobre como se candidatar.'
  },  
  {
    name: 'ChatGPT Básico',
    emoji: '🤖',
    fileName: 'basic-chat-gpt.json',
    category: 'populares',
    description:
      'Um bot que usa o modelo ChatGPT para gerar respostas com base na entrada do usuário.',
  },
  {
    name: 'ChatGPT de Áudio',
    emoji: '🤖',
    fileName: 'audio-chat-gpt.json',
    category: 'populares',
    description:
      'Um bot de IA de áudio que usa o bloco OpenAI para gerar respostas com base na entrada do usuário.',
    isNew: true,
  },
  {
    name: 'Personas ChatGPT',
    emoji: '🎭',
    fileName: 'chat-gpt-personas.json',
    category: 'populares',
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
    category: 'vendas',
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
    name: 'Gestão de NDA',
    emoji: '🔒',
    fileName: 'nda-management.json',
    category: 'jurídico',
    description: 'Um bot que auxilia na gestão de Acordos de Não Divulgação (NDA), coletando informações sobre os acordos e fornecendo lembretes para renovação.'
  },
  {
    name: 'Análise de Contratos',
    emoji: '📜',
    fileName: 'contract-analysis.json',
    category: 'jurídico',
    description: 'Um bot que auxilia na análise de contratos, destacando termos importantes e identificando possíveis riscos.'
  },
  {
    name: 'Criação de Contratos',
    emoji: '🖋️',
    fileName: 'contract-creation.json',
    category: 'jurídico',
    description: 'Um bot que auxilia na criação de contratos, coletando informações sobre os termos e gerando documentos personalizados.'
  }, 
  {
    name: 'Solicitações para Jurídico',
    emoji: '📝',
    fileName: 'legal-requests.json',
    category: 'jurídico',
    description: 'Um bot que permite que os funcionários façam solicitações ao departamento jurídico, como pedidos de pareceres e consultas.'
  },
  {
    name: 'Processo de LGPD',
    emoji: '🔐',
    fileName: 'lgpd-process.json',
    category: 'jurídico',
    description: 'Um bot que auxilia no cumprimento dos requisitos da Lei Geral de Proteção de Dados (LGPD), orientando sobre coleta e tratamento de dados pessoais.'
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
    emoji: '📋',
    fileName: 'project-management.json',
    category: 'gestão-projetos',
    description:
      'Um bot que auxilia no gerenciamento de projetos de TI, organizando tarefas, prazos e recursos, facilitando a comunicação entre as equipes.',
  },
  {
    name: 'Assistente de Vendas',
    emoji: '💼',
    fileName: 'sales-assistant.json',
    category: 'vendas',
    description:
      'Um bot que ajuda equipes de vendas a acompanhar leads, agendar reuniões e gerenciar funil de vendas, aumentando a eficiência do processo comercial.',
  },
  {
    name: 'Bot SDR',
    emoji: '📋',
    fileName: 'sdr.json',
    category: 'vendas',
    description:
      'Um bot que faz o processo de Sales Development',
  },
  {
    name: 'Bot Hunter',
    emoji: '🎯',
    fileName: 'sdr.json',
    category: 'vendas',
    description:
      'Um bot que faz o processo de Sales Development',
  },
  {
    name: 'Assistente Jurídico',
    emoji: '📃',
    category: 'jurídico',
    description: 'Um assistente que ajuda na criação e revisão de documentos legais, economizando tempo e garantindo precisão.',
    fileName: 'legal-document-assistant.json'
  },
  {
    name: 'Tendências de Mercado',
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
    category: 'atendimento',
    description:
      'Um bot projetado para oferecer suporte técnico, resolvendo problemas comuns e encaminhando casos mais complexos para especialistas técnicos.',
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
    category: 'vendas',
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
    name: 'Estratégia de Branding',
    emoji: '🌟',
    category: 'marketing',
    description: 'Um bot que ajuda a desenvolver estratégias de branding para fortalecer a identidade da marca.',
    fileName: 'branding-strategy-bot.json'
  },
  {
    name: 'Estratégias de Retenção',
    emoji: '🔄',
    category: 'customer-success',
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
    category: 'customer-success',
    description: 'Um bot que analisa a satisfação do cliente por meio de pesquisas e feedbacks.',
    fileName: 'customer-satisfaction-analysis-bot.json'
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
    emoji: '📊',
    category: 'financeiro',
    description: 'Um bot que gera relatórios financeiros detalhados com base em informações financeiras.',
    fileName: 'financial-reports-bot.json'
  },
  {
    name: 'Assistente de Vendas Online',
    emoji: '💻',
    category: 'vendas',
    description: 'Um assistente virtual que ajuda a vender produtos digitais, fornecendo informações e suporte aos clientes durante o processo de compra.',
    fileName: 'digital-product-sales-assistant.json'
  },
  {
    name: 'Gestão Funil de Vendas',
    emoji: '📊',
    category: 'vendas',
    description: 'Um assistente de vendas que ajuda a gerenciar e otimizar seu funil de vendas, identificando oportunidades e acompanhando leads.',
    fileName: 'sales-funnel-management.json'
  },
  {
    name: 'Avaliação de Necessidades',
    emoji: '📋',
    category: 'vendas',
    description: 'Um assistente que realiza avaliações detalhadas das necessidades dos clientes, recomendando produtos e serviços personalizados.',
    fileName: 'customer-needs-assessment.json'
  },
  {
    name: 'Acompanhamento do Cliente',
    emoji: '👥',
    category: 'customer-success',
    description: 'Um assistente de acompanhamento que garante que os clientes alcancem seus objetivos e estejam satisfeitos com seus produtos ou serviços.',
    fileName: 'customer-success-follow-up.json'
  },
  {
    name: 'Análise de Experiência do Cliente',
    emoji: '📈',
    category: 'customer-experience',
    description: 'Um assistente que analisa a experiência do cliente em vários pontos de contato e fornece insights para melhorias.',
    fileName: 'customer-experience-analysis.json'
  },
  {
    name: 'Mapeamento de Jornada',
    emoji: '🗺️',
    category: 'customer-experience',
    description: 'Um assistente que mapeia a jornada do cliente e identifica oportunidades para aprimorar a experiência em cada etapa.',
    fileName: 'customer-journey-mapping.json'
  },
  {
    name: 'Coleta de Feedback',
    emoji: '🗣️',
    category: 'customer-experience',
    description: 'Um assistente que coleta feedback contínuo dos clientes por meio de pesquisas e avaliações para melhorias constantes.',
    fileName: 'customer-feedback-collection.json'
  },
]

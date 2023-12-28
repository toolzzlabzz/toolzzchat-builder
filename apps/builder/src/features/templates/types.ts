export type TemplateProps = {
  name: string
  emoji: string
  fileName: string
  description: string
  category?: 'marketing' | 'product' | 'produto' | 'financeiro' | 'rh' | 'tecnologia' | 'negócios' | 'educação' | 'atendimento' | 'vendas' | 'customer-success' | 'customer-experience' | 'populares' | 'jurídico' | 'jurídico' | 'relatórios' | 'faq' | 'recomendação' | 'outros' | 'gestão-projetos' | 'produtividade'
  isComingSoon?: boolean
  isNew?: boolean
  backgroundColor?: string
}

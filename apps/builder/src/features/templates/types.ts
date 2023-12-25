export type TemplateProps = {
  name: string
  emoji: string
  fileName: string
  description: string
  category?: 'marketing' | 'product' | 'produto' | 'financeiro' | 'rh' | 'tecnologia' | 'educação' | 'atendimento' | 'vendas' | 'customer sucess' | 'customer experience' | 'jurídico' | 'jurídico' | 'relatórios' | 'faq' | 'recomendação'
  isComingSoon?: boolean
  isNew?: boolean
  backgroundColor?: string
}

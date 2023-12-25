export type TemplateProps = {
  name: string
  emoji: string
  fileName: string
  description: string
  category?: 'marketing' | 'product' | 'produto' | 'financeiro' | 'rh' | 'tecnologia'
  isComingSoon?: boolean
  isNew?: boolean
  backgroundColor?: string
}

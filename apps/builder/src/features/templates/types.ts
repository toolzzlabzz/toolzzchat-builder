export type TemplateProps = {
  name: string
  emoji: string
  fileName: string
  description: string
  category?: 'marketing' | 'produto'
  isComingSoon?: boolean
  isNew?: boolean
  backgroundColor?: string
}

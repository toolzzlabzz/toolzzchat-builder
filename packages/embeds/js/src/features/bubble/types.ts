export type BubbleParams = {
  theme?: BubbleTheme
  previewMessage?: PreviewMessageParams
  autoShowDelay?: number
}

export type BubbleTheme = {
  chatWindow?: ChatWindowTheme
  button?: ButtonTheme
  previewMessage?: PreviewMessageTheme
  placement?: 'esquerda' | 'direita'
}

export type ChatWindowTheme = {
  backgroundColor?: string
  maxWidth?: string
  maxHeight?: string
}

export type ButtonTheme = {
  size?: 'medium' | 'large'
  backgroundColor?: string
  iconColor?: string
  customIconSrc?: string
  customCloseIconSrc?: string
}

export type PreviewMessageParams = {
  avatarUrl?: string
  message: string
  autoShowDelay?: number
}

export type PreviewMessageTheme = {
  backgroundColor?: string
  textColor?: string
  closeButtonBackgroundColor?: string
  closeButtonIconColor?: string
}

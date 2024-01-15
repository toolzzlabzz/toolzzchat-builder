export const defaultSettings = {
  general: {
    isInputPrefillEnabled: false,
    isHideQueryParamsEnabled: true,
    isNewResultOnRefreshEnabled: true,
    rememberUser: {
      isEnabled: false,
      storage: 'session',
    },
    isBrandingEnabled: false,
    isTypingEmulationEnabled: true,
  },
  typingEmulation: { enabled: true, speed: 300, maxDelay: 1.5 },
  metadata: {
    description:
      'Crie formulários de conversação bonitos e incorpore-os diretamente em suas aplicações sem escrever uma linha de código. Triplique sua taxa de resposta e colete respostas que têm mais valor em comparação com um formulário tradicional.',
    favIconUrl: (viewerBaseUrl: string) => viewerBaseUrl + '/favicon.png',
    imageUrl: (viewerBaseUrl: string) => viewerBaseUrl + '/site-preview.png',
  },
} as const

export const rememberUserStorages = ['session', 'local'] as const

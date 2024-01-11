import { DevTools, Tolgee } from '@tolgee/react'
import { FormatIcu } from '@tolgee/format-icu'
<<<<<<< HEAD
import en from '../../public/locales/en.json'
import fr from '../../public/locales/fr.json'
import de from '../../public/locales/de.json'
import pt from '../../public/locales/pt.json'
import ptBR from '../../public/locales/pt-BR.json'
import es from '../../public/locales/es.json'
import ro from '../../public/locales/ro.json'
=======
import en from '../i18n/en.json'
import fr from '../i18n/fr.json'
import de from '../i18n/de.json'
import pt from '../i18n/pt.json'
import ptBR from '../i18n/pt-BR.json'
import es from '../i18n/es.json'
import ro from '../i18n/ro.json'
>>>>>>> upstream/main
import { env } from '@typebot.io/env'

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatIcu())
  .init({
    apiKey: env.NEXT_PUBLIC_TOLGEE_API_KEY,
    apiUrl: env.NEXT_PUBLIC_TOLGEE_API_URL,
    defaultLanguage: 'en',
    availableLanguages: ['en', 'fr', 'de', 'pt', 'pt-BR', 'es', 'ro'],
    fallbackLanguage: 'en',
    staticData: {
      en,
      fr,
      de,
      pt,
      'pt-BR': ptBR,
      es,
      ro,
    },
  })

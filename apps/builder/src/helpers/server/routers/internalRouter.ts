import { getAppVersionProcedure } from '@/features/dashboard/api/getAppVersionProcedure'
import { router } from '../trpc'
import { generateUploadUrl } from '@/features/upload/api/generateUploadUrl'
import { openAIRouter } from '@/features/blocks/integrations/openai/api/router'
<<<<<<< HEAD
import { whatsAppRouter } from '@/features/whatsapp/router'
import { zemanticAiRouter } from '@/features/blocks/integrations/zemanticAi/api/router'
=======
import { internalWhatsAppRouter } from '@/features/whatsapp/router'
import { zemanticAiRouter } from '@/features/blocks/integrations/zemanticAi/api/router'
import { forgeRouter } from '@/features/forge/api/router'
import { googleSheetsRouter } from '@/features/blocks/integrations/googleSheets/api/router'
>>>>>>> upstream/main

export const internalRouter = router({
  getAppVersionProcedure,
  generateUploadUrl,
<<<<<<< HEAD
  whatsApp: whatsAppRouter,
  openAI: openAIRouter,
  zemanticAI: zemanticAiRouter,
=======
  whatsAppInternal: internalWhatsAppRouter,
  openAI: openAIRouter,
  zemanticAI: zemanticAiRouter,
  forge: forgeRouter,
  sheets: googleSheetsRouter,
>>>>>>> upstream/main
})

export type InternalRouter = typeof internalRouter

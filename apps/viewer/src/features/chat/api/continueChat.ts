import { publicProcedure } from '@/helpers/server/trpc'
import { continueChatResponseSchema } from '@typebot.io/schemas/features/chat/schema'
import { TRPCError } from '@trpc/server'
import { getSession } from '@typebot.io/bot-engine/queries/getSession'
import { saveStateToDatabase } from '@typebot.io/bot-engine/saveStateToDatabase'
import { continueBotFlow } from '@typebot.io/bot-engine/continueBotFlow'
import { parseDynamicTheme } from '@typebot.io/bot-engine/parseDynamicTheme'
import { isDefined } from '@typebot.io/lib/utils'
import { z } from 'zod'

export const continueChat = publicProcedure
  .meta({
    openapi: {
      method: 'POST',
      path: '/v1/sessions/{sessionId}/continueChat',
      summary: 'Continue chat',
      description:
        'Para iniciar um bate-papo, não forneça um `sessionId` nem uma `message`.\n\nContinue a conversa fornecendo o `sessionId` e a `message` que devem responder à pergunta anterior.\n\nDefina o `isPreview` opção para `true` para conversar com a versão não publicada do bot.',
    },
  })
  .input(
    z.object({
      message: z.string().optional(),
      sessionId: z.string(),
    })
  )
  .output(continueChatResponseSchema)
  .mutation(async ({ input: { sessionId, message } }) => {
    const session = await getSession(sessionId)

    if (!session) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Sessão não encontrada.',
      })
    }

    const isSessionExpired =
      session &&
      isDefined(session.state.expiryTimeout) &&
      session.updatedAt.getTime() + session.state.expiryTimeout < Date.now()

    if (isSessionExpired)
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Sessão expirada. Você precisa iniciar uma nova sessão.',
      })

    const {
      messages,
      input,
      clientSideActions,
      newSessionState,
      logs,
      lastMessageNewFormat,
      visitedEdges,
    } = await continueBotFlow(message, {
      version: 2,
      state: session.state,
      startTime: Date.now(),
    })

    if (newSessionState)
      await saveStateToDatabase({
        session: {
          id: session.id,
          state: newSessionState,
        },
        input,
        logs,
        clientSideActions,
        visitedEdges,
      })

    return {
      messages,
      input,
      clientSideActions,
      dynamicTheme: parseDynamicTheme(newSessionState),
      logs,
      lastMessageNewFormat,
    }
  })

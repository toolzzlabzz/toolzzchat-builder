import prisma from '@typebot.io/lib/prisma'
import { authenticatedProcedure } from '@/helpers/server/trpc'
import { logSchema } from '@typebot.io/schemas'
import { z } from 'zod'
import { isReadTypebotForbidden } from '@/features/typebot/helpers/isReadTypebotForbidden'

export const getResultLogs = authenticatedProcedure
  .meta({
    openapi: {
      method: 'GET',
      path: '/v1/toolzz/{typebotId}/results/{resultId}/logs',
      protect: true,
      summary: 'List result logs',
      tags: ['Results'],
    },
  })
  .input(
    z.object({
      typebotId: z.string(),
      resultId: z.string(),
    })
  )
  .output(z.object({ logs: z.array(logSchema) }))
  .query(async ({ input: { typebotId, resultId }, ctx: { user } }) => {
    const typebot = await prisma.typebot.findUnique({
      where: {
        id: typebotId,
      },
      select: {
        id: true,
        groups: true,
        workspace: {
          select: {
            isSuspended: true,
            isPastDue: true,
            members: {
              select: {
                userId: true,
              },
            },
          },
        },
        collaborators: {
          select: {
            userId: true,
            type: true,
          },
        },
      },
    })
    if (!typebot || (await isReadTypebotForbidden(typebot, user)))
      throw new Error('Typebot not found')
    const logs = await prisma.log.findMany({
      where: {
        resultId,
      },
    })

    return { logs }
  })

import prisma from '@typebot.io/lib/prisma'
import { authenticatedProcedure } from '@/helpers/server/trpc'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { collaboratorSchema } from '@typebot.io/schemas/features/collaborators'
import { isReadTypebotForbidden } from '@/features/typebot/helpers/isReadTypebotForbidden'

export const getCollaborators = authenticatedProcedure
  .meta({
    openapi: {
      method: 'GET',
      path: '/v1/toolzz/{typebotId}/collaborators',
      protect: true,
      summary: 'Get collaborators',
      tags: ['Collaborators'],
    },
  })
  .input(
    z.object({
      typebotId: z.string(),
    })
  )
  .output(
    z.object({
      collaborators: z.array(collaboratorSchema),
    })
  )
  .query(async ({ input: { typebotId }, ctx: { user } }) => {
    const existingTypebot = await prisma.typebot.findFirst({
      where: {
        id: typebotId,
      },
      include: {
        collaborators: true,
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
      },
    })
    if (
      !existingTypebot?.id ||
      (await isReadTypebotForbidden(existingTypebot, user))
    )
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Typebot not found' })

    return {
      collaborators: existingTypebot.collaborators,
    }
  })

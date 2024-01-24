import { CollaboratorsOnTypebots } from '@typebot.io/prisma'
import { sendRequest } from '@typebot.io/lib'

export const updateCollaboratorQuery = (
  typebotId: string,
  userId: string,
  collaborator: Omit<CollaboratorsOnTypebots, 'createdAt' | 'updatedAt'>
) =>
  sendRequest({
    method: 'PATCH',
    url: `/api/toolzz/${typebotId}/collaborators/${userId}`,
    body: collaborator,
  })

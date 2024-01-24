import { Result } from '@typebot.io/schemas'
import { sendRequest } from '@typebot.io/lib'

export const createResultQuery = async (typebotId: string) => {
  return sendRequest<{ result: Result; hasReachedLimit: boolean }>({
    url: `/api/toolzz/${typebotId}/results`,
    method: 'POST',
  })
}

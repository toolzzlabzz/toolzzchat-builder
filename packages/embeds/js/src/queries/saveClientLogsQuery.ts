import { guessApiHost } from '@/utils/guessApiHost'
import type { ChatLog } from '@typebot.io/schemas'
<<<<<<< HEAD
import { isNotEmpty, sendRequest } from '@typebot.io/lib'

export const saveClientLogsQuery = ({
=======
import { isNotEmpty } from '@typebot.io/lib'
import ky from 'ky'

export const saveClientLogsQuery = async ({
>>>>>>> upstream/main
  apiHost,
  sessionId,
  clientLogs,
}: {
  apiHost?: string
  sessionId: string
  clientLogs: ChatLog[]
<<<<<<< HEAD
}) =>
  sendRequest({
    method: 'POST',
    url: `${
      isNotEmpty(apiHost) ? apiHost : guessApiHost()
    }/api/v1/sessions/${sessionId}/clientLogs`,
    body: {
      clientLogs,
    },
  })
=======
}) => {
  try {
    await ky.post(
      `${
        isNotEmpty(apiHost) ? apiHost : guessApiHost()
      }/api/v1/sessions/${sessionId}/clientLogs`,
      {
        json: {
          clientLogs,
        },
      }
    )
  } catch (e) {
    console.log(e)
  }
}
>>>>>>> upstream/main

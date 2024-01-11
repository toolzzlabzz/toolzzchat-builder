import { guessApiHost } from '@/utils/guessApiHost'
<<<<<<< HEAD
import { isNotEmpty, sendRequest } from '@typebot.io/lib'
import { ContinueChatResponse } from '@typebot.io/schemas'

export const continueChatQuery = ({
=======
import { isNotEmpty } from '@typebot.io/lib'
import { ContinueChatResponse } from '@typebot.io/schemas'
import ky from 'ky'

export const continueChatQuery = async ({
>>>>>>> upstream/main
  apiHost,
  message,
  sessionId,
}: {
  apiHost?: string
  message: string | undefined
  sessionId: string
<<<<<<< HEAD
}) =>
  sendRequest<ContinueChatResponse>({
    method: 'POST',
    url: `${
      isNotEmpty(apiHost) ? apiHost : guessApiHost()
    }/api/v1/sessions/${sessionId}/continueChat`,
    body: {
      message,
    },
  })
=======
}) => {
  try {
    const data = await ky
      .post(
        `${
          isNotEmpty(apiHost) ? apiHost : guessApiHost()
        }/api/v1/sessions/${sessionId}/continueChat`,
        {
          json: {
            message,
          },
          timeout: false,
        }
      )
      .json<ContinueChatResponse>()

    return { data }
  } catch (error) {
    return { error }
  }
}
>>>>>>> upstream/main

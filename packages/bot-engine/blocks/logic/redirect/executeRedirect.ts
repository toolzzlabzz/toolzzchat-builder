import { RedirectBlock, SessionState } from '@typebot.io/schemas'
import { sanitizeUrl } from '@typebot.io/lib'
import { ExecuteLogicResponse } from '../../../types'
<<<<<<< HEAD
import { parseVariables } from '../../../variables/parseVariables'
=======
import { parseVariables } from '@typebot.io/variables/parseVariables'
>>>>>>> upstream/main

export const executeRedirect = (
  state: SessionState,
  block: RedirectBlock
): ExecuteLogicResponse => {
  const { variables } = state.typebotsQueue[0].typebot
  if (!block.options?.url) return { outgoingEdgeId: block.outgoingEdgeId }
  const formattedUrl = sanitizeUrl(parseVariables(variables)(block.options.url))
  return {
    clientSideActions: [
      {
        type: 'redirect',
        redirect: { url: formattedUrl, isNewTab: block.options.isNewTab },
      },
    ],
    outgoingEdgeId: block.outgoingEdgeId,
  }
}

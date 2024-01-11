import { PixelBlock, SessionState } from '@typebot.io/schemas'
import { ExecuteIntegrationResponse } from '../../../types'
<<<<<<< HEAD
import { deepParseVariables } from '../../../variables/deepParseVariables'
=======
import { deepParseVariables } from '@typebot.io/variables/deepParseVariables'
>>>>>>> upstream/main

export const executePixelBlock = (
  state: SessionState,
  block: PixelBlock
): ExecuteIntegrationResponse => {
  const { typebot, resultId } = state.typebotsQueue[0]
  if (
    !resultId ||
    !block.options?.pixelId ||
    !block.options.eventType ||
    state.whatsApp
  )
    return { outgoingEdgeId: block.outgoingEdgeId }
  const pixel = deepParseVariables(typebot.variables, {
    guessCorrectTypes: true,
    removeEmptyStrings: true,
  })(block.options)
  return {
    outgoingEdgeId: block.outgoingEdgeId,
    clientSideActions: [
      {
        type: 'pixel',
        pixel: {
          ...pixel,
          pixelId: block.options.pixelId,
        },
      },
    ],
  }
}

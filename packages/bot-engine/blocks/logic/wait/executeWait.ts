import { ExecuteLogicResponse } from '../../../types'
import { SessionState, WaitBlock } from '@typebot.io/schemas'
<<<<<<< HEAD
import { parseVariables } from '../../../variables/parseVariables'
=======
import { parseVariables } from '@typebot.io/variables/parseVariables'
>>>>>>> upstream/main
import { isNotDefined } from '@typebot.io/lib'

export const executeWait = (
  state: SessionState,
  block: WaitBlock
): ExecuteLogicResponse => {
  const { variables } = state.typebotsQueue[0].typebot
  if (!block.options?.secondsToWaitFor)
    return { outgoingEdgeId: block.outgoingEdgeId }

  const parsedSecondsToWaitFor = safeParseInt(
    parseVariables(variables)(block.options.secondsToWaitFor)
  )

  if (isNotDefined(parsedSecondsToWaitFor))
    return { outgoingEdgeId: block.outgoingEdgeId }

  return {
    outgoingEdgeId: block.outgoingEdgeId,
    clientSideActions:
      parsedSecondsToWaitFor || block.options?.shouldPause
        ? [
            {
<<<<<<< HEAD
=======
              type: 'wait',
>>>>>>> upstream/main
              wait: { secondsToWaitFor: parsedSecondsToWaitFor ?? 0 },
              expectsDedicatedReply: block.options.shouldPause,
            },
          ]
        : undefined,
  }
}

const safeParseInt = (value: string) => {
  const parsedValue = parseInt(value)
  return isNaN(parsedValue) ? undefined : parsedValue
}

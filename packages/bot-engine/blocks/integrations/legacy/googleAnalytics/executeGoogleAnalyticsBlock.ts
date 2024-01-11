<<<<<<<< HEAD:packages/bot-engine/blocks/integrations/googleAnalytics/executeGoogleAnalyticsBlock.ts
import { ExecuteIntegrationResponse } from '../../../types'
import { GoogleAnalyticsBlock, SessionState } from '@typebot.io/schemas'
import { deepParseVariables } from '../../../variables/deepParseVariables'
========
import { ExecuteIntegrationResponse } from '../../../../types'
import { GoogleAnalyticsBlock, SessionState } from '@typebot.io/schemas'
import { deepParseVariables } from '@typebot.io/variables/deepParseVariables'
>>>>>>>> upstream/main:packages/bot-engine/blocks/integrations/legacy/googleAnalytics/executeGoogleAnalyticsBlock.ts

export const executeGoogleAnalyticsBlock = (
  state: SessionState,
  block: GoogleAnalyticsBlock
): ExecuteIntegrationResponse => {
  const { typebot, resultId } = state.typebotsQueue[0]
  if (!resultId || state.whatsApp || !block.options)
    return { outgoingEdgeId: block.outgoingEdgeId }
  const googleAnalytics = deepParseVariables(typebot.variables, {
    guessCorrectTypes: true,
    removeEmptyStrings: true,
  })(block.options)
  return {
    outgoingEdgeId: block.outgoingEdgeId,
    clientSideActions: [
      {
        type: 'googleAnalytics',
        googleAnalytics,
      },
    ],
  }
}

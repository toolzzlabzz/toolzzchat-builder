import { SessionState, ContinueChatResponse } from '@typebot.io/schemas'
<<<<<<< HEAD
import { parseVariables } from './variables/parseVariables'
=======
import { parseVariables } from '@typebot.io/variables/parseVariables'
>>>>>>> upstream/main

export const parseDynamicTheme = (
  state: SessionState | undefined
): ContinueChatResponse['dynamicTheme'] => {
  if (!state?.dynamicTheme) return
  return {
    hostAvatarUrl: parseVariables(state?.typebotsQueue[0].typebot.variables)(
      state.dynamicTheme.hostAvatarUrl
    ),
    guestAvatarUrl: parseVariables(state?.typebotsQueue[0].typebot.variables)(
      state.dynamicTheme.guestAvatarUrl
    ),
  }
}

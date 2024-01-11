<<<<<<< HEAD
import { ContinueChatResponse, SessionState } from '@typebot.io/schemas'
=======
import {
  ContinueChatResponse,
  CustomEmbedBubble,
  SessionState,
} from '@typebot.io/schemas'
>>>>>>> upstream/main

export type EdgeId = string

export type ExecuteLogicResponse = {
  outgoingEdgeId: EdgeId | undefined
  newSessionState?: SessionState
} & Pick<ContinueChatResponse, 'clientSideActions' | 'logs'>

export type ExecuteIntegrationResponse = {
  outgoingEdgeId: EdgeId | undefined
  newSessionState?: SessionState
  startTimeShouldBeUpdated?: boolean
<<<<<<< HEAD
=======
  customEmbedBubble?: CustomEmbedBubble
>>>>>>> upstream/main
} & Pick<ContinueChatResponse, 'clientSideActions' | 'logs'>

export type ParsedReply =
  | { status: 'success'; reply: string }
  | { status: 'fail' }
  | { status: 'skip' }

import { appRouter } from '@/helpers/server/appRouter'
import * as Sentry from '@sentry/nextjs'
<<<<<<< HEAD
import { createOpenApiNextHandler } from 'trpc-openapi'
=======
import { createOpenApiNextHandler } from '@lilyrose2798/trpc-openapi'
>>>>>>> upstream/main
import cors from 'nextjs-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { createContext } from '@/helpers/server/context'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res)

  return createOpenApiNextHandler({
    router: appRouter,
    createContext,
    onError({ error }) {
      if (error.code === 'INTERNAL_SERVER_ERROR') {
        Sentry.captureException(error)
        console.error('Something went wrong', error)
      }
    },
  })(req, res)
}

export default handler

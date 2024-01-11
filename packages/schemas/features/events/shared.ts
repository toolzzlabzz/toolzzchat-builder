<<<<<<< HEAD
import { z } from 'zod'
=======
import { z } from '../../zod'
>>>>>>> upstream/main

export const eventBaseSchema = z.object({
  id: z.string(),
  outgoingEdgeId: z.string().optional(),
  graphCoordinates: z.object({
    x: z.number(),
    y: z.number(),
  }),
})

<<<<<<< HEAD
import { z } from 'zod'
=======
import { z } from '../../../../zod'
>>>>>>> upstream/main
import { blockBaseSchema } from '../../shared'
import { LogicBlockType } from '../constants'

export const jumpOptionsSchema = z.object({
  groupId: z.string().optional(),
  blockId: z.string().optional(),
})

export const jumpBlockSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([LogicBlockType.JUMP]),
    options: jumpOptionsSchema.optional(),
  })
)

export type JumpBlock = z.infer<typeof jumpBlockSchema>

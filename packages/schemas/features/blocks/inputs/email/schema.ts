<<<<<<< HEAD
import { z } from 'zod'
=======
import { z } from '../../../../zod'
>>>>>>> upstream/main
import { optionBaseSchema, blockBaseSchema } from '../../shared'
import { InputBlockType } from '../constants'
import { textInputOptionsBaseSchema } from '../text'

export const emailInputOptionsSchema = optionBaseSchema
  .merge(textInputOptionsBaseSchema)
  .merge(
    z.object({
      retryMessageContent: z.string().optional(),
    })
  )

<<<<<<< HEAD
export const emailInputSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([InputBlockType.EMAIL]),
    options: emailInputOptionsSchema.optional(),
  })
)
=======
export const emailInputSchema = blockBaseSchema
  .merge(
    z.object({
      type: z.enum([InputBlockType.EMAIL]),
      options: emailInputOptionsSchema.optional(),
    })
  )
  .openapi({
    title: 'Email',
    ref: 'email',
  })
>>>>>>> upstream/main

export type EmailInputBlock = z.infer<typeof emailInputSchema>
export type EmailInputOptions = z.infer<typeof emailInputOptionsSchema>

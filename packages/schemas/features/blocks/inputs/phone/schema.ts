<<<<<<< HEAD
import { z } from 'zod'
=======
import { z } from '../../../../zod'
>>>>>>> upstream/main
import { optionBaseSchema, blockBaseSchema } from '../../shared'
import { InputBlockType } from '../constants'
import { textInputOptionsBaseSchema } from '../text'

export const phoneNumberInputOptionsSchema = optionBaseSchema
  .merge(textInputOptionsBaseSchema)
  .merge(
    z.object({
      retryMessageContent: z.string().optional(),
      defaultCountryCode: z.string().optional(),
    })
  )

<<<<<<< HEAD
export const phoneNumberInputBlockSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([InputBlockType.PHONE]),
    options: phoneNumberInputOptionsSchema.optional(),
  })
)
=======
export const phoneNumberInputBlockSchema = blockBaseSchema
  .merge(
    z.object({
      type: z.enum([InputBlockType.PHONE]),
      options: phoneNumberInputOptionsSchema.optional(),
    })
  )
  .openapi({
    title: 'Phone number',
    ref: 'phoneNumberInput',
  })
>>>>>>> upstream/main

export type PhoneNumberInputBlock = z.infer<typeof phoneNumberInputBlockSchema>

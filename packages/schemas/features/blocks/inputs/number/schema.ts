<<<<<<< HEAD
import { z } from 'zod'
=======
import { z } from '../../../../zod'
>>>>>>> upstream/main
import { variableStringSchema } from '../../../utils'
import { optionBaseSchema, blockBaseSchema } from '../../shared'
import { InputBlockType } from '../constants'
import { textInputOptionsBaseSchema } from '../text'

export const numberInputOptionsSchema = optionBaseSchema
  .merge(textInputOptionsBaseSchema)
  .merge(
    z.object({
      min: z.number().or(variableStringSchema).optional(),
      max: z.number().or(variableStringSchema).optional(),
      step: z.number().or(variableStringSchema).optional(),
    })
  )

<<<<<<< HEAD
export const numberInputSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([InputBlockType.NUMBER]),
    options: numberInputOptionsSchema.optional(),
  })
)
=======
export const numberInputSchema = blockBaseSchema
  .merge(
    z.object({
      type: z.enum([InputBlockType.NUMBER]),
      options: numberInputOptionsSchema.optional(),
    })
  )
  .openapi({
    title: 'Number',
    ref: 'numberInput',
  })
>>>>>>> upstream/main

export type NumberInputBlock = z.infer<typeof numberInputSchema>

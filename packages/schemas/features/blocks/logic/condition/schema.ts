<<<<<<< HEAD
import { z } from 'zod'
=======
import { z } from '../../../../zod'
>>>>>>> upstream/main
import { blockBaseSchema } from '../../shared'
import { LogicBlockType } from '../constants'
import { ComparisonOperators, LogicalOperator } from './constants'
import { itemBaseSchemas } from '../../../items/shared'

const comparisonSchema = z.object({
  id: z.string(),
  variableId: z.string().optional(),
  comparisonOperator: z.nativeEnum(ComparisonOperators).optional(),
  value: z.string().optional(),
})

export const conditionSchema = z.object({
  logicalOperator: z.nativeEnum(LogicalOperator).optional(),
  comparisons: z.array(comparisonSchema).optional(),
})

export const conditionItemSchemas = {
  v5: itemBaseSchemas.v5.merge(
    z.object({
      content: conditionSchema.optional(),
    })
  ),
  v6: itemBaseSchemas.v6.merge(
    z.object({
      content: conditionSchema.optional(),
    })
  ),
}

export const conditionItemSchema = z.union([
  conditionItemSchemas.v5,
  conditionItemSchemas.v6,
])

export const conditionBlockSchemas = {
  v5: blockBaseSchema.merge(
    z.object({
      type: z.enum([LogicBlockType.CONDITION]),
      items: z.array(conditionItemSchemas.v5),
<<<<<<< HEAD
      options: z.undefined(),
=======
      options: z.undefined().openapi({
        type: 'object',
      }),
>>>>>>> upstream/main
    })
  ),
  v6: blockBaseSchema.merge(
    z.object({
      type: z.enum([LogicBlockType.CONDITION]),
      items: z.array(conditionItemSchemas.v6),
<<<<<<< HEAD
      options: z.undefined(),
=======
      options: z.undefined().openapi({
        type: 'object',
      }),
>>>>>>> upstream/main
    })
  ),
}

export const conditionBlockSchema = z.union([
  conditionBlockSchemas.v5,
  conditionBlockSchemas.v6,
])

export type ConditionItem = z.infer<typeof conditionItemSchema>
export type Comparison = z.infer<typeof comparisonSchema>
export type ConditionBlock = z.infer<typeof conditionBlockSchema>
export type Condition = z.infer<typeof conditionSchema>

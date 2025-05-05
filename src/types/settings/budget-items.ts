import { z } from 'zod'

const ParentResponseSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  name: z.string(),
})

export const BudgetItemResponseSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  name: z.string(),
  level: z.number(),
  accumulate: z.boolean(),
  parent: ParentResponseSchema.nullable(),
})

export type BudgetItemResponseType = z.infer<typeof BudgetItemResponseSchema>

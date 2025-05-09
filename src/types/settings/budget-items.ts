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

export const BudgetItemEditSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  name: z.string(),
  level: z.number(),
  accumulate: z.boolean(),
  parent_id: z.string().uuid().optional(),
})

export type BudgetItemEditType = z.infer<typeof BudgetItemEditSchema>

export const BudgetItemCreateSchema = z.object({
  code: z.string(),
  name: z.string(),
  accumulate: z.boolean(),
  parent_id: z.string().uuid().optional(),
})

export type BudgetItemCreateType = z.infer<typeof BudgetItemCreateSchema>

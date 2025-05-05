import { z } from 'zod'
import { CategoriesResponseSchema } from './categories'

export const MaterialsResponseSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  name: z.string(),
  unit: z.string(),
  category: CategoriesResponseSchema,
})

export type MaterialsResponseType = z.infer<typeof MaterialsResponseSchema>

export const MaterialsEditSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  name: z.string(),
  unit: z.string(),
  category: z.string().uuid(),
})

export type MaterialsEditType = z.infer<typeof MaterialsEditSchema>

export const MaterialsCreateSchema = z.object({
  code: z.string(),
  name: z.string(),
  unit: z.string(),
  category: z.string().uuid(),
})

export type MaterialsCreateType = z.infer<typeof MaterialsCreateSchema>

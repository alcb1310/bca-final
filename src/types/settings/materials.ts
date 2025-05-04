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

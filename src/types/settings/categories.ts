import { z } from 'zod'

export const CategoriesResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
})

export type CategoriesResponseType = z.infer<typeof CategoriesResponseSchema>

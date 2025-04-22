import { z } from 'zod'

export const ProjectResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  is_active: z.boolean(),
  gross_area: z.number(),
  net_area: z.number(),
})

export type ProjectResponseType = z.infer<typeof ProjectResponseSchema>

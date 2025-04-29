import { z } from 'zod'

export const ProjectResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  is_active: z.boolean(),
  gross_area: z.coerce.number({ message: 'Ingrese un numero valido' }).min(0, {
    message: 'Ingrese un numero valido',
  }),
  net_area: z.coerce.number({ message: 'Ingrese un numero valido' }).min(0, {
    message: 'Ingrese un numero valido',
  }),
})

export type ProjectResponseType = z.infer<typeof ProjectResponseSchema>

export const ProjectCreateSchema = z.object({
  name: z.string().min(1, { message: 'Ingrese un nombre valido' }),
  is_active: z.boolean(),
  gross_area: z.coerce.number({ message: 'Ingrese un numero valido' }).min(0, {
    message: 'Ingrese un numero valido',
  }),
  net_area: z.coerce.number({ message: 'Ingrese un numero valido' }).min(0, {
    message: 'Ingrese un numero valido',
  }),
})

export type ProjectCreateType = z.infer<typeof ProjectCreateSchema>

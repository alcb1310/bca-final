import { z } from 'zod'

export const SupplierResponseSchema = z.object({
  id: z.string().uuid(),
  supplier_id: z.string(),
  name: z.string(),
  contact_name: z.object({
    String: z.string(),
    Valid: z.boolean(),
  }),
  contact_phone: z.object({
    String: z.string(),
    Valid: z.boolean(),
  }),
  contact_email: z.object({
    String: z.string(),
    Valid: z.boolean(),
  }),
})

export type SupplierResponseType = z.infer<typeof SupplierResponseSchema>

export const SupplierEditSchema = z.object({
  id: z.string().uuid(),
  supplier_id: z.string(),
  name: z.string(),
  contact_name: z.string().min(0, { message: 'Ingrese un nombre valido' }),
  contact_email: z.string().min(0, { message: 'Ingrese un email valido' }),
  contact_phone: z.string().min(0, { message: 'Ingrese un telefono valido' }),
})

export type SupplierEditType = z.infer<typeof SupplierEditSchema>

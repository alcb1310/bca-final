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
  contact_name: z.string(),
  contact_email: z.string().email(),
  contact_phone: z.string(),
})

export type SupplierEditType = z.infer<typeof SupplierEditSchema>

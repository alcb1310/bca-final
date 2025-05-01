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

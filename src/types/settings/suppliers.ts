import { z } from 'zod'

export const SupplierResponseSchema = z.object({
  id: z.string().uuid(),
  supplier_id: z.string(),
  name: z.string(),
  contact_name: z.string().optional(),
  contact_phone: z.string().optional(),
  contact_email: z.string().optional(),
})

export type SupplierResponseType = z.infer<typeof SupplierResponseSchema>

import { z } from 'zod'

export const UserResponseShema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string(),
})

export type UserResponseType = z.infer<typeof UserResponseShema>

import { z } from 'zod'

export const UserResponseShema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string(),
})

export const UserCreateSchema = z.object({
  name: z.string().min(1, { message: 'Ingrese un nommbre' }),
  email: z.string().email({ message: 'Ingrese un correo valido' }),
  password: z.string().min(1, { message: 'Ingrese una contraseña' }),
})

export type UserResponseType = z.infer<typeof UserResponseShema>
export type UserCreateType = z.infer<typeof UserCreateSchema>

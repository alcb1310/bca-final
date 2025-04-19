import type { UserResponseType } from '@/types/users'

const url = import.meta.env.VITE_SERVER_URL
if (!url) {
  throw new Error('VITE_BACKEND_SERVER is not defined')
}

export async function getMe({ token }: { token: string }) {
  const response = await fetch(`${url}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as UserResponseType
}

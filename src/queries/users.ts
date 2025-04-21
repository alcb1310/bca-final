import type { UserCreateType, UserResponseType } from '@/types/users'

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

export async function getAllUsers({ token }: { token: string }) {
  const response = await fetch(`${url}/users`, {
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

  return (await response.json()) as UserResponseType[]
}

export async function deleteUser({ token, id }: { token: string; id: string }) {
  const response = await fetch(`${url}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Error al eliminar el usuario')
  }

  return
}

export async function addUser({
  token,
  user,
}: Readonly<{ token: string; user: UserCreateType }>) {
  const response = await fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as UserResponseType
}

export async function updateUser({
  token,
  id,
  user,
}: Readonly<{ token: string; id: string; user: UserResponseType }>) {
  const response = await fetch(`${url}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as UserResponseType
}

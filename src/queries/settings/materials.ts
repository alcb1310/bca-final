import type { MaterialsResponseType } from '@/types/settings/materials'

const url = import.meta.env.VITE_SERVER_URL
if (!url) throw new Error('VITE_SERVER_URL is not defined')

export async function getAllMaterials({ token }: Readonly<{ token: string }>) {
  const response = await fetch(`${url}/parametros/materiales`, {
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

  return (await response.json()) as MaterialsResponseType[]
}

import type {
  MaterialsCreateType,
  MaterialsEditType,
  MaterialsResponseType,
} from '@/types/settings/materials'

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

export async function updateMaterial({
  token,
  material,
}: Readonly<{ token: string; material: MaterialsEditType }>) {
  const response = await fetch(`${url}/parametros/materiales/${material.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(material),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as MaterialsResponseType
}

export async function createMaterial({
  token,
  material,
}: Readonly<{ token: string; material: MaterialsCreateType }>) {
  const response = await fetch(`${url}/parametros/materiales`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(material),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as MaterialsResponseType
}

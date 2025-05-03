import type {
  SupplierCreateType,
  SupplierEditType,
  SupplierResponseType,
} from '@/types/settings/suppliers'

const server = import.meta.env.VITE_SERVER_URL
if (!server) throw new Error('VITE_SERVER_URL is not defined')

export async function getAllSuppliers({ token }: Readonly<{ token: string }>) {
  const response = await fetch(`${server}/parametros/proveedores`, {
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

  return (await response.json()) as SupplierResponseType[]
}

export async function editSupplier({
  token,
  supplier,
}: Readonly<{ token: string; supplier: SupplierEditType }>) {
  const response = await fetch(
    `${server}/parametros/proveedores/${supplier.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(supplier),
    },
  )

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as SupplierResponseType
}

export async function createSupplier({
  token,
  supplier,
}: Readonly<{ token: string; supplier: SupplierCreateType }>) {
  const response = await fetch(`${server}/parametros/proveedores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(supplier),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as SupplierResponseType
}

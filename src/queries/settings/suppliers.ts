import type { SupplierResponseType } from '@/types/settings/suppliers'

const server = import.meta.env.VITE_SERVER_URL
if (!server) throw new Error('VITE_SERVER_URL is not defined')

export default async function getAllSuppliers({
  token,
}: Readonly<{ token: string }>) {
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

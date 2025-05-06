import type { BudgetItemResponseType } from '@/types/settings/budget-items'

const url = import.meta.env.VITE_SERVER_URL
if (!url) throw new Error('VITE_SERVER_URL is not defined')

export async function getAllBudgetItems({
  token,
}: Readonly<{ token: string }>) {
  const response = await fetch(`${url}/parametros/partidas`, {
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

  return (await response.json()) as BudgetItemResponseType[]
}

export async function getAllBudgetItemByAccumulate({
  token,
  accum,
}: Readonly<{ token: string; accum: boolean }>) {
  const val = accum ? 'true' : 'false'
  const response = await fetch(`${url}/parametros/partidas?accum=${val}`, {
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

  return (await response.json()) as BudgetItemResponseType[]
}

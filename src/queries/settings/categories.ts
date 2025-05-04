import type { CategoriesResponseType } from '@/types/settings/categories'

const url = import.meta.env.VITE_SERVER_URL
if (!url) throw new Error('VITE_SERVER_URL is not defined')

export async function getAllCategories({ token }: Readonly<{ token: string }>) {
  const response = await fetch(`${url}/parametros/categorias`, {
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

  return (await response.json()) as CategoriesResponseType[]
}

export async function updateCategory({
  token,
  category,
}: Readonly<{ token: string; category: CategoriesResponseType }>) {
  const response = await fetch(`${url}/parametros/categorias/${category.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return
}

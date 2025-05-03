import PageTitle from '@/components/titles/PageTitle'
import { DataTable } from '@/components/ui/DataTable'
import { getAllCategories } from '@/queries/settings/categories'
import type { CategoriesResponseType } from '@/types/settings/categories'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'
import { Pencil } from 'lucide-react'

export const Route = createFileRoute('/_auth/parametros/categorias')({
  component: RouteComponent,
  loader: async ({ context: { queryClient, auth } }) => {
    const token = auth.token
    if (!token) throw redirect({ to: '/login' })

    await queryClient.prefetchQuery({
      queryKey: ['categories'],
      queryFn: () => getAllCategories({ token }),
    })

    return { token }
  },
})

function RouteComponent() {
  const { token } = Route.useLoaderData()
  const { data } = useSuspenseQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories({ token }),
  })

  const columns: ColumnDef<CategoriesResponseType>[] = [
    {
      header: 'Nombre',
      accessorKey: 'name',
    },
    {
      id: 'actions',
      size: 50,
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => {
        console.log(row.original)
        return <Pencil size={12} className='text-warning' />
      },
    },
  ]

  return (
    <div>
      <PageTitle title='Categorias' />

      <DataTable data={data} columns={columns} />
    </div>
  )
}

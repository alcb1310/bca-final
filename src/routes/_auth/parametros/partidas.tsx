import PageTitle from '@/components/titles/PageTitle'
import { DataTable } from '@/components/ui/DataTable'
import { Switch } from '@/components/ui/switch'
import { getAllBudgetItems } from '@/queries/settings/budget-items'
import type { BudgetItemResponseType } from '@/types/settings/budget-items'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'
import { Pencil } from 'lucide-react'

export const Route = createFileRoute('/_auth/parametros/partidas')({
  component: RouteComponent,
  loader: async ({ context: { auth, queryClient } }) => {
    const token = auth.token
    if (!token) throw redirect({ to: '/login' })

    await queryClient.prefetchQuery({
      queryKey: ['budget-items'],
      queryFn: () => getAllBudgetItems({ token }),
    })

    return { token }
  },
})

function RouteComponent() {
  const { token } = Route.useLoaderData()
  const { data } = useSuspenseQuery({
    queryKey: ['budget-items'],
    queryFn: () => getAllBudgetItems({ token }),
  })
  const columns: ColumnDef<BudgetItemResponseType>[] = [
    {
      header: 'Codigo',
      accessorKey: 'code',
    },
    {
      header: 'Nombre',
      accessorKey: 'name',
    },
    {
      header: 'Nivel',
      cell: ({ row }) => {
        return <span className='block text-center '>{row.original.level}</span>
      },
    },
    {
      header: 'Accumula',
      cell: ({ row }) => {
        return (
          <span className='block text-center '>
            <Switch checked={row.original.accumulate} disabled />
          </span>
        )
      },
    },
    {
      header: 'Padre',
      cell: ({ row }) => {
        return (
          <span className='block text-center '>
            {row.original.parent ? row.original.parent.code : '-'}
          </span>
        )
      },
    },
    {
      id: 'actions',
      size: 50,
      enableSorting: false,
      enableHiding: false,
      cell: () => {
        return <Pencil size={12} className='text-warning' />
      },
    },
  ]

  return (
    <div>
      <PageTitle title='Partidas' />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

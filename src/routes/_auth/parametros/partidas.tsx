import AddBudgetItem from '@/components/dialogs/parametros/partidas/AddBudgetItem'
import EditBudgetItem from '@/components/dialogs/parametros/partidas/EditBudgetItem'
import PageTitle from '@/components/titles/PageTitle'
import { DataTable } from '@/components/ui/DataTable'
import { Switch } from '@/components/ui/switch'
import {
  getAllBudgetItemByAccumulate,
  getAllBudgetItems,
} from '@/queries/settings/budget-items'
import type { BudgetItemResponseType } from '@/types/settings/budget-items'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'

export const Route = createFileRoute('/_auth/parametros/partidas')({
  component: RouteComponent,
  loader: async ({ context: { auth, queryClient } }) => {
    const token = auth.token
    if (!token) throw redirect({ to: '/login' })
    await Promise.all([
      queryClient.prefetchQuery({
        queryKey: ['budget-items'],
        queryFn: () => getAllBudgetItems({ token }),
      }),
      queryClient.prefetchQuery({
        queryKey: ['budget-items', 'parent'],
        queryFn: () => {
          if (!token) throw new Error('No token')
          return getAllBudgetItemByAccumulate({ token, accum: true })
        },
      }),
    ])

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
      cell: ({ row }) => {
        return <EditBudgetItem budgetItem={row.original} />
      },
    },
  ]

  return (
    <div>
      <PageTitle title='Partidas' />
      <AddBudgetItem />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

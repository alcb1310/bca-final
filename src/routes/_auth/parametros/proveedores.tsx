import { DataTable } from '@/components/ui/DataTable'
import getAllSuppliers from '@/queries/settings/suppliers'
import type { SupplierResponseType } from '@/types/settings/suppliers'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'
import { Pencil } from 'lucide-react'

export const Route = createFileRoute('/_auth/parametros/proveedores')({
  component: RouteComponent,
  loader: async ({ context: { queryClient, auth } }) => {
    const token = auth.token
    if (!token) throw redirect({ to: '/login' })

    await queryClient.prefetchQuery({
      queryKey: ['suppliers'],
      queryFn: () => getAllSuppliers({ token }),
    })

    return { token }
  },
})

function RouteComponent() {
  const { token } = Route.useLoaderData()
  const { data } = useSuspenseQuery({
    queryKey: ['suppliers'],
    queryFn: () => getAllSuppliers({ token: token }),
  })
  const columns: ColumnDef<SupplierResponseType>[] = [
    {
      header: () => <p className='font-bold text-center'>RUC</p>,
      accessorKey: 'supplier_id',
    },
    {
      header: () => <p className='font-bold text-center'>Nombre</p>,
      accessorKey: 'name',
    },
    {
      header: () => <p className='font-bold text-center'>Nombre</p>,
      accessorKey: 'contact_name.String',
    },
    {
      header: () => <p className='font-bold text-center'>Telefono</p>,
      accessorKey: 'contact_phone.String',
    },
    {
      header: () => <p className='font-bold text-center'>Email</p>,
      accessorKey: 'contact_email.String',
    },
    {
      id: 'actions',
      size: 50,
      enableSorting: false,
      enableHiding: false,
      cell: ({ row: { original } }) => {
        console.log(original)
        return <Pencil className='text-warning' size={12} />
      },
    },
  ]

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  )
}

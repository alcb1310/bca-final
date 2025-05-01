import EditSupplier from '@/components/dialogs/parametros/proveedores/EditSupplier'
import { DataTable } from '@/components/ui/DataTable'
import getAllSuppliers from '@/queries/settings/suppliers'
import type { SupplierResponseType } from '@/types/settings/suppliers'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'

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
      header: 'RUC',
      accessorKey: 'supplier_id',
    },
    {
      header: 'Nombre',
      accessorKey: 'name',
    },
    {
      // TODO: Find a way to format this header cell
      header: 'Contacto',
      columns: [
        {
          header: 'Nombre',
          accessorFn: (row) => row.contact_name.String,
        },
        {
          header: 'Telefono',
          accessorKey: 'contact_phone.String',
        },
        {
          header: 'Email',
          accessorKey: 'contact_email.String',
        },
      ],
    },
    {
      id: 'actions',
      size: 50,
      enableSorting: false,
      enableHiding: false,
      cell: ({ row: { original } }) => {
        return <EditSupplier supplier={original} />
      },
    },
  ]

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  )
}

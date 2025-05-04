import EditMaterial from '@/components/dialogs/parametros/materiales/EditMaterial'
import PageTitle from '@/components/titles/PageTitle'
import { DataTable } from '@/components/ui/DataTable'
import getAllMaterials from '@/queries/settings/materials'
import type { MaterialsResponseType } from '@/types/settings/materials'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'
import { Pencil } from 'lucide-react'

export const Route = createFileRoute('/_auth/parametros/materiales')({
  component: RouteComponent,
  loader: async ({ context: { queryClient, auth } }) => {
    const token = auth.token
    if (!token) throw redirect({ to: '/login' })

    await queryClient.prefetchQuery({
      queryKey: ['materials'],
      queryFn: () => getAllMaterials({ token }),
    })

    return { token }
  },
})

function RouteComponent() {
  const { token } = Route.useLoaderData()
  const { data } = useSuspenseQuery({
    queryKey: ['materials'],
    queryFn: () => getAllMaterials({ token }),
  })

  const columns: ColumnDef<MaterialsResponseType>[] = [
    {
      header: 'Codigo',
      accessorKey: 'code',
      minSize: 50,
      maxSize: 100,
      size: 50,
    },
    {
      header: 'Nombre',
      accessorKey: 'name',
    },
    {
      header: 'Unidad',
      accessorKey: 'unit',
      minSize: 25,
      maxSize: 50,
      size: 25,
    },
    {
      header: 'Categoria',
      accessorKey: 'category.name',
    },
    {
      id: 'actions',
      size: 50,
      enableSorting: false,
      enableHiding: false,
      cell: ({ row: { original } }) => {
        return <EditMaterial material={original} />
      },
    },
  ]

  // TODO: Add create material
  return (
    <div>
      <PageTitle title='Materiales' />
      <DataTable data={data} columns={columns} />
    </div>
  )
}

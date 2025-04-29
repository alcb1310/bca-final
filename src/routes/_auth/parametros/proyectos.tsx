import AddProject from '@/components/dialogs/parametros/proyectos/AddProject'
import EditProject from '@/components/dialogs/parametros/proyectos/EditProject'
import PageTitle from '@/components/titles/PageTitle'
import { DataTable } from '@/components/ui/DataTable'
import { Switch } from '@/components/ui/switch'
import { getAllProjects } from '@/queries/settings/projects'
import type { ProjectResponseType } from '@/types/settings/projects'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'

export const Route = createFileRoute('/_auth/parametros/proyectos')({
  component: RouteComponent,
  loader: async ({ context: { queryClient, auth } }) => {
    const token = auth.token
    if (!token) throw redirect({ to: '/login' })

    await queryClient.prefetchQuery({
      queryKey: ['projects'],
      queryFn: () => getAllProjects({ token }),
    })

    return { token, queryClient }
  },
})

function RouteComponent() {
  const { token } = Route.useLoaderData()
  const { data } = useSuspenseQuery({
    queryKey: ['projects'],
    queryFn: () => getAllProjects({ token: token }),
  })

  const columns: ColumnDef<ProjectResponseType>[] = [
    {
      header: () => <p className='font-bold text-center'>Nombre</p>,
      accessorKey: 'name',
    },
    {
      header: () => <div className='font-bold text-right'>Area Neta</div>,
      accessorKey: 'net_area',
      cell: ({ row }) => {
        return (
          <span className='block text-right '>
            {row.original.net_area.toLocaleString('es-EC', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        )
      },
    },
    {
      header: () => <div className='font-bold text-right'>Area Bruta</div>,
      accessorKey: 'gross_area',
      cell: ({ row }) => {
        return (
          <span className='block text-right '>
            {row.original.gross_area.toLocaleString('es-EC', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        )
      },
    },
    {
      header: () => <div className='font-bold text-center'>Activo</div>,
      accessorKey: 'is_active',
      cell: ({ row }) => {
        return (
          <div className='flex items-center justify-center'>
            <Switch checked={row.original.is_active} disabled />
          </div>
        )
      },
    },
    {
      id: 'actions',
      size: 50,
      enableSorting: false,
      enableHiding: false,
      cell: ({ row: { original } }) => {
        return <EditProject project={original} />
      },
    },
  ]

  return (
    <div>
      <PageTitle title='Proyectos' />
      <div className='mb-4'>
        <AddProject />
      </div>

      <DataTable data={data} columns={columns} />
    </div>
  )
}

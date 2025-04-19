import { DataTable } from '@/components/ui/DataTable'
import { getAllUsers } from '@/queries/users'
import type { UserResponseType } from '@/types/users'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'
import { Pencil, Trash } from 'lucide-react'

export const Route = createFileRoute('/_auth/usuarios/admin')({
  component: RouteComponent,
  loader: async ({ context }) => {
    const token = context.auth.token
    if (!token) {
      throw redirect({
        to: '/login',
      })
    }

    const users = await context.queryClient.prefetchQuery({
      queryKey: ['users'],
      queryFn: () => getAllUsers({ token }),
    })

    return {
      users,
      token,
    }
  },
})

function RouteComponent() {
  const { token } = Route.useLoaderData()
  const { data: users } = useSuspenseQuery({
    queryKey: ['users'],
    queryFn: () => getAllUsers({ token }),
  })

  const columns: ColumnDef<UserResponseType>[] = [
    {
      header: 'Nombre',
      accessorKey: 'name',
      size: 200,
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      id: 'actions',
      size: 50,
      enableSorting: false,
      enableHiding: false,
      cell: ({ row: { original } }) => {
        return (
          <div className='flex items-center justify-center gap-2'>
            <Pencil
              size={12}
              className='text-warning cursor-pointer'
              onClick={() => {
                console.log(original.id)
              }}
            />
            <Trash
              size={12}
              className='text-destructive cursor-pointer'
              onClick={() => {
                console.log(original.id)
              }}
            />
          </div>
        )
      },
    },
  ]

  return (
    <div>
      <DataTable data={users} columns={columns} />
    </div>
  )
}

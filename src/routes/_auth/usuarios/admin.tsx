import EditDialog from '@/components/dialogs/user/EditDialog'
import NewDialog from '@/components/dialogs/user/NewDialog'
import UserAlert from '@/components/dialogs/user/UserAlert'
import PageTitle from '@/components/titles/PageTitle'
import { DataTable } from '@/components/ui/DataTable'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { deleteUser, getAllUsers } from '@/queries/users'
import type { UserResponseType } from '@/types/users'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'
import type { ColumnDef } from '@tanstack/react-table'

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
      queryClient: context.queryClient,
    }
  },
})

function RouteComponent() {
  const { token, queryClient } = Route.useLoaderData()
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
            <EditDialog user={original} />
            <UserAlert
              user={original}
              queryClient={queryClient}
              token={token}
            />
          </div>
        )
      },
    },
  ]

  return (
    <div>
      <PageTitle title='Usuarios' />

      <div>
        <NewDialog />
      </div>

      <DataTable data={users} columns={columns} />
    </div>
  )
}

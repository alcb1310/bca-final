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
import { deleteUser } from '@/queries/users'
import type { UserResponseType } from '@/types/users'
import { useAuth } from '@/utils/auth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Trash } from 'lucide-react'
import { toast } from 'sonner'

export default function UserAlert({
  user,
}: Readonly<{
  user: UserResponseType
}>) {
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: deleteUser,
    mutationKey: ['users'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      toast('Usuario eliminado')
    },
    onError: () => {
      toast('Error al eliminar el usuario')
    },
  })

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Trash size={12} className='text-destructive' />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Esta seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta seguro de querer eliminar al usuario {user.name}. Esta accion
            no se puede deshacer
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              if (!token) throw new Error('No token found')
              mutate({ token, id: user.id })
            }}
          >
            Eliminar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

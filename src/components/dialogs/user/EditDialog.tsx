import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useAppForm } from '@/hooks/bca.form'
import { updateUser } from '@/queries/users'
import { UserResponseShema, type UserResponseType } from '@/types/users'
import { useAuth } from '@/utils/auth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function EditDialog({
  user,
}: Readonly<{
  user: UserResponseType
}>) {
  const [open, setOpen] = useState(false)
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const userForm = useAppForm({
    defaultValues: user,
    onSubmit: ({ value }) => {
      if (!token) throw new Error('No token found')
      mutate({ token, id: value.id, user: value })
    },
    validators: {
      onSubmit: UserResponseShema,
    },
  })

  const { mutate, error, isError } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
      toast('Usuario actualizado')
      setOpen(false)
    },
    onError: () => {
      toast('Error al actualizar el usuario')
    },
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          onClick={() => userForm.reset()}
          className='text-warning'
        >
          <Pencil size={12} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Editar usuario</DialogTitle>
        <DialogDescription asChild>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()

              userForm.handleSubmit()
            }}
          >
            {isError && userForm.state.isTouched && (
              <p className='text-destructive'>{error?.message}</p>
            )}

            <div className='mb-4 flex flex-col gap-4'>
              <userForm.AppField name='email'>
                {(field) => <field.TextField label='Email' />}
              </userForm.AppField>

              <userForm.AppField name='name'>
                {(field) => <field.TextField label='Nombre' />}
              </userForm.AppField>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type='button' variant='secondary'>
                  Cerrar
                </Button>
              </DialogClose>

              <userForm.AppForm>
                <userForm.SubscribeButton
                  label='Grabar'
                  className='w-fit font-bold'
                />
              </userForm.AppForm>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

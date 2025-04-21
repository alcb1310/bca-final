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
import { type QueryClient, useMutation } from '@tanstack/react-query'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function EditDialog({
  token,
  user,
  queryClient,
}: Readonly<{
  token: string
  user: UserResponseType
  queryClient: QueryClient
}>) {
  const [open, setOpen] = useState(false)
  const userForm = useAppForm({
    defaultValues: user,
    onSubmit: ({ value }) => {
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
        <Button variant='ghost' size='icon'>
          <Pencil
            size={12}
            className='text-warning cursor-pointer'
            onClick={() => {
              console.log(user.id)
            }}
          />
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

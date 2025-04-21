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
import type { UserResponseType } from '@/types/users'
import { Pencil } from 'lucide-react'

export default function EditDialog({
  user,
}: Readonly<{ user: UserResponseType }>) {
  const userForm = useAppForm({
    defaultValues: user,
    onSubmit: ({ value }) => {
      console.log(value)
    },
  })

  return (
    <Dialog>
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
            <div className='mb-4 flex flex-col gap-4'>
              <userForm.AppField name='email'>
                {(field) => <field.TextField label='Email' />}
              </userForm.AppField>

              <userForm.AppField name='name'>
                {(field) => <field.TextField label='Nombre' />}
              </userForm.AppField>
            </div>

            <DialogFooter>
              <DialogClose>
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

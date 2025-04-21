import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useAppForm } from '@/hooks/bca.form'
import { UserCreateSchema } from '@/types/users'
import { Plus } from 'lucide-react'
import { type FormEvent, useState } from 'react'

export default function NewDialog() {
  const [open, setOpen] = useState(false)
  const userForm = useAppForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
    validators: {
      onSubmit: UserCreateSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value)
      setOpen(false)
    },
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          size={'lg'}
          className='flex items-center justify-center gap-2 uppercase tracking-wide'
          onClick={() => userForm.reset()}
        >
          <Plus size={16} />
          Agregar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear usuario</DialogTitle>

        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            e.stopPropagation()
            console.log('submittig')
            userForm.handleSubmit()
          }}
        >
          <div aria-describedby='description' className='flex flex-col gap-4'>
            <userForm.AppField name='email'>
              {(field) => (
                <field.TextField label='Email' placeholder='user@company.com' />
              )}
            </userForm.AppField>

            <userForm.AppField name='name'>
              {(field) => (
                <field.TextField label='Nombre' placeholder='Nombre' />
              )}
            </userForm.AppField>

            <userForm.AppField name='password'>
              {(field) => <field.PasswordTextField label='Contraseña' />}
            </userForm.AppField>
          </div>
          <DialogFooter className='flex gap-4 justify-between'>
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
      </DialogContent>
    </Dialog>
  )
}

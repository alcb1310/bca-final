import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useAppForm } from '@/hooks/bca.form'
import { DialogClose } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'

export default function AddCategory() {
  const categoryForm = useAppForm({
    defaultValues: {
      name: '',
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className='flex gap-2 items-center mb-4'>
          <Plus />
          Crear categoria
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear categoria</DialogTitle>

        <DialogDescription>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              categoryForm.handleSubmit()
            }}
          >
            <div className='mb-4'>
              <categoryForm.AppField name='name'>
                {(field) => (
                  <field.TextField label='Nombre' placeholder='Categoria' />
                )}
              </categoryForm.AppField>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant='secondary'>Cancelar</Button>
              </DialogClose>
              <categoryForm.AppForm>
                <categoryForm.SubscribeButton
                  label='Guardar'
                  className='w-fit'
                />
              </categoryForm.AppForm>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

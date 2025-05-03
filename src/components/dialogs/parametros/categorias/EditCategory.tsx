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
import {
  CategoriesResponseSchema,
  type CategoriesResponseType,
} from '@/types/settings/categories'
import { Pencil } from 'lucide-react'

export default function EditCategory({
  category,
}: Readonly<{ category: CategoriesResponseType }>) {
  const categoryForm = useAppForm({
    defaultValues: category,
    validators: {
      onSubmit: CategoriesResponseSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value)
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          size={'icon'}
          onClick={() => {
            categoryForm.reset()
          }}
        >
          <Pencil className='text-warning' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar Categoria</DialogTitle>
        <DialogDescription>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()

              categoryForm.handleSubmit()
            }}
          >
            <div className='flex flex-col gap-4 mb-4'>
              <categoryForm.AppField name='name'>
                {(field) => (
                  <field.TextField label='Nombre' placeholder='Nombre' />
                )}
              </categoryForm.AppField>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'secondary'}>Cerrar</Button>
              </DialogClose>

              <categoryForm.AppForm>
                <categoryForm.SubscribeButton
                  label='Grabar'
                  className='w-fit font-bold'
                />
              </categoryForm.AppForm>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

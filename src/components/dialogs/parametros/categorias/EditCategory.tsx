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
import { updateCategory } from '@/queries/settings/categories'
import {
  CategoriesResponseSchema,
  type CategoriesResponseType,
} from '@/types/settings/categories'
import { useAuth } from '@/utils/auth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function EditCategory({
  category,
}: Readonly<{ category: CategoriesResponseType }>) {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()
  const { token } = useAuth()
  const { mutate } = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      toast.success('Categoria actualizada')
      setOpen(false)
    },
    onError: (error) => {
      toast.error(`Error al actualizar la categoria: ${error.message}`)
    },
  })
  const categoryForm = useAppForm({
    defaultValues: category,
    validators: {
      onSubmit: CategoriesResponseSchema,
    },
    onSubmit: ({ value }) => {
      if (!token) throw new Error('No token')
      mutate({ token, category: value })
    },
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

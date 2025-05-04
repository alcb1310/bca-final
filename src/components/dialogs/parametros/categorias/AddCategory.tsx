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
import { createCategory } from '@/queries/settings/categories'
import { useAuth } from '@/utils/auth'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function AddCategory() {
  const [open, setOpen] = useState(false)
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      toast('Categoria creada')
      setOpen(false)
    },
    onError: (error) => {
      toast.error(`Error al crear la categoria: ${error.message}`)
    },
  })
  const categoryForm = useAppForm({
    defaultValues: {
      name: '',
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
          variant='ghost'
          className='flex gap-2 items-center mb-4'
          onClick={() => categoryForm.reset()}
        >
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

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
import { getAllCategories } from '@/queries/settings/categories'
import { createMaterial } from '@/queries/settings/materials'
import { MaterialsCreateSchema } from '@/types/settings/materials'
import { useAuth } from '@/utils/auth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function AddMaterial() {
  const [open, setOpen] = useState(false)
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: createMaterial,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['materials'],
      })
      toast.success('Material creado')
      setOpen(false)
    },
    onError: (error) => {
      toast.error(`Error al crear material: ${error.message}`)
    },
  })
  const materialForm = useAppForm({
    defaultValues: {
      code: '',
      name: '',
      unit: '',
      category_id: '',
    },
    validators: {
      onSubmit: MaterialsCreateSchema,
    },
    onSubmit: ({ value }) => {
      if (!token) throw new Error('No token')
      mutate({ token, material: value })
    },
  })
  const { data: categoriesQuery } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      if (!token) throw new Error('No token')
      return getAllCategories({ token })
    },
  })

  const categories = categoriesQuery
    ? categoriesQuery.map((material) => ({
        value: material.id,
        label: material.name,
      }))
    : []

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          className='flex gap-2 items-center mb-4'
          onClick={() => materialForm.reset()}
        >
          <Plus />
          Agregar Material
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear Material</DialogTitle>
        <DialogDescription asChild>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              materialForm.handleSubmit()
            }}
          >
            <div className='flex flex-col gap-4 mb-4'>
              <materialForm.AppField name='category_id'>
                {(field) => (
                  <field.SelectField label='Categoría' values={categories} />
                )}
              </materialForm.AppField>

              <materialForm.AppField name='code'>
                {(field) => (
                  <field.TextField label='Código' placeholder='Código' />
                )}
              </materialForm.AppField>

              <materialForm.AppField name='name'>
                {(field) => (
                  <field.TextField label='Nombre' placeholder='Nombre' />
                )}
              </materialForm.AppField>

              <materialForm.AppField name='unit'>
                {(field) => (
                  <field.TextField label='Unidad' placeholder='Unidad' />
                )}
              </materialForm.AppField>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'secondary'}>Cerrar</Button>
              </DialogClose>
              <materialForm.AppForm>
                <materialForm.SubscribeButton
                  label='Guardar'
                  className='w-fit'
                />
              </materialForm.AppForm>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

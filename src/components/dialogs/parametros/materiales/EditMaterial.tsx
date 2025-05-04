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
import type { MaterialsResponseType } from '@/types/settings/materials'
import { useAuth } from '@/utils/auth'
import { useQuery } from '@tanstack/react-query'
import { Pencil } from 'lucide-react'

export default function EditMaterial({
  material,
}: Readonly<{ material: MaterialsResponseType }>) {
  const { token } = useAuth()
  const materialForm = useAppForm({
    defaultValues: {
      id: material.id,
      code: material.code,
      name: material.name,
      unit: material.unit,
      category: material.category.id,
    },
    onSubmit: ({ value }) => {
      console.log(value)
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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          size={'icon'}
          onClick={() => {
            materialForm.reset()
          }}
        >
          <Pencil className='text-warning' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar Material</DialogTitle>
        <DialogDescription asChild>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              materialForm.handleSubmit()
            }}
          >
            <div className='flex flex-col gap-4 mb-4'>
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

              <materialForm.AppField name='category'>
                {(field) => (
                  <field.SelectField label='Categoría' values={categories} />
                )}
              </materialForm.AppField>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'secondary'}>Cancelar</Button>
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

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
import { getAllBudgetItemByAccumulate } from '@/queries/settings/budget-items'
import { useAuth } from '@/utils/auth'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Plus } from 'lucide-react'

export default function AddBudgetItem() {
  const { token } = useAuth()
  const { data: parentBudgetItems } = useSuspenseQuery({
    queryKey: ['categories', 'parent'],
    queryFn: () => {
      if (!token) throw new Error('No token')
      return getAllBudgetItemByAccumulate({ token, accum: true })
    },
  })

  const budgetItemForm = useAppForm({
    defaultValues: {
      code: '',
      name: '',
      accumulate: false,
      parent_id: undefined,
    },
    onSubmit: async ({ value }) => {
      if (!token) throw new Error('No token')
      console.log('submittig', value)
    },
  })

  const parentItems = parentBudgetItems
    ? parentBudgetItems.map((item) => {
        return {
          value: item.id,
          label: item.name,
        }
      })
    : []

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className='flex gap-2 items-center mb-4'>
          <Plus />
          Agregar partida
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Crear partida</DialogTitle>
        <DialogDescription asChild>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              budgetItemForm.handleSubmit()
            }}
          >
            <div className='flex flex-col gap-4 mb-4'>
              <budgetItemForm.AppField name='parent_id'>
                {(field) => (
                  <field.SelectField values={parentItems} label='Padre' />
                )}
              </budgetItemForm.AppField>

              <budgetItemForm.AppField name='code'>
                {(field) => <field.TextField label='Codigo' />}
              </budgetItemForm.AppField>

              <budgetItemForm.AppField name='name'>
                {(field) => <field.TextField label='Nombre' />}
              </budgetItemForm.AppField>

              <budgetItemForm.AppField name='accumulate'>
                {(field) => <field.SwitchField label='Accumula' />}
              </budgetItemForm.AppField>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'secondary'}>Cerrar</Button>
              </DialogClose>
              <budgetItemForm.AppForm>
                <budgetItemForm.SubscribeButton
                  label='Guardar'
                  className='w-fit'
                />
              </budgetItemForm.AppForm>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

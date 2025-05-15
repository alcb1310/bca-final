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
  createBudgetItem,
  getAllBudgetItemByAccumulate,
} from '@/queries/settings/budget-items'
import { useAuth } from '@/utils/auth'
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function AddBudgetItem() {
  const [open, setOpen] = useState(false)
  const { token } = useAuth()
  const { data: parentBudgetItems } = useSuspenseQuery({
    queryKey: ['budget-items', 'parent'],
    queryFn: () => {
      if (!token) throw new Error('No token')
      return getAllBudgetItemByAccumulate({ token, accum: true })
    },
  })
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: createBudgetItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budget-items'] })
      toast('Partida creada')
      setOpen(false)
    },
    onError: (error) => {
      toast(`Error al crear la partida: ${error.message}`)
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
      mutate({
        token,
        item: value,
      })
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          className='flex gap-2 items-center mb-4'
          onClick={() => budgetItemForm.reset()}
        >
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

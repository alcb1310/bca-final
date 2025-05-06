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
  getAllBudgetItemByAccumulate,
  updateBudgetItem,
} from '@/queries/settings/budget-items'
import type { BudgetItemResponseType } from '@/types/settings/budget-items'
import { useAuth } from '@/utils/auth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function EditBudgetItem({
  budgetItem,
}: Readonly<{ budgetItem: BudgetItemResponseType }>) {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()
  const { token } = useAuth()
  const { mutate } = useMutation({
    mutationFn: updateBudgetItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budget-items'] })
      toast.success('Partida actualizada correctamente')
      setOpen(false)
    },
    onError: (error) => {
      toast.error(`Error al actualizar partida: ${error.message}`)
    },
  })
  const budgetItemForm = useAppForm({
    defaultValues: {
      id: budgetItem.id,
      code: budgetItem.code,
      name: budgetItem.name,
      level: budgetItem.level,
      accumulate: budgetItem.accumulate,
      parent_id: budgetItem.parent?.id,
    },
    onSubmit: async ({ value }) => {
      if (!token) throw new Error('No token')
      mutate({
        token,
        item: {
          id: value.id,
          code: value.code,
          name: value.name,
          level: value.level,
          accumulate: value.accumulate,
          parent_id: value.parent_id,
        },
      })
    },
  })
  const { data: parentBudgetItems } = useQuery({
    queryKey: ['budget-items', 'parent'],
    queryFn: () => {
      if (!token) throw new Error('No token')
      return getAllBudgetItemByAccumulate({ token, accum: true })
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
          variant='ghost'
          size={'icon'}
          className='text-warning'
          onClick={() => budgetItemForm.reset()}
        >
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Editar Partida</DialogTitle>
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
                  <field.SelectField
                    label='Padre'
                    values={parentItems}
                    disabled
                  />
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
                <Button variant={'secondary'}>Cancelar</Button>
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

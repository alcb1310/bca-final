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
import { createSupplier } from '@/queries/settings/suppliers'
import { SupplierCreateSchema } from '@/types/settings/suppliers'
import { useAuth } from '@/utils/auth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function AddSupplier() {
  const [open, setOpen] = useState(false)
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: createSupplier,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] })
      toast('Proveedor creado')
      setOpen(false)
    },
    onError: (error) => {
      toast(`Error al crear el proveedor: ${error.message}`)
    },
  })
  const supplierForm = useAppForm({
    defaultValues: {
      supplier_id: '',
      name: '',
      contact_name: '',
      contact_email: '',
      contact_phone: '',
    },
    validators: {
      onSubmit: SupplierCreateSchema,
    },
    onSubmit: ({ value }) => {
      console.log('submittig', value)
      if (!token) throw new Error('No token')
      mutate({ token, supplier: value })
    },
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          className='mb-4'
          onClick={() => {
            supplierForm.reset()
          }}
        >
          <Plus />
          Crear proveedor
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear proveedor</DialogTitle>

        <DialogDescription asChild>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()

              supplierForm.handleSubmit()
            }}
          >
            <div className='flex flex-col gap-4 mb-4'>
              <supplierForm.AppField name='supplier_id'>
                {(field) => <field.TextField label='RUC' placeholder='RUC' />}
              </supplierForm.AppField>

              <supplierForm.AppField name='name'>
                {(field) => (
                  <field.TextField label='Nombre' placeholder='Nombre' />
                )}
              </supplierForm.AppField>

              <supplierForm.AppField name='contact_name'>
                {(field) => (
                  <field.TextField
                    label='Nombre Contacto'
                    placeholder='Nombre Contacto'
                  />
                )}
              </supplierForm.AppField>

              <supplierForm.AppField name='contact_phone'>
                {(field) => (
                  <field.TextField
                    label='Telefono Contacto'
                    placeholder='Telefono Contacto'
                  />
                )}
              </supplierForm.AppField>

              <supplierForm.AppField name='contact_email'>
                {(field) => (
                  <field.TextField
                    label='Email Contacto'
                    placeholder='Email Contacto'
                  />
                )}
              </supplierForm.AppField>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'secondary'}>Cerrar</Button>
              </DialogClose>

              <supplierForm.AppForm>
                <supplierForm.SubscribeButton
                  label='Grabar'
                  className='w-fit font-bold'
                />
              </supplierForm.AppForm>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

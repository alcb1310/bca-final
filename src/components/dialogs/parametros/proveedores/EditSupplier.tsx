import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useAppForm } from '@/hooks/bca.form'
import { editSupplier } from '@/queries/settings/suppliers'
import {
  SupplierEditSchema,
  type SupplierResponseType,
} from '@/types/settings/suppliers'
import { useAuth } from '@/utils/auth'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function EditSupplier({
  supplier,
}: Readonly<{ supplier: SupplierResponseType }>) {
  const { token } = useAuth()
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: editSupplier,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] })
      toast('Proveedor actualizado')
      setOpen(false)
    },
    onError: (error) => {
      toast(`Error al actualizar el proveedor: ${error.message}`)
    },
  })

  const supplierForm = useAppForm({
    defaultValues: {
      id: supplier.id,
      supplier_id: supplier.supplier_id,
      name: supplier.name,
      contact_name: supplier.contact_name.String,
      contact_email: supplier.contact_email.String,
      contact_phone: supplier.contact_phone.String,
    },
    validators: {
      onSubmit: SupplierEditSchema,
    },
    onSubmit: ({ value }) => {
      if (!token) throw new Error('No token')
      mutate({ token, supplier: value })
    },
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          size='icon'
          variant={'ghost'}
          onClick={() => supplierForm.reset()}
        >
          <Pencil className='text-warning' size={12} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar proveedor</DialogTitle>
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
                <Button variant='secondary'>Cerrar</Button>
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

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
import { SupplierCreateSchema } from '@/types/settings/suppliers'
import { Plus } from 'lucide-react'

export default function AddSupplier() {
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
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className='mb-4'>
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

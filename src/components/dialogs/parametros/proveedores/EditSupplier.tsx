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
import {
  SupplierEditSchema,
  type SupplierResponseType,
} from '@/types/settings/suppliers'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Pencil } from 'lucide-react'

export default function EditSupplier({
  supplier,
}: Readonly<{ supplier: SupplierResponseType }>) {
  const supplierForm = useAppForm({
    defaultValues: {
      id: supplier.id,
      supplier_id: supplier.supplier_id,
      name: supplier.name,
      contact_name: supplier.contact_name.Valid
        ? supplier.contact_name.String
        : '',
      contact_email: supplier.contact_email.Valid
        ? supplier.contact_email.String
        : '',
      contact_phone: supplier.contact_phone.Valid
        ? supplier.contact_phone.String
        : '',
    },
    validators: {
      onSubmit: SupplierEditSchema,
    },
  })

  console.log(supplier)
  return (
    <Dialog>
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

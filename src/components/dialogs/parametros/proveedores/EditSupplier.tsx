import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import type { SupplierResponseType } from '@/types/settings/suppliers'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Pencil } from 'lucide-react'

export default function EditSupplier({
  supplier,
}: Readonly<{ supplier: SupplierResponseType }>) {
  console.log(supplier)
  return (
    <Dialog>
      <DialogTrigger>
        <Pencil className='text-warning' size={12} />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar proveedor</DialogTitle>
      </DialogContent>
    </Dialog>
  )
}

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Plus } from 'lucide-react'

export default function AddSupplier() {
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
      </DialogContent>
    </Dialog>
  )
}

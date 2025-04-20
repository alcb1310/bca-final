import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Plus } from 'lucide-react'

export default function NewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          size={'lg'}
          className='flex items-center justify-center gap-2 uppercase tracking-wide'
        >
          <Plus size={16} />
          Agregar
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Crear usuario</DialogTitle>
        <DialogFooter>
          <DialogClose>
            <Button type='button' variant='secondary'>
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

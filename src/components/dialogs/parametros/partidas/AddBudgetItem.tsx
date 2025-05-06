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
import { Plus } from 'lucide-react'

export default function AddBudgetItem() {
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
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={'secondary'}>Cerrar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

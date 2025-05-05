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
import { Pencil } from 'lucide-react'

export default function EditBudgetItem() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size={'icon'} className='text-warning'>
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Editar Partida</DialogTitle>
        <DialogDescription asChild>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant={'secondary'}>Cancelar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

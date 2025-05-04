import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import type { MaterialsResponseType } from '@/types/settings/materials'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Pencil } from 'lucide-react'

export default function EditMaterial({
  material,
}: Readonly<{ material: MaterialsResponseType }>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <Pencil className='text-warning' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Editar Material</DialogTitle>
        <DialogDescription>
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

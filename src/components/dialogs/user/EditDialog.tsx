import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { UserResponseType } from '@/types/users'
import { Pencil } from 'lucide-react'

export default function EditDialog({
  user,
}: Readonly<{ user: UserResponseType }>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil
          size={12}
          className='text-warning cursor-pointer'
          onClick={() => {
            console.log(user.id)
          }}
        />
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Editar usuario</DialogTitle>
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

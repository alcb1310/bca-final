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
import { ProjectCreateSchema } from '@/types/settings/projects'
import { Plus } from 'lucide-react'

export default function AddProject() {
  const projectForm = useAppForm({
    defaultValues: {
      name: '',
      is_active: false,
      gross_area: 0,
      net_area: 0,
    },
    validators: {
      onSubmit: ProjectCreateSchema,
    },
    onSubmit: ({ value }) => {
      console.log(value)
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className='flex items-center justify-center gap-4 uppercase tracking-wide'
          onClick={() => projectForm.reset()}
        >
          <Plus size={16} />
          Crear Proyecto
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Crear Proyecto</DialogTitle>
        <DialogDescription asChild>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              projectForm.handleSubmit()
            }}
          >
            <div className='flex flex-col gap-4'>
              <projectForm.AppField name='name'>
                {(field) => (
                  <field.TextField label='Nombre' placeholder='Nombre' />
                )}
              </projectForm.AppField>

              <projectForm.AppField name='gross_area'>
                {(field) => (
                  <field.TextField
                    label='Area Bruta'
                    placeholder='Area Bruta'
                  />
                )}
              </projectForm.AppField>

              <projectForm.AppField name='net_area'>
                {(field) => (
                  <field.TextField label='Area Neta' placeholder='Area Neta' />
                )}
              </projectForm.AppField>

              <projectForm.AppField name='is_active'>
                {(field) => <field.SwitchField label='Activo' />}
              </projectForm.AppField>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant={'secondary'}>Cerrar</Button>
              </DialogClose>
              <projectForm.AppForm>
                <projectForm.SubscribeButton
                  label='Grabar'
                  className='w-fit font-bold'
                />
              </projectForm.AppForm>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

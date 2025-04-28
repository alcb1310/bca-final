import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useAppForm } from '@/hooks/bca.form'
import {
  ProjectResponseSchema,
  type ProjectResponseType,
} from '@/types/settings/projects'
import { Pencil } from 'lucide-react'

export default function EditProject({
  project,
}: Readonly<{ project: ProjectResponseType }>) {
  const projectForm = useAppForm({
    defaultValues: project,
    onSubmit: ({ value }) => {
      console.log(value)
    },
    validators: {
      onSubmit: ProjectResponseSchema,
    },
  })

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Pencil className='text-warning' />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Proyecto</DialogTitle>
        </DialogHeader>
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

              <projectForm.AppField name='net_area'>
                {(field) => (
                  <field.TextField label='Area Util' placeholder='0.00' />
                )}
              </projectForm.AppField>

              <projectForm.AppField name='gross_area'>
                {(field) => (
                  <field.TextField label='Area Bruta' placeholder='0.00' />
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

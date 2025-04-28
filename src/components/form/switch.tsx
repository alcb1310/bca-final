import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useFieldContext } from '@/hooks/bca.form'
import { useStore } from '@tanstack/react-form'
import { ErrorMessages } from './errors'

export function SwitchField({ label }: Readonly<{ label: string }>) {
  const field = useFieldContext<boolean>()
  const errors = useStore(field.store, (state) => state.meta.errors)

  return (
    <div>
      <div className='flex items-center space-x-4'>
        <Switch
          checked={field.state.value}
          onCheckedChange={field.handleChange}
        />
        <Label htmlFor={label} className='mb-1 font-bold'>
          {label}
        </Label>
      </div>
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  )
}

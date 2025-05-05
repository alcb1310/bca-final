import { Label } from '@/components/ui/label'
import * as ShadcnSelect from '@/components/ui/select'
import { useFieldContext } from '@/hooks/bca.form'
import { useStore } from '@tanstack/react-form'
import { ErrorMessages } from './errors'

export function SelectField({
  label,
  values,
  placeholder,
  disabled = false,
}: Readonly<{
  label: string
  values: Array<{ value: string; label: string }>
  placeholder?: string
  disabled?: boolean
}>) {
  const field = useFieldContext<string>()
  const errors = useStore(field.store, (state) => state.meta.errors)

  return (
    <div>
      <Label htmlFor={label} className='mb-1 font-bold'>
        {label}
      </Label>
      <ShadcnSelect.Select
        name={field.name}
        value={field.state.value}
        onValueChange={(value) => field.handleChange(value)}
        disabled={disabled}
      >
        <ShadcnSelect.SelectTrigger className='w-full'>
          <ShadcnSelect.SelectValue placeholder={placeholder} />
        </ShadcnSelect.SelectTrigger>

        <ShadcnSelect.SelectContent>
          <ShadcnSelect.SelectGroup>
            {values.map(({ value, label }) => (
              <ShadcnSelect.SelectItem key={value} value={value}>
                {label}
              </ShadcnSelect.SelectItem>
            ))}
          </ShadcnSelect.SelectGroup>
        </ShadcnSelect.SelectContent>
      </ShadcnSelect.Select>
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  )
}

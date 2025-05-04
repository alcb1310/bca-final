import * as ShadcnSelect from '@/components/ui/select'
import { useFieldContext } from '@/hooks/bca.form'
import { useStore } from '@tanstack/react-form'
import { ErrorMessages } from './errors'

export function SelectField({
  label,
  values,
  placeholder,
}: Readonly<{
  label: string
  values: Array<{ value: string; label: string }>
  placeholder?: string
}>) {
  const field = useFieldContext<string>()
  const errors = useStore(field.store, (state) => state.meta.errors)

  return (
    <div>
      <ShadcnSelect.Select
        name={field.name}
        value={field.state.value}
        onValueChange={(value) => field.handleChange(value)}
      >
        <ShadcnSelect.SelectTrigger className='w-full'>
          <ShadcnSelect.SelectValue placeholder={placeholder} />
        </ShadcnSelect.SelectTrigger>

        <ShadcnSelect.SelectContent>
          <ShadcnSelect.SelectGroup>
            <ShadcnSelect.SelectLabel>{label}</ShadcnSelect.SelectLabel>
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

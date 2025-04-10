import { useStore } from "@tanstack/react-form";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFieldContext } from '@/hooks/bca.form';
import { ErrorMessages } from './errors';

export function PasswordTextField({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  const field = useFieldContext<string>();
  const errors = useStore(field.store, (state) => state.meta.errors);

  return (
    <div>
      <Label htmlFor={label} className='mb-1 font-bold'>{label}</Label>
      <Input
        type='password'
        placeholder={placeholder}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      {field.state.meta.isTouched && <ErrorMessages errors={errors} />}
    </div>
  );
}

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFieldContext } from '@/hooks/bca.form';

export function PasswordTextField({
  label,
  placeholder,
  ...rest
}: {
  label: string;
  placeholder?: string;
}) {
  const field = useFieldContext<string>();

  return (
    <div>
      <Label htmlFor={label} className='mb-1 font-bold'>{label}</Label>
      <Input
        type='password'
        placeholder={placeholder}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        {...rest}
      />
    </div>
  );
}

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFieldContext } from '@/hooks/bca.form';

export function TextField({
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
      <Label htmlFor={label}>{label}</Label>
      <Input placeholder={placeholder} value={field.state.value} {...rest} />
    </div>
  );
}

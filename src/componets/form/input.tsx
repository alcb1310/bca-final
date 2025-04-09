import { useFieldContext } from "../../hooks/bca.form";

export function TextField({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  const field = useFieldContext<string>();

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="text" placeholder={placeholder} value={field.state.value} />
    </div>
  );
}

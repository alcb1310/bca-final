import { useFormContext } from '@/hooks/bca.form';

export function SubscribeButton({ label }: { label: string }) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <button type='submit' disabled={isSubmitting}>
          {label}
        </button>
      )}
    </form.Subscribe>
  );
}

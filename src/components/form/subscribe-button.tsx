import { Button } from '@/components/ui/button';
import { useFormContext } from '@/hooks/bca.form';

export function SubscribeButton({ label }: { label: string }) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button type='submit' disabled={isSubmitting}>
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}

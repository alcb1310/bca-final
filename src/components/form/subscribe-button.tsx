import { Button } from '@/components/ui/button';
import { useFormContext } from '@/hooks/bca.form';
import { cn } from '@/lib/utils';

export function SubscribeButton({
  label,
  className,
  testId
}: {
  label: string,
  className?: string
  testId?: string
}) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          type='submit'
          variant='default'
          disabled={isSubmitting}
          className={cn('w-full', className)}
          data-testid={testId}
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}

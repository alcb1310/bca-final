export function ErrorMessages({
  errors,
  testId
}: {
  errors: Array<string | { message: string }>;
  testId?: string
}) {
  return (
    <>
      {errors.map((error) => (
        <p
          key={typeof error === 'string' ? error : error.message}
          className='mt-1 text-destructive'
          data-testid={`${testId}-error`}
        >
          {typeof error === 'string' ? error : error.message}
        </p>
      ))}
    </>
  );
}

export function ErrorMessages({
  errors,
}: {
  errors: Array<string | { message: string }>;
}) {
  return (
    <>
      {errors.map((error) => (
        <p
          key={typeof error === 'string' ? error : error.message}
          className='mt-1 text-destructive'>
          {typeof error === 'string' ? error : error.message}
        </p>
      ))}
    </>
  );
}

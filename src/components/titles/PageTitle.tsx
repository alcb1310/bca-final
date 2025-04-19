export default function PageTitle({ title }: { title: string }) {
  return (
    <h2
      className='mb-6 pb-2 border-b border-b-primary/20 text-2xl font-bold'
      data-testid='page-title'
    >
      {title}
    </h2>
  )
}

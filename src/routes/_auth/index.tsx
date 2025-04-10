import Greet from '@/components/greet/Greet'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Greet name='Andres' />
    </div>
  )
}

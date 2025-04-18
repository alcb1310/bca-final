import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/transacciones/presupuestos')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/transacciones/presupuestos"!</div>
}

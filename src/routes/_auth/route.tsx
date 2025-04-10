import Nav from '@/components/nav/Nav'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Nav />
    <Outlet />
  </div>
}

import Nav from '@/components/nav/Nav'
import ThemeToggle from '@/components/theme/theme-toggle'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <div className='flex justify-between'>
      <Nav />
      <ThemeToggle />
    </div>
    <Outlet />
  </div>
}

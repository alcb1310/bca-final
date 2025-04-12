import Nav from '@/components/nav/Nav'
import ThemeToggle from '@/components/theme/theme-toggle'
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
      })
    }
  },
})

function RouteComponent() {
  return (
    <div>
      <div className='flex justify-between'>
        <Nav />
        <ThemeToggle />
      </div>
      <Outlet />
    </div>
  )
}

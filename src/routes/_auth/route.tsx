import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <nav className="px-2 py-4 flex gap-4 text-blue-600 font-bold tracking-wider uppercase text-xs">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>

    <Outlet />
  </div>
}

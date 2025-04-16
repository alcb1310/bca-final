import type { AuthContext } from '@/utils/auth'
import type { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
  auth: AuthContext
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='h-screen bg-muted'>
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </div>
  )
}

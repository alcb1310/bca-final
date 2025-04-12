import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type RouteComponent, RouterProvider } from '@tanstack/react-router'
import { createRootRoute, createRouter } from '@tanstack/react-router'
import { AuthProvider } from '@/utils/auth'

const rootRoute = createRootRoute()
const queryClient = new QueryClient()

const router = createRouter({
  routeTree: rootRoute,
})

export default function TestProvider({
  component,
}: Readonly<{ component: RouteComponent }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} defaultComponent={component} />
      </AuthProvider>
    </QueryClientProvider>
  )
}

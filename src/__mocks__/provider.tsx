import { type RouteComponent, RouterProvider } from '@tanstack/react-router'
import { createRootRoute, createRouter } from '@tanstack/react-router'

const rootRoute = createRootRoute()

const router = createRouter({
  routeTree: rootRoute,
})

export default function TestProvider({
  component,
}: Readonly<{ component: RouteComponent }>) {
  return <RouterProvider router={router} defaultComponent={component} />
}

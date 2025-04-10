import { RouteComponent, RouterProvider } from "@tanstack/react-router";
import { createRootRoute, createRouter } from '@tanstack/react-router'

const rootRoute = createRootRoute()

const router = createRouter({
  routeTree: rootRoute,
})

export default function TestProvider({ children }: Readonly<{ children: RouteComponent }>) {
  return <RouterProvider router={router} defaultComponent={children} />
}

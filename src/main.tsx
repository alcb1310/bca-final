import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ThemeProvider } from './components/theme/provider'
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth } from './utils/auth'

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    queryClient,
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    auth: undefined!,
  },
})

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark'>
        <AuthProvider>
          <InnerApp />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router
  }
}

function InnerApp() {
  const auth = useAuth()

  return <RouterProvider router={router} context={{ auth }} />
}

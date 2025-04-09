import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { ThemeProvider } from './components/theme/provider';

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: { queryClient },
});

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}

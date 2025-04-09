import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className='h-screen'>
      <nav className="px-2 py-4 flex gap-4 text-blue-600 font-bold tracking-wider uppercase text-xs">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <div>
        <Outlet />
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </div>
    </div>
  );
}

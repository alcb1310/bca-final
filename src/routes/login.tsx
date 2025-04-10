import { createFileRoute } from '@tanstack/react-router';
import Login from '@/components/forms/login/Login';
import ThemeToggle from '@/components/theme/theme-toggle';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className='h-screen w-full flex flex-col justify-center'>
    <div className='w-full'>
      <ThemeToggle />
    </div>
    <div className='w-full flex grow items-center justify-center self-center'>
      <Login />
    </div>
  </div>
}

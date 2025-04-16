import TopBar from '@/components/nav/TopBar'
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
    <div className='flex flex-row'>
      <div className='w-full'>
        <div className='flex flex-col '>
          <TopBar />
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
          <div className='p-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

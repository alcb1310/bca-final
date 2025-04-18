import Nav from '@/components/nav/Nav'
import TopBar from '@/components/nav/TopBar'
import { SidebarProvider } from '@/components/ui/sidebar'
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
    <SidebarProvider defaultOpen>
      <Nav />
      <div className='flex w-full flex-row'>
        <div className='grow'>
          <div className='full flex flex-col '>
            <TopBar />
            <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
            <div className='p-4'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

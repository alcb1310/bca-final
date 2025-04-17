import TopBar from '@/components/nav/TopBar'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from '@/components/ui/sidebar'
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
    <SidebarProvider defaultOpen={true}>
      <div className='flex w-full flex-row'>
        <Sidebar>
          <SidebarHeader>BCA</SidebarHeader>
          <SidebarContent>
            <SidebarGroup>Grupo</SidebarGroup>
          </SidebarContent>
        </Sidebar>
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

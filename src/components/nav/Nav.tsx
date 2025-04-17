import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from '../ui/sidebar'

export default function Nav() {
  return (
    <Sidebar className='bg-amber-400'>
      <SidebarHeader>BCA</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

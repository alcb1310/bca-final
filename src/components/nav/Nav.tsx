import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '../ui/sidebar'

export default function Nav() {
  return (
    <Sidebar className='bg-amber-400'>
      <SidebarHeader>BCA</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <Collapsible defaultOpen className='group/collapsible'>
            <CollapsibleTrigger>Transacciones</CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>Presupuesto</SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen className='group/collapsible'>
            <CollapsibleTrigger>Reportes</CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>Actual</SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

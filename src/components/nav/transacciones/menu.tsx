import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { SidebarMenuSub, SidebarMenuSubItem } from '@/components/ui/sidebar'

export default function TransaccionesMenu() {
  return (
    <Collapsible defaultOpen className='group/collapsible'>
      <CollapsibleTrigger>Transacciones</CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem>Presupuesto</SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  )
}

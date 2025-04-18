import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { SidebarMenuSub, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'

export default function TransaccionesMenu() {
  return (
    <Collapsible defaultOpen className='group/collapsible'>
      <CollapsibleTrigger>Transacciones</CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <Link to='/transacciones/presupuestos'>Presupuesto</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/transacciones/facturas'>Facturas</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/transacciones/cierre-mensual'>Cierre Mensual</Link>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  )
}

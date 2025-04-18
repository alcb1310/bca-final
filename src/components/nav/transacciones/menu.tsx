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
      <CollapsibleTrigger data-testid='transacciones-menu'>
        Transacciones
      </CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <Link
              to='/transacciones/presupuestos'
              data-testid='transacciones-menu-presupuesto'
            >
              Presupuesto
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link
              to='/transacciones/facturas'
              data-testid='transacciones-menu-facturas'
            >
              Facturas
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link
              to='/transacciones/cierre-mensual'
              data-testid='transacciones-menu-cierre'
            >
              Cierre Mensual
            </Link>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  )
}

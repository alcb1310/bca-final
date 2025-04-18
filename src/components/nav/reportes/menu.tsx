import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { SidebarMenuSub, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'

export default function ReportesMenu() {
  return (
    <Collapsible defaultOpen className='group/collapsible'>
      <CollapsibleTrigger>Reportes</CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <Link to='/reportes/actual'>Actual</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/reportes/cuadre'>Cuadre</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/reportes/gastado-por-partida'>Gastado por Partida</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/reportes/historico'>Historico</Link>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  )
}

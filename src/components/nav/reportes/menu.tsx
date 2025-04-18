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
      <CollapsibleTrigger data-testid='reportes-menu'>
        Reportes
      </CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <Link to='/reportes/actual' data-testid='reportes-menu-actual'>
              Actual
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/reportes/cuadre' data-testid='reportes-menu-cuadre'>
              Cuadre
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link
              to='/reportes/gastado-por-partida'
              data-testid='reportes-menu-gastado'
            >
              Gastado por Partida
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link
              to='/reportes/historico'
              data-testid='reportes-menu-historico'
            >
              Historico
            </Link>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  )
}

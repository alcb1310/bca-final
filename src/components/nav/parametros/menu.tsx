import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { SidebarMenuSub, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'

export default function ParametrosMenu() {
  return (
    <Collapsible defaultOpen className='group/collapsible'>
      <CollapsibleTrigger data-testid='parametros-menu'>
        Parametros
      </CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <Link
              to='/parametros/categorias'
              data-testid='parametros-menu-categorias'
            >
              Categorias
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link
              to='/parametros/materiales'
              data-testid='parametros-menu-materiales'
            >
              Materiales
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link
              to='/parametros/partidas'
              data-testid='parametros-menu-partidas'
            >
              Partidas
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link
              to='/parametros/proyectos'
              data-testid='parametros-menu-proyectos'
            >
              Proyectos
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link
              to='/parametros/proveedores'
              data-testid='parametros-menu-proveedores'
            >
              Proveedores
            </Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/parametros/rubros' data-testid='parametros-menu-rubros'>
              Rubros
            </Link>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  )
}

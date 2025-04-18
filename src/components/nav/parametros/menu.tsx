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
      <CollapsibleTrigger>Parametros</CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <Link to='/parametros/categorias'>Categorias</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/parametros/materiales'>Materiales</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/parametros/partidas'>Partidas</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/parametros/proyectos'>Proyectos</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/parametros/proveedores'>Proveedores</Link>
          </SidebarMenuSubItem>
          <SidebarMenuSubItem>
            <Link to='/parametros/rubros'>Rubros</Link>
          </SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  )
}

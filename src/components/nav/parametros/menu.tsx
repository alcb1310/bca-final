import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { SidebarMenuSub, SidebarMenuSubItem } from '@/components/ui/sidebar'

export default function ParametrosMenu() {
  return (
    <Collapsible defaultOpen className='group/collapsible'>
      <CollapsibleTrigger>Parametros</CollapsibleTrigger>

      <CollapsibleContent>
        <SidebarMenuSub>
          <SidebarMenuSubItem>Partidas</SidebarMenuSubItem>
          <SidebarMenuSubItem>Categorias</SidebarMenuSubItem>
          <SidebarMenuSubItem>Materiales</SidebarMenuSubItem>
          <SidebarMenuSubItem>Proyectos</SidebarMenuSubItem>
          <SidebarMenuSubItem>Proveedores</SidebarMenuSubItem>
          <SidebarMenuSubItem>Rubros</SidebarMenuSubItem>
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  )
}

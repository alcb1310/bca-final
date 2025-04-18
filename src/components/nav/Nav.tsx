import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar'
import ParametrosMenu from './parametros/menu'
import ReportesMenu from './reportes/menu'
import TransaccionesMenu from './transacciones/menu'

export default function Nav() {
  return (
    <Sidebar className='bg-amber-400'>
      <SidebarHeader>BCA</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <TransaccionesMenu />
          <ReportesMenu />
          <ParametrosMenu />
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

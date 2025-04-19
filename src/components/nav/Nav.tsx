import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'
import ParametrosMenu from './parametros/menu'
import ReportesMenu from './reportes/menu'
import TransaccionesMenu from './transacciones/menu'

export default function Nav() {
  return (
    <Sidebar>
      <SidebarHeader className='flex justify-center items-center my-2'>
        <Link to='/'>
          <img src='/favicon.ico' alt='logo' className='w-12 h-12' />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <TransaccionesMenu />
          <ReportesMenu />
          <ParametrosMenu />
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <p className='text-xs text-primary/70 text-center'>
          Copyright alcbsystems &copy; 2023 - {new Date().getFullYear()}
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from '@tanstack/react-router'
import { User } from 'lucide-react'

export default function UserDropdown() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger data-testid='user-dropdown'>
          <User size={14} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Usuarios</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={'/usuarios/perfil'}>Perfil</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={'/usuarios/admin'}>Administrar</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Cambiar contraseña</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

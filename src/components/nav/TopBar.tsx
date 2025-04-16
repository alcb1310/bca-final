import { Link, useRouter } from '@tanstack/react-router'
import ThemeToggle from '../theme/theme-toggle'
import { LogOut } from 'lucide-react'
import { Button } from '../ui/button'
import { useAuth } from '@/utils/auth'
import UserDropdown from './user/UserDropdown'

export default function TopBar() {
  const auth = useAuth()
  const router = useRouter()

  function logout() {
    auth.logout()
    router.invalidate()
  }

  return (
    <header className='flex bg-primary-foreground w-full h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
      <div className='flex w-full items-center justify-between gap-2 px-4'>
        <Link
          to='/'
          className='uppercase tracking-wider font-bold text-xl'
          data-testid='home-link'
        >
          Sistema Control Presupuestario
        </Link>
        <div className='grow'>
          <div className='flex items-center justify-end gap-1'>
            <UserDropdown />
            <ThemeToggle />
            <Button
              variant={'ghost'}
              onClick={logout}
              size={'icon'}
              data-testid='logout'
            >
              <LogOut />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

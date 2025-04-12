import { useAuth } from '@/utils/auth'
import { Link, useRouter } from '@tanstack/react-router'
import { Button } from '../ui/button'

export default function Nav() {
  const auth = useAuth()
  const router = useRouter()

  function logout() {
    auth.logout()
    router.invalidate()
  }

  return (
    <nav className='px-2 py-4 flex items-center gap-4 text-blue-600 font-bold tracking-wider uppercase text-xs'>
      <Link to='/' data-testid='home-link'>
        Home
      </Link>
      <Button variant={'ghost'} onClick={logout} data-testid='logout-link'>
        Salir
      </Button>
    </nav>
  )
}

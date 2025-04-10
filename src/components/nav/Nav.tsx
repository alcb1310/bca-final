import { Link } from '@tanstack/react-router'

export default function Nav() {
  return (
    <nav className='px-2 py-4 flex gap-4 text-blue-600 font-bold tracking-wider uppercase text-xs'>
      <Link to='/' data-testid='home-link'>
        Home
      </Link>
      <Link to='/login' data-testid='login-link'>
        Login
      </Link>
    </nav>
  )
}

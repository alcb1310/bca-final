import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { useTheme } from './provider'

export default function ThemeToggle() {
  const theme = useTheme()

  return (
    <div className='flex justify-end'>
      <Button
        variant={'ghost'}
        onClick={() => {
          theme.setTheme(theme.theme === 'dark' ? 'light' : 'dark')
        }}
        size={'icon'}
        data-testid='theme-toggle'
      >
        {theme.theme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </div>
  )
}

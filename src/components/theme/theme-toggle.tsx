import { Button } from "../ui/button"
import { useTheme } from "./provider"
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const theme = useTheme()

  return <Button
    variant={'ghost'}
    onClick={() => {
      theme.setTheme(theme.theme === "dark" ? "light" : "dark")
    }}
  >
    {theme.theme === "dark" ? <Sun /> : <Moon />}
  </Button>
}

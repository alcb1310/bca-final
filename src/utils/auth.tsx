import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

export interface AuthContext {
  isAuthenticated: boolean
  login: (username: string) => Promise<void>
  logout: () => Promise<void>
  token: string | null
}

const AuthContext = createContext<AuthContext | null>(null)

const key = 'bca.auth'

function getStoredUser() {
  return localStorage.getItem(key)
}

function setStoredUser(token: string | null) {
  if (token) {
    localStorage.setItem(key, token)
  } else {
    localStorage.removeItem(key)
  }
}

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState(getStoredUser())
  const isAuthenticated = !!user

  const login = useCallback(async (token: string) => {
    setStoredUser(token)
    setUser(token)
  }, [])

  const logout = useCallback(async () => {
    setStoredUser(null)
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, token: user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

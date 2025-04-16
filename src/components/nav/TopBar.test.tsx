import TestProvider from '@/__mocks__/provider'
import { render, screen } from '@testing-library/react'
import TopBar from './TopBar'

describe('TopBar', () => {
  beforeEach(() => {
    render(<TestProvider component={TopBar} />)
  })

  it('should render', () => {
    const home = screen.getByTestId('home-link')
    expect(home).toBeInTheDocument()
    expect(home).toHaveAttribute('href', '/')
    expect(home).toHaveTextContent(/sistema control presupuestario/i)

    const logout = screen.getByTestId('logout')
    expect(logout).toBeInTheDocument()
  })
})

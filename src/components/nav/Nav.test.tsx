import TestProvider from '@/__mocks__/provider'
import { render, screen } from '@testing-library/react'
import Nav from './Nav'

describe('Nav', () => {
  beforeEach(() => {
    render(<TestProvider component={Nav} />)
  })

  it('should render', () => {
    const home = screen.getByTestId('home-link')
    expect(home).toBeInTheDocument()
    expect(home).toHaveAttribute('href', '/')
    expect(home).toHaveTextContent(/home/i)

    const login = screen.getByTestId('logout-link')
    expect(login).toBeInTheDocument()
    expect(login).toHaveTextContent(/salir/i)
  })
})

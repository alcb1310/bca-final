import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe('Greet', () => {
  it('should render Hello with the name when the name is provided', () => {
    render(<Greet name='Andres' />)
    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/bienvenido andres/i)
  })

  it('should render a login button when no name is provided', () => {
    render(<Greet />)
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/login/i)
  })
})

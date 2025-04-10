import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TestProvider from "@/__mocks__/provider"
import Login from "./Login"

describe('Login', () => {
  beforeEach(() => {
    render(<TestProvider children={Login} />)
  })

  it('should render', () => {
    screen.debug()

    const title = screen.getByTestId('login-title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/iniciar sesión/i)

    const description = screen.getByTestId('login-description')
    expect(description).toBeInTheDocument()
    expect(description).toHaveTextContent(/ingrese su correo y contraseña para ingresar/i)

    const emailLabel = screen.getByTestId('login-email-label')
    expect(emailLabel).toBeInTheDocument()
    expect(emailLabel).toHaveTextContent(/email/i)

    const emailInput = screen.getByTestId('login-email-input')
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveValue('')
    expect(emailInput).toHaveAttribute('placeholder', 'test@test.com')

    const passwordLabel = screen.getByTestId('login-password-label')
    expect(passwordLabel).toBeInTheDocument()
    expect(passwordLabel).toHaveTextContent(/contraseña/i)

    const passwordInput = screen.getByTestId('login-password-input')
    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput).toHaveValue('')
    expect(passwordInput).toHaveAttribute('placeholder', 'su contraseña')

    const submitButton = screen.getByTestId('login-submit')
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveTextContent(/ingresar/i)
  })

  it('should display an error is no email is provided', async () => {
    const emailInput = screen.getByTestId('login-email-input')
    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveValue('')
    expect(emailInput).toHaveAttribute('placeholder', 'test@test.com')

    const submitButton = screen.getByTestId('login-submit')
    const user = userEvent.setup()
    await user.click(submitButton)

    screen.debug()

    const emailError = screen.getByTestId('login-email-error')
    expect(emailError).toBeInTheDocument()
  })
})

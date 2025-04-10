import Nav from "./Nav";
import { render, screen } from "@testing-library/react";
import TestProvider from "@/__mocks__/provider";


describe('Nav', () => {
  beforeEach(() => {
    render(<TestProvider children={Nav} />)
  })

  it('should render', () => {
    const home = screen.getByTestId('home-link')
    expect(home).toBeInTheDocument()
    expect(home).toHaveAttribute('href', '/')
    expect(home).toHaveTextContent(/home/i)

    const login = screen.getByTestId('login-link')
    expect(login).toBeInTheDocument()
    expect(login).toHaveAttribute('href', '/login')
    expect(login).toHaveTextContent(/login/i)
  })
})

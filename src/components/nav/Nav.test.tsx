import TestProvider from '@/__mocks__/provider'
import { render, screen } from '@testing-library/react'
import Nav from './Nav'
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vitest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vitest.fn(), // deprecated
    removeListener: vitest.fn(), // deprecated
    addEventListener: vitest.fn(),
    removeEventListener: vitest.fn(),
    dispatchEvent: vitest.fn(),
  })),
})

describe('Nav', () => {
  beforeEach(() => {
    render(<TestProvider component={Nav} />)
  })

  it('should render the transacciones menu', () => {
    const transacciones = screen.getByTestId('transacciones-menu')
    expect(transacciones).toBeInTheDocument()
    expect(transacciones).toHaveTextContent(/transacciones/i)

    const presupuesto = screen.getByTestId('transacciones-menu-presupuesto')
    expect(presupuesto).toBeInTheDocument()
    expect(presupuesto).toHaveTextContent(/presupuesto/i)
    expect(presupuesto).toHaveAttribute('href', '/transacciones/presupuestos')

    const factura = screen.getByTestId('transacciones-menu-facturas')
    expect(factura).toBeInTheDocument()
    expect(factura).toHaveTextContent(/facturas/i)
    expect(factura).toHaveAttribute('href', '/transacciones/facturas')

    const cierre = screen.getByTestId('transacciones-menu-cierre')
    expect(cierre).toBeInTheDocument()
    expect(cierre).toHaveTextContent(/cierre mensual/i)
    expect(cierre).toHaveAttribute('href', '/transacciones/cierre-mensual')
  })
})

import TestProvider from '@/__mocks__/provider'
import { SidebarProvider } from '@/components/ui/sidebar'
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
function TestNav() {
  return (
    <SidebarProvider>
      <Nav />
    </SidebarProvider>
  )
}

describe('Nav', () => {
  beforeEach(() => {
    render(<TestProvider component={TestNav} />)
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

  it('should render the reportes menu', () => {
    const reportes = screen.getByTestId('reportes-menu')
    expect(reportes).toBeInTheDocument()
    expect(reportes).toHaveTextContent(/reportes/i)

    const actual = screen.getByTestId('reportes-menu-actual')
    expect(actual).toBeInTheDocument()
    expect(actual).toHaveTextContent(/actual/i)
    expect(actual).toHaveAttribute('href', '/reportes/actual')

    const cuadre = screen.getByTestId('reportes-menu-cuadre')
    expect(cuadre).toBeInTheDocument()
    expect(cuadre).toHaveTextContent(/cuadre/i)
    expect(cuadre).toHaveAttribute('href', '/reportes/cuadre')

    const gastado = screen.getByTestId('reportes-menu-gastado')
    expect(gastado).toBeInTheDocument()
    expect(gastado).toHaveTextContent(/gastado por partida/i)
    expect(gastado).toHaveAttribute('href', '/reportes/gastado-por-partida')

    const historico = screen.getByTestId('reportes-menu-historico')
    expect(historico).toBeInTheDocument()
    expect(historico).toHaveTextContent(/historico/i)
    expect(historico).toHaveAttribute('href', '/reportes/historico')
  })

  it('should render the parametros menu', () => {
    const parametros = screen.getByTestId('parametros-menu')
    expect(parametros).toBeInTheDocument()
    expect(parametros).toHaveTextContent(/parametros/i)

    const categorias = screen.getByTestId('parametros-menu-categorias')
    expect(categorias).toBeInTheDocument()
    expect(categorias).toHaveTextContent(/categorias/i)
    expect(categorias).toHaveAttribute('href', '/parametros/categorias')

    const materiales = screen.getByTestId('parametros-menu-materiales')
    expect(materiales).toBeInTheDocument()
    expect(materiales).toHaveTextContent(/materiales/i)
    expect(materiales).toHaveAttribute('href', '/parametros/materiales')

    const partidas = screen.getByTestId('parametros-menu-partidas')
    expect(partidas).toBeInTheDocument()
    expect(partidas).toHaveTextContent(/partidas/i)
    expect(partidas).toHaveAttribute('href', '/parametros/partidas')

    const proyectos = screen.getByTestId('parametros-menu-proyectos')
    expect(proyectos).toBeInTheDocument()
    expect(proyectos).toHaveTextContent(/proyectos/i)
    expect(proyectos).toHaveAttribute('href', '/parametros/proyectos')

    const proveedores = screen.getByTestId('parametros-menu-proveedores')
    expect(proveedores).toBeInTheDocument()
    expect(proveedores).toHaveTextContent(/proveedores/i)
    expect(proveedores).toHaveAttribute('href', '/parametros/proveedores')

    const rubros = screen.getByTestId('parametros-menu-rubros')
    expect(rubros).toBeInTheDocument()
    expect(rubros).toHaveTextContent(/rubros/i)
    expect(rubros).toHaveAttribute('href', '/parametros/rubros')
  })
})

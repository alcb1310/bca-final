import { render, screen } from '@testing-library/react'
import PageTitle from './PageTitle'

describe('PageTitle', () => {
  beforeEach(() => {
    render(<PageTitle title='test' />)
  })

  it('should render correctly', () => {
    const title = screen.getByTestId('page-title')

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('test')
  })
})

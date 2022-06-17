import { fireEvent, render, screen } from 'lib/test-utils'

import Header from './Header'

describe('Header', () => {
  it('should render the logo', () => {
    render(<Header />)
    const logo = screen.getByText('Cryptowatch')
    expect(logo).toBeInTheDocument()
  })

  it('should render the currency select', () => {
    render(<Header />)
    const currencySelect = screen.getByLabelText('Devise')
    expect(currencySelect).toBeInTheDocument()
  })

  it('should render the search button', () => {
    render(<Header />)
    const searchButton = screen.getByLabelText('Recherche')
    expect(searchButton).toBeInTheDocument()
  })

  it('should not initially render the search bar', () => {
    render(<Header />)
    const searchBar = screen.queryByPlaceholderText('Que recherchez-vous ?')
    expect(searchBar).not.toBeInTheDocument()
  })

  it('should render the search bar when the search button is clicked', () => {
    render(<Header />)
    const searchButton = screen.getByLabelText('Recherche')
    fireEvent.click(searchButton)
    const searchBar = screen.getByPlaceholderText('Que recherchez-vous ?')
    expect(searchBar).toBeInTheDocument()
  })
})

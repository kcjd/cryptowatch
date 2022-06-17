import { fireEvent, render, screen, waitFor } from 'lib/test-utils'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should not render when closed', () => {
    render(<SearchBar isOpen={false} toggle={() => undefined} />)
    const searchBar = screen.queryByRole('dialog')
    expect(searchBar).not.toBeInTheDocument()
  })

  it('should render when open', () => {
    render(<SearchBar isOpen={true} toggle={() => undefined} />)
    const searchBar = screen.getByRole('dialog')
    expect(searchBar).toBeInTheDocument()
  })

  it('should not initially render suggestions', async () => {
    render(<SearchBar isOpen={true} toggle={() => undefined} />)
    const options = screen.queryAllByRole('option')
    expect(options).toHaveLength(0)
  })

  it('should render suggestions when the input value changes', async () => {
    render(<SearchBar isOpen={true} toggle={() => undefined} />)
    const input = screen.getByRole('combobox')
    fireEvent.change(input, { target: { value: 'bitcoin' } })

    await waitFor(() => {
      const options = screen.queryAllByRole('option')
      expect(options).toHaveLength(5)
    })
  })
})

import { CURRENCIES, DEFAULT_CURRENCY } from 'lib/constants'
import { fireEvent, render, screen } from 'lib/test-utils'

import CurrencySelect from './CurrencySelect'

describe('CurrencySelect', () => {
  it('should have default currency as value', () => {
    render(<CurrencySelect />)
    const button = screen.getByLabelText('Devise')
    expect(button).toHaveTextContent(DEFAULT_CURRENCY)
  })

  it('should not initially render the options', () => {
    render(<CurrencySelect />)
    const options = screen.queryAllByRole('option')
    expect(options).toHaveLength(0)
  })

  it('should render the options when the button is clicked', () => {
    render(<CurrencySelect />)
    const button = screen.getByLabelText('Devise')
    fireEvent.click(button)
    const options = screen.queryAllByRole('option')
    expect(options).toHaveLength(CURRENCIES.length)
  })

  it('should update the value when an option is clicked', () => {
    render(<CurrencySelect />)
    const button = screen.getByLabelText('Devise')
    fireEvent.click(button)
    const option = screen.getByText(CURRENCIES[1])
    fireEvent.click(option)
    expect(button).toHaveTextContent(CURRENCIES[1])
  })
})

import useCurrency from 'contexts/currencyContext'

import Select from 'components/Select'

import { CURRENCIES } from 'lib/constants'

const CurrencySelect = () => {
  const { currency, setCurrency } = useCurrency()

  return (
    <Select
      value={currency}
      label="Devise"
      options={CURRENCIES}
      onChange={setCurrency}
    />
  )
}

export default CurrencySelect

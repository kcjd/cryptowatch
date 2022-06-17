import useCurrency from 'contexts/currencyContext'
import styled from 'styled-components'

import { truncate } from 'lib/mixins'
import { getPrice } from 'lib/utils'

type Props = {
  value: number
}

const CoinPrice = ({ value }: Props) => {
  const { currency } = useCurrency()

  return <Price>{getPrice(value, currency)}</Price>
}

const Price = styled.span`
  ${truncate}
  font-weight: ${({ theme }) => theme.fontWeights[500]};
`

export default CoinPrice

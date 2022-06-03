import styled from 'styled-components'
import { truncate } from '../../helpers/mixins'
import { getPrice } from '../../helpers/utils'

type Props = {
  value: number
  currency: string
}

const CoinPrice = ({ value, currency }: Props) => {
  return <Price>{getPrice(value, currency)}</Price>
}

const Price = styled.span`
  ${truncate}
  font-weight: ${({ theme }) => theme.fontWeights[500]};
`

export default CoinPrice

import styled from 'styled-components'
import { usePreferences } from '../../context/preferencesContext'
import { truncate } from '../../helpers/mixins'
import { getPrice } from '../../helpers/utils'

type Props = {
  value: number
}

const CoinPrice = ({ value }: Props) => {
  const { currency } = usePreferences()

  return <Price>{getPrice(value, currency)}</Price>
}

const Price = styled.span`
  ${truncate}
  font-weight: ${({ theme }) => theme.fontWeights[500]};
`

export default CoinPrice

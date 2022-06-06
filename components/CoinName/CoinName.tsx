import styled from 'styled-components'
import { truncate } from '../../lib/mixins'

const CoinName = styled.span`
  ${truncate}
  font-weight: ${({ theme }) => theme.fontWeights[600]};
`

export default CoinName

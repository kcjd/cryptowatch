import styled from 'styled-components'
import { truncate } from '../../helpers/mixins'

const CoinName = styled.span`
  ${truncate}
  font-weight: ${({ theme }) => theme.fontWeights[500]};
`

export default CoinName

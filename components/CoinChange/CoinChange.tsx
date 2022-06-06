import { CaretDown, CaretUp } from '@styled-icons/ionicons-solid'
import styled from 'styled-components'
import { getPercentage } from '../../lib/utils'

type Props = {
  value: number
}

const CoinChange = ({ value }: Props) => {
  const isUp = value > 0

  return (
    <Change isUp={isUp}>
      {isUp ? <CaretUp size={14} /> : <CaretDown size={14} />} {getPercentage(value)}
    </Change>
  )
}

const Change = styled.span<{ isUp: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[100]};
  color: ${({ theme, isUp }) => (isUp ? theme.colors.success : theme.colors.danger)};
  font-size: ${({ theme }) => theme.fontSizes[400]};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
`

export default CoinChange

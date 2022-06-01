import { CaretDown, CaretUp } from '@styled-icons/ionicons-solid'
import styled from 'styled-components'
import { getPercentage } from '../../utils'

type Props = {
  change: number
}

const CoinChange = ({ change }: Props) => {
  const isUp = change > 0

  return (
    <Change isUp={isUp}>
      {isUp ? <CaretUp size={14} /> : <CaretDown size={14} />} {getPercentage(change)}
    </Change>
  )
}

const Change = styled.span<{ isUp: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[100]};
  color: ${({ theme, isUp }) => (isUp ? theme.colors.success : theme.colors.danger)};
`

export default CoinChange

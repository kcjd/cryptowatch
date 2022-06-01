import styled from 'styled-components'

const Coin = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[250]};
`

export default Coin

import styled from 'styled-components'

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes[200]};
`

export default ButtonGroup

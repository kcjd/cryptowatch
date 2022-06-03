import styled from 'styled-components'

const Section = styled.div`
  display: grid;
  grid-template-rows: ${({ theme }) => theme.sizes[650]} 1fr;
  gap: ${({ theme }) => theme.sizes[400]};
`

export default Section

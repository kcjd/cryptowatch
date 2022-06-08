import styled from 'styled-components'

const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.sizes[450]};
  font-size: ${({ theme }) => theme.fontSizes[600]};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
`

export default SectionTitle

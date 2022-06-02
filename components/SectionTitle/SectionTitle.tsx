import styled from 'styled-components'

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[250]};
  height: ${({ theme }) => theme.sizes[650]};
  font-size: ${({ theme }) => theme.fontSizes[500]};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
  margin-bottom: ${({ theme }) => theme.sizes[400]};
`

export default SectionTitle

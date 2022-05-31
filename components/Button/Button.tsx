import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[300]};
  height: ${({ theme }) => theme.sizes[650]};
  padding-inline: ${({ theme }) => theme.sizes[350]};
  border-radius: ${({ theme }) => theme.borderRadius[300]};
  border: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes[300]};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  cursor: pointer;
  transition: background-color 0.15s linear;

  &:hover,
  &[aria-expanded='true'] {
    background-color: ${({ theme }) => theme.colors.surfaceLight};
  }
`

export default Button

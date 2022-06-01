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
  background-color: ${({ theme }) => theme.colors.surfaceLight};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  cursor: pointer;
`

export default Button

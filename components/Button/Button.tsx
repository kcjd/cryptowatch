import styled from 'styled-components'

type Props = {
  active?: boolean
}

const Button = styled.button<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[300]};
  height: ${({ theme }) => theme.sizes[650]};
  padding-inline: ${({ theme }) => theme.sizes[350]};
  border-radius: ${({ theme }) => theme.borderRadius[300]};
  border: 0;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.surfaceLight : theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  cursor: pointer;
  transition: background-color 0.15s linear;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.surfaceLight};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export default Button

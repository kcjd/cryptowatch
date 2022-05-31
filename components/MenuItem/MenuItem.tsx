import styled from 'styled-components'

type Props = {
  active?: boolean
  selected?: boolean
}

const MenuItem = styled.li<Props>`
  display: flex;
  gap: ${({ theme }) => theme.sizes[150]};
  padding: ${({ theme }) => theme.sizes[200]} ${({ theme }) => theme.sizes[350]};
  background-color: ${({ theme, active }) => active && theme.colors.highlight};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes[300]};
  cursor: pointer;
  transition: background-color 0.15s linear;
`

export default MenuItem

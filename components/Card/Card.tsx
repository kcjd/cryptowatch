import styled from 'styled-components'

import { screens } from 'lib/mixins'

type Props = {
  outlined?: boolean
}

const Card = styled.article<Props>`
  display: block;
  padding: ${({ theme }) => theme.sizes[400]};
  border-radius: ${({ theme }) => theme.borderRadius[400]};
  background-color: ${({ theme, outlined }) =>
    outlined ? 'transparent !important' : theme.colors.surface};
  border: ${({ outlined }) => (outlined ? '2px' : '1px')} solid
    ${({ theme }) => theme.colors.border};
  transition: border-color 0.15s linear, background-color 0.15s linear;

  ${screens.md} {
    padding: ${({ theme }) => theme.sizes[500]};
  }

  a&:hover,
  a&:focus-visible {
    border-color: ${({ theme }) => theme.colors.borderLight};
    background-color: ${({ theme }) => theme.colors.surfaceLight};
  }
`

export default Card

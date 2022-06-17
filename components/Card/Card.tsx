import styled from 'styled-components'

import { screens } from 'lib/mixins'

const Card = styled.article`
  display: block;
  padding: ${({ theme }) => theme.sizes[400]};
  border-radius: ${({ theme }) => theme.borderRadius[400]};
  background-color: ${({ theme }) => theme.colors.surface};
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

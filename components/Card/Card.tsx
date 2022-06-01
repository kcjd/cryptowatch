import styled from 'styled-components'

const Card = styled.article`
  display: block;
  padding: ${({ theme }) => theme.sizes[400]};
  border-radius: ${({ theme }) => theme.borderRadius[400]};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color 0.15s linear, background-color 0.15s linear;

  a&:hover {
    border-color: ${({ theme }) => theme.colors.borderLight};
    background-color: ${({ theme }) => theme.colors.surfaceLight};
  }
`

export default Card

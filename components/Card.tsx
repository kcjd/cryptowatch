import styled from "styled-components";

const Card = styled.article`
  display: block;
  padding: ${(props) => props.theme.sizes[400]};
  border-radius: ${(props) => props.theme.borderRadius[400]};
  background-color: ${(props) => props.theme.colors.surface[400]};
  transition: border-color 0.15s linear, background-color 0.15s linear;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    padding: ${(props) => props.theme.sizes[500]};
  }

  a&:hover,
  a&:focus-visible {
    border-color: ${(props) => props.theme.colors.neutral[700]};
    background-color: ${(props) => props.theme.colors.surface[300]};
  }
`;

export default Card;

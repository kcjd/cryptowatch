import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.sizes[300]};
  height: ${(props) => props.theme.sizes[650]};
  padding-inline: ${(props) => props.theme.sizes[350]};
  border-radius: ${(props) => props.theme.borderRadius[300]};
  border: 0;
  background-color: ${(props) => props.theme.colors.surface[400]};
  color: ${(props) => props.theme.colors.neutral[50]};
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s linear;

  &:hover,
  &:focus-visible {
    background-color: ${(props) => props.theme.colors.surface[300]};
  }

  &[aria-current="page"],
  &[data-headlessui-state~="checked"] {
    background-color: ${(props) => props.theme.colors.primary[200]};
    color: ${(props) => props.theme.colors.primary[800]};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export default Button;

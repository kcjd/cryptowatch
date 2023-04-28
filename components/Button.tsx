import styled from "styled-components";

export const Button = styled.button<{ isActive?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.sizes[300]};
  height: ${(props) => props.theme.sizes[650]};
  padding-inline: ${(props) => props.theme.sizes[350]};
  border-radius: ${(props) => props.theme.borderRadius[300]};
  border: 0;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.surfaceLight
      : props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights[500]};
  cursor: pointer;
  transition: background-color 0.15s linear;

  &:hover,
  &:focus-visible {
    background-color: ${(props) => props.theme.colors.surfaceLight};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes[200]};
`;

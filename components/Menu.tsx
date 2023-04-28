import styled from "styled-components";

export const Menu = styled.ul`
  padding-block: ${(props) => props.theme.sizes[150]};
`;

export const MenuItem = styled.li`
  padding-block: ${(props) => props.theme.sizes[200]};
  padding-inline: ${(props) => props.theme.sizes[350]};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: background-color 0.15s linear;

  &[data-headlessui-state~="active"] {
    background-color: ${(props) => props.theme.colors.surfaceLight};
  }
`;

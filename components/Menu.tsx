import styled from "styled-components";

const Menu = styled.ul`
  padding-block: ${(props) => props.theme.sizes[150]};

  li {
    padding-block: ${(props) => props.theme.sizes[200]};
    padding-inline: ${(props) => props.theme.sizes[350]};
    color: ${(props) => props.theme.colors.neutral[50]};
    cursor: pointer;
    transition: background-color 0.15s linear;

    &[data-headlessui-state~="active"] {
      background-color: ${(props) => props.theme.colors.surface[300]};
    }
  }
`;

export default Menu;

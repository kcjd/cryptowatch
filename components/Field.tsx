import styled from "styled-components";

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes[150]};
  height: ${(props) => props.theme.sizes[750]};
  padding-inline: ${(props) => props.theme.sizes[250]};

  input {
    flex-grow: 1;
    height: 100%;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.colors.neutral[50]};

    &::placeholder {
      color: ${(props) => props.theme.colors.neutral[400]};
    }
  }
`;

export default Field;

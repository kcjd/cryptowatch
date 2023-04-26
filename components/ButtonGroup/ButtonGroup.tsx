import styled from "styled-components";

const ButtonGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme }) => theme.sizes[200]};
`;

export default ButtonGroup;

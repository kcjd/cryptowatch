import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  width: ${(props) => props.theme.sizes[600]};
  height: ${(props) => props.theme.sizes[600]};
  border-radius: 50%;
  border: 4px solid transparent;
  border-bottom-color: ${(props) => props.theme.colors.primary[500]};
  pointer-events: none;
  animation: ${loaderAnimation} 1600ms linear infinite;
`;

export default Loader;

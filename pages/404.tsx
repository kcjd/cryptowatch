import styled from "styled-components";

const Page = () => {
  return (
    <StyledPage>
      <h1>404</h1>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  display: grid;
  place-content: center;
  height: 100%;

  h1 {
    font-size: ${(props) => props.theme.fontSizes[600]};
    font-weight: ${(props) => props.theme.fontWeights[600]};
  }
`;

export default Page;

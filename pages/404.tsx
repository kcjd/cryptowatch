import styled from "styled-components";
import ErrorMessage from "components/ErrorMessage";

const Page = () => {
  return (
    <StyledPage>
      <h1>404</h1>
      <ErrorMessage>Page not found</ErrorMessage>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  text-align: center;

  h1 {
    margin-bottom: ${(props) => props.theme.sizes[200]};
    font-size: ${(props) => props.theme.fontSizes[600]};
    font-weight: 600;
  }
`;

export default Page;

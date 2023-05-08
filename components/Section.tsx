import styled from "styled-components";
import ErrorMessage from "components/ErrorMessage";
import Loader from "components/Loader";

const Section = styled.section`
  display: grid;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.sizes[800]};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${(props) => props.theme.sizes[450]};

    h1,
    h2 {
      margin-bottom: 0;
    }
  }

  h1,
  h2 {
    margin-bottom: ${(props) => props.theme.sizes[450]};
    font-size: ${(props) => props.theme.fontSizes[500]};
    font-weight: 600;
  }

  ${Loader} {
    margin-inline: auto;
    margin-block: ${(props) => props.theme.sizes[400]};
  }

  ${ErrorMessage} {
    margin-block: ${(props) => props.theme.sizes[400]};
    text-align: center;
  }
`;

export default Section;

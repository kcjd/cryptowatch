import styled from "styled-components";

export const Section = styled.section`
  display: grid;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.sizes[800]};
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.sizes[450]};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.sizes[450]};
  font-size: ${(props) => props.theme.fontSizes[600]};
  font-weight: ${(props) => props.theme.fontWeights[600]};

  ${SectionHeader} & {
    margin-bottom: 0;
  }
`;

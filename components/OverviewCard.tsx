import styled from "styled-components";
import Card from "components/Card";
import Coin from "components/Coin";

type Props = {
  heading: string;
  content: number;
};

const OverviewCard = ({ heading, content }: Props) => {
  return (
    <StyledCard>
      <h3>{heading}</h3>
      <Coin price={content} />
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: grid;
  gap: ${(props) => props.theme.sizes[200]};
  min-width: 0;
  font-size: ${(props) => props.theme.fontSizes[500]};

  h3 {
    color: ${(props) => props.theme.colors.primary[300]};
    font-size: ${(props) => props.theme.fontSizes[400]};
    font-weight: 500;
  }
`;

export default OverviewCard;

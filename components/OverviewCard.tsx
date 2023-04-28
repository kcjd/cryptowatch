import { StyledIcon } from "@styled-icons/styled-icon";
import styled from "styled-components";
import Card from "components/Card";
import { useCurrency } from "contexts/currencyContext";
import { formatCurrency } from "lib/utils";

type Props = {
  icon: StyledIcon;
  heading: string;
  content: number;
};

const OverviewCard = ({ icon: Icon, heading, content }: Props) => {
  const { currency } = useCurrency();

  return (
    <StyledCard>
      <Icon size={22} />
      <StyledHeading>{heading}</StyledHeading>
      <div>{formatCurrency(content, currency)}</div>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: grid;
  gap: ${(props) => props.theme.sizes[200]};
  min-width: 0;

  & > *:first-child {
    color: ${(props) => props.theme.colors.primary};
  }

  & > *:last-child {
    font-size: ${(props) => props.theme.fontSizes[500]};
  }
`;

const StyledHeading = styled.div`
  margin-bottom: ${(props) => props.theme.sizes[100]};
  color: ${(props) => props.theme.colors.textLight};
  font-weight: ${(props) => props.theme.fontWeights[500]};
`;

export default OverviewCard;

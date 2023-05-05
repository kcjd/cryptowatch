import { useState } from "react";
import styled from "styled-components";
import Chart from "components/Chart";
import Loader from "components/Loader";
import { Section, SectionHeader, SectionTitle } from "components/Section";
import ToggleGroup from "components/ToggleGroup";
import useHistory from "hooks/useHistory";

type Props = {
  coinId: string;
};

const options = [
  { value: 1, label: "24H" },
  { value: 7, label: "7D" },
  { value: 30, label: "30D" },
];

const HistorySection = ({ coinId }: Props) => {
  const [days, setDays] = useState(1);
  const { data: history, isValidating } = useHistory(coinId, days);

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>History</SectionTitle>
        <ToggleGroup value={days} options={options} onChange={setDays} />
      </SectionHeader>
      <StyledChartWrapper>
        {history && (
          <Chart
            data={history.prices.map((x) => ({ date: x[0], price: x[1] }))}
            showAxis
            showTooltip
          />
        )}
        {isValidating && <Loader />}
      </StyledChartWrapper>
    </Section>
  );
};

const StyledChartWrapper = styled.div`
  min-width: 0;
  height: 30rem;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    height: 38rem;
  }
`;

export default HistorySection;

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
  { value: 7, label: "7J" },
  { value: 30, label: "30J" },
];

const HistorySection = ({ coinId }: Props) => {
  const [days, setDays] = useState(1);
  const { data: history, isValidating } = useHistory(coinId, days);

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Historique</SectionTitle>
        <ToggleGroup value={days} options={options} onChange={setDays} />
      </SectionHeader>
      <StyledChartWrapper>
        {history && <Chart data={history.prices} showScales showTooltip />}
        {isValidating && <Loader />}
      </StyledChartWrapper>
    </Section>
  );
};

const StyledChartWrapper = styled.div`
  height: 26rem;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    height: 32rem;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    height: 32rem;
  }
`;

export default HistorySection;

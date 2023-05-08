import Link from "next/link";
import styled from "styled-components";
import Card from "components/Card";
import Chart from "components/Chart";
import Coin from "components/Coin";
import { CoinData } from "lib/types";

type Props = {
  coin: CoinData;
};

const TrendingCard = ({ coin }: Props) => {
  return (
    <StyledCard as={Link} href={`/coins/${coin.id}`}>
      <Coin image={coin.image} name={coin.name} symbol={coin.symbol} />
      <Coin change={coin.price_change_percentage_24h} />
      <StyledChartWrapper>
        <Chart data={coin.sparkline_in_7d.price.map((x) => ({ price: x }))} />
      </StyledChartWrapper>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 6rem;
  row-gap: ${(props) => props.theme.sizes[400]};

  @media (min-width: ${(props) => props.theme.screens.md}) {
    grid-template-rows: auto 8rem;
  }
`;

const StyledChartWrapper = styled.div`
  grid-column: 1 / -1;
  min-width: 0;
`;

export default TrendingCard;

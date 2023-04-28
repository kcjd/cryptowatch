import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Card from "components/Card";
import HistoryChart from "components/Chart";
import { Coin, CoinChange, CoinName, CoinSymbol } from "components/Coin";
import { CoinData } from "lib/types";

type Props = {
  coin: CoinData;
};

const TrendingCard = ({ coin }: Props) => {
  return (
    <StyledCard as={Link} href={`/coins/${coin.id}`}>
      <Coin>
        <Image src={coin.image} width={24} height={24} alt="" />
        <CoinName>{coin.name}</CoinName>
        <CoinSymbol>{coin.symbol}</CoinSymbol>
        <CoinChange>{coin.price_change_percentage_24h}</CoinChange>
      </Coin>
      <StyledChartWrapper>
        <HistoryChart data={coin.sparkline_in_7d.price} />
      </StyledChartWrapper>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: grid;
  gap: ${(props) => props.theme.sizes[400]};
`;

const StyledChartWrapper = styled.div`
  height: 6rem;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    height: 8rem;
  }
`;

export default TrendingCard;

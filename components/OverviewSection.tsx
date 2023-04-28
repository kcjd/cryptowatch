import Image from "next/image";
import {
  CaretDown,
  CaretUp,
  Layers,
  PieChart,
  Podium,
  TrendingUp,
} from "@styled-icons/ionicons-solid";
import styled from "styled-components";
import {
  Coin,
  CoinChange,
  CoinName,
  CoinPrice,
  CoinSymbol,
} from "components/Coin";
import Loader from "components/Loader";
import OverviewCard from "components/OverviewCard";
import { Section } from "components/Section";
import useCoin from "hooks/useCoin";

type Props = {
  coinId: string;
};

const OverviewSection = ({ coinId }: Props) => {
  const { data: coin, isValidating } = useCoin(coinId);

  return (
    <>
      {coin && (
        <Section>
          <StyledHeader>
            <Image src={coin.image} width={44} height={44} alt="" />
            <Coin>
              <CoinName>{coin.name}</CoinName>
              <CoinSymbol>{coin.symbol}</CoinSymbol>
            </Coin>
            <Coin>
              <CoinPrice>{coin.current_price}</CoinPrice>
              <CoinChange>{coin.price_change_percentage_24h}</CoinChange>
            </Coin>
          </StyledHeader>
          <StyledGrid>
            <OverviewCard
              icon={Podium}
              heading="Cap. Marché"
              content={coin.market_cap}
            />
            <OverviewCard
              icon={PieChart}
              heading="Volume"
              content={coin.total_volume}
            />
            <OverviewCard
              icon={Layers}
              heading="Offre totale"
              content={coin.circulating_supply}
            />
            <OverviewCard
              icon={TrendingUp}
              heading="Évolution 24h"
              content={coin.price_change_24h}
            />
            <OverviewCard
              icon={CaretDown}
              heading="Min. 24h"
              content={coin.low_24h}
            />
            <OverviewCard
              icon={CaretUp}
              heading="Max. 24h"
              content={coin.high_24h}
            />
          </StyledGrid>
        </Section>
      )}
      {isValidating && <Loader />}
    </>
  );
};

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0 ${(props) => props.theme.sizes[400]};
  margin-bottom: ${({ theme }) => theme.sizes[650]};

  & > *:first-child {
    grid-row: span 2;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.sizes[400]};

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default OverviewSection;

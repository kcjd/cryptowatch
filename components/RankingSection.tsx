import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card from "components/Card";
import Chart from "components/Chart";
import {
  Coin,
  CoinChange,
  CoinName,
  CoinPrice,
  CoinSymbol,
} from "components/Coin";
import Loader from "components/Loader";
import Pagination from "components/Pagination";
import { Section, SectionTitle } from "components/Section";
import useRanking from "hooks/useRanking";

const RankingSection = () => {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const { data: coins, isValidating } = useRanking(page);

  return (
    <Section>
      <SectionTitle>Ranking</SectionTitle>
      {coins && (
        <StyledWrapper>
          <StyledRow>
            <div>#</div>
            <div>Name</div>
            <div>Price</div>
            <div>24h</div>
            <div>Market Cap</div>
            <div>7 days</div>
          </StyledRow>
          {coins.map((coin) => (
            <StyledRow key={coin.id} as={Link} href={`/coins/${coin.id}`}>
              <div>{coin.market_cap_rank}</div>
              <Coin>
                <Image src={coin.image} width={24} height={24} alt="" />
                <CoinName>{coin.name}</CoinName>
                <CoinSymbol>{coin.symbol}</CoinSymbol>
              </Coin>
              <CoinPrice>{coin.current_price}</CoinPrice>
              <CoinChange>{coin.price_change_percentage_24h}</CoinChange>
              <CoinPrice>{coin.market_cap}</CoinPrice>
              <StyledChartWrapper>
                <Chart
                  data={coin.sparkline_in_7d.price.map((x) => ({ price: x }))}
                />
              </StyledChartWrapper>
            </StyledRow>
          ))}
        </StyledWrapper>
      )}
      {isValidating && <Loader />}
      <Pagination
        current={page}
        max={5}
        onChange={(page) => router.push(`?page=${page}`)}
      />
    </Section>
  );
};

const StyledWrapper = styled(Card)`
  padding: 0 !important;
  overflow-x: auto;
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.theme.sizes[600]} 4fr 2fr 2fr 2fr 2fr;
  align-items: center;
  gap: ${(props) => props.theme.sizes[500]};
  width: max(60rem, 100%);
  padding-block: ${(props) => props.theme.sizes[400]};
  padding-inline: ${(props) => props.theme.sizes[500]};
  transition: background-color 0.15s linear;

  &:first-child {
    font-weight: ${(props) => props.theme.fontWeights[600]};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  a&:hover,
  a&:focus-visible {
    background-color: ${(props) => props.theme.colors.surfaceLight};
  }
`;

const StyledChartWrapper = styled.div`
  height: 2.5rem;
`;

export default RankingSection;

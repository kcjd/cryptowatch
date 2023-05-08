import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Card from "components/Card";
import Chart from "components/Chart";
import Coin from "components/Coin";
import ErrorMessage from "components/ErrorMessage";
import Loader from "components/Loader";
import Pagination from "components/Pagination";
import Section from "components/Section";
import useRanking from "hooks/useRanking";

const RankingSection = () => {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const { data: coins, isValidating, error } = useRanking(page);

  return (
    <Section>
      <h2>Ranking</h2>
      {coins && (
        <>
          <StyledTable>
            <div>
              <div>#</div>
              <div>Name</div>
              <div>Price</div>
              <div>24h</div>
              <div>Market Cap</div>
              <div>7 days</div>
            </div>
            {coins.map((coin) => (
              <Link key={coin.id} href={`/coins/${coin.id}`}>
                <div>{coin.market_cap_rank}</div>
                <Coin
                  image={coin.image}
                  name={coin.name}
                  symbol={coin.symbol}
                />
                <Coin price={coin.current_price} />
                <Coin change={coin.price_change_percentage_24h} />
                <Coin price={coin.market_cap} />
                <StyledChartWrapper>
                  <Chart
                    data={coin.sparkline_in_7d.price.map((x) => ({ price: x }))}
                  />
                </StyledChartWrapper>
              </Link>
            ))}
          </StyledTable>
          <Pagination
            current={page}
            max={5}
            onChange={(page) => router.push(`?page=${page}`)}
          />
        </>
      )}
      {isValidating && <Loader />}
      {error && <ErrorMessage>Network Error</ErrorMessage>}
    </Section>
  );
};

const StyledTable = styled(Card)`
  padding: 0 !important;
  overflow-x: auto;

  & > * {
    display: grid;
    grid-template-columns: ${(props) => props.theme.sizes[600]} 4fr 2fr 2fr 2fr 2fr;
    align-items: center;
    gap: ${(props) => props.theme.sizes[500]};
    width: max(60rem, 100%);
    padding-block: ${(props) => props.theme.sizes[400]};
    padding-inline: ${(props) => props.theme.sizes[500]};
  }

  & > *:first-child {
    font-weight: 600;
  }

  & > *:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutral[700]};
  }

  & > a {
    transition: background-color 0.15s linear;

    &:hover,
    &:focus-visible {
      background-color: ${(props) => props.theme.colors.surface[300]};
    }
  }
`;

const StyledChartWrapper = styled.div`
  height: 2.5rem;
`;

export default RankingSection;

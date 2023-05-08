import styled from "styled-components";
import Coin from "components/Coin";
import ErrorMessage from "components/ErrorMessage";
import Loader from "components/Loader";
import OverviewCard from "components/OverviewCard";
import Section from "components/Section";
import useCoin from "hooks/useCoin";

type Props = {
  coinId: string;
};

const OverviewSection = ({ coinId }: Props) => {
  const { data: coin, isValidating, error } = useCoin(coinId);

  return (
    <>
      {coin && (
        <Section>
          <h1>
            <Coin
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              change={coin.price_change_percentage_24h}
            />
          </h1>
          <StyledGrid>
            <OverviewCard heading="Price" content={coin.current_price} />
            <OverviewCard heading="Market Cap" content={coin.market_cap} />
            <OverviewCard heading="Total Volume" content={coin.total_volume} />
            <OverviewCard heading="Total Supply" content={coin.total_supply} />
            <OverviewCard heading="All Time Low" content={coin.atl} />
            <OverviewCard heading="All Time High" content={coin.ath} />
          </StyledGrid>
        </Section>
      )}
      {isValidating && <Loader />}
      {error && <ErrorMessage>Network Error</ErrorMessage>}
    </>
  );
};

const StyledGrid = styled.div`
  display: grid;
  gap: ${(props) => props.theme.sizes[400]};

  @media (min-width: ${(props) => props.theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default OverviewSection;

import styled from "styled-components";
import Loader from "components/Loader";
import { Section, SectionTitle } from "components/Section";
import TrendingCard from "components/TrendingCard";
import useCoins from "hooks/useCoins";
import useTrending from "hooks/useTrending";

const TrendingSection = () => {
  const { data: trending } = useTrending();
  const trendingIds = trending?.coins.map(({ item }) => item.id);
  const { data: coins, isValidating } = useCoins(trendingIds?.join(","));

  return (
    <Section>
      <SectionTitle>Populaires</SectionTitle>
      {coins && (
        <StyledGrid>
          {coins.slice(0, 6).map((coin) => (
            <TrendingCard key={coin.id} coin={coin} />
          ))}
        </StyledGrid>
      )}
      {isValidating && <Loader />}
    </Section>
  );
};

const StyledGrid = styled.div`
  display: grid;
  gap: ${(props) => props.theme.sizes[400]};

  & > * {
    min-width: 0;
  }

  @media (min-width: ${(props) => props.theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default TrendingSection;

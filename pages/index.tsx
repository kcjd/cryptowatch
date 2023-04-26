import Head from "next/head";
import styled from "styled-components";
import Ranking from "components/Ranking";
import Trending from "components/Trending";

const HomePage = () => {
  return (
    <Container>
      <Head>
        <title>Cryptowatch</title>
        <meta
          name="description"
          content="Surveillez les cryptomonnaies les plus populaires en temps réel : cours, capitalisation, volume, historique et plus encore."
        />
      </Head>
      <Trending />
      <Ranking />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[800]};
`;

export default HomePage;

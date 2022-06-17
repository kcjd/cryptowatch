import Image from 'next/image'
import Link from 'next/link'

import useCurrency from 'contexts/currencyContext'
import styled from 'styled-components'
import useSWR from 'swr'

import Card from 'components/Card'
import Coin from 'components/Coin'
import CoinChange from 'components/CoinChange'
import CoinName from 'components/CoinName'
import CoinSymbol from 'components/CoinSymbol'
import FetchError from 'components/FetchError'
import HistoryChart from 'components/HistoryChart'
import Loader from 'components/Loader'
import SectionTitle from 'components/SectionTitle'

import { screens } from 'lib/mixins'
import { MarketsResponse, TrendingResponse } from 'lib/types'

const Trending = () => {
  const { currency } = useCurrency()

  const { data: trending } = useSWR<TrendingResponse>(`/search/trending`)

  const trendingIds = trending?.coins.map(({ item }) => item.id).join(',')

  const { data: coins, isValidating } = useSWR<MarketsResponse>(
    `/coins/markets?vs_currency=${currency}&ids=${trendingIds}&sparkline=true`
  )

  return (
    <section>
      <SectionTitle>Populaires</SectionTitle>
      {coins ? (
        <Grid>
          {coins.slice(0, 6).map((coin) => (
            <Link key={coin.id} href={`/coins/${coin.id}`} passHref>
              <Card as="a">
                <Header>
                  <Image src={coin.image} width={24} height={24} alt="" />
                  <CoinName>{coin.name}</CoinName>
                  <CoinSymbol>{coin.symbol}</CoinSymbol>
                  <CoinChange value={coin.price_change_percentage_24h} />
                </Header>
                <ChartWrapper>
                  <HistoryChart data={coin.sparkline_in_7d.price} />
                </ChartWrapper>
              </Card>
            </Link>
          ))}
        </Grid>
      ) : isValidating ? (
        <Loader />
      ) : (
        <FetchError />
      )}
    </section>
  )
}

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[400]};

  & > * {
    min-width: 0;
  }

  ${screens.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${screens.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Header = styled(Coin)`
  margin-bottom: ${({ theme }) => theme.sizes[400]};
`

const ChartWrapper = styled.div`
  height: 6rem;

  ${screens.md} {
    height: 8rem;
  }
`

export default Trending

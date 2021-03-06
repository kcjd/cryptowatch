import Image from 'next/image'

import {
  CaretDown,
  CaretUp,
  Layers,
  PieChart,
  Podium,
  TrendingUp,
} from '@styled-icons/ionicons-solid'
import useCurrency from 'contexts/currencyContext'
import styled from 'styled-components'
import useSWR from 'swr'

import Card from 'components/Card'
import Coin from 'components/Coin'
import CoinChange from 'components/CoinChange'
import CoinName from 'components/CoinName'
import CoinPrice from 'components/CoinPrice'
import CoinSymbol from 'components/CoinSymbol'
import FetchError from 'components/FetchError'
import Loader from 'components/Loader'

import { screens } from 'lib/mixins'
import { MarketsResponse } from 'lib/types'

type Props = {
  coinId: string
}

const Statistics = ({ coinId }: Props) => {
  const { currency } = useCurrency()

  const { data: coins, isValidating } = useSWR<MarketsResponse>(
    `/coins/markets?ids=${coinId}&vs_currency=${currency}`
  )
  const coin = coins?.[0]

  return (
    <>
      {coin ? (
        <Section>
          <Wrapper>
            <Image src={coin.image} width={44} height={44} alt="" />
            <Coin>
              <CoinName>{coin.name}</CoinName>
              <CoinSymbol>{coin.symbol}</CoinSymbol>
            </Coin>
            <Coin>
              <CoinPrice value={coin.current_price} />
              <CoinChange value={coin.price_change_percentage_24h} />
            </Coin>
          </Wrapper>
          <Grid>
            <Item>
              <Podium size={22} />
              <Heading>Cap. Marché</Heading>
              <CoinPrice value={coin.market_cap} />
            </Item>
            <Item>
              <PieChart size={22} />
              <Heading>Volume</Heading>
              <CoinPrice value={coin.total_volume} />
            </Item>
            <Item>
              <Layers size={22} />
              <Heading>Offre totale</Heading>
              <CoinPrice value={coin.circulating_supply} />
            </Item>
            <Item>
              <TrendingUp size={22} />
              <Heading>Évolution 24h</Heading>
              <CoinPrice value={coin.price_change_24h} />
            </Item>
            <Item>
              <CaretDown size={22} />
              <Heading>Min. 24h</Heading>
              <CoinPrice value={coin.low_24h} />
            </Item>
            <Item>
              <CaretUp size={22} />
              <Heading>Max. 24h</Heading>
              <CoinPrice value={coin.high_24h} />
            </Item>
          </Grid>
        </Section>
      ) : isValidating ? (
        <Loader />
      ) : (
        <FetchError />
      )}
    </>
  )
}

const Section = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.sizes[650]};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0 ${({ theme }) => theme.sizes[400]};

  & > *:first-child {
    grid-row: span 2;
  }

  & > *:nth-child(3) {
    font-size: ${({ theme }) => theme.fontSizes[600]};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.sizes[400]};

  ${screens.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Item = styled(Card)`
  display: grid;
  gap: ${({ theme }) => theme.sizes[200]};
  min-width: 0;

  & > *:first-child {
    color: ${({ theme }) => theme.colors.primary};
  }

  & > *:last-child {
    font-size: ${({ theme }) => theme.fontSizes[500]};
  }
`

const Heading = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes[100]};
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
`

export default Statistics

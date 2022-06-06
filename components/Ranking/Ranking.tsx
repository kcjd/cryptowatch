import { CoinMarketData } from '../../lib/types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { Trophy } from '@styled-icons/ionicons-solid'
import Image from 'next/image'
import Card from '../Card'
import Coin from '../Coin'
import CoinName from '../CoinName'
import CoinSymbol from '../CoinSymbol'
import CoinChange from '../CoinChange'
import CoinPrice from '../CoinPrice'
import HistoryChart from '../HistoryChart'
import Pagination from '../Pagination'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

type Props = {
  coins: CoinMarketData[]
  currency: string
}

const Ranking = ({ coins, currency }: Props) => {
  const router = useRouter()
  const page = Number(router.query.page || 1)

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <Trophy size={16} />
          Top 100
        </SectionTitle>
      </SectionHeader>
      <Wrapper>
        <Row>
          <div>#</div>
          <div>Nom</div>
          <div>Prix</div>
          <div>24h</div>
          <div>Cap. Marché</div>
          <div>7 jours</div>
        </Row>
        {coins.map((coin) => (
          <Link key={coin.id} href={`/coins/${coin.id}`} passHref>
            <Row as="a">
              <div>{coin.market_cap_rank}</div>
              <Coin>
                <Image src={coin.image} width={24} height={24} alt="" />
                <CoinName>{coin.name}</CoinName>
                <CoinSymbol>{coin.symbol}</CoinSymbol>
              </Coin>
              <CoinPrice value={coin.current_price} currency={currency} />
              <CoinChange value={coin.price_change_percentage_24h} />
              <CoinPrice value={coin.market_cap} currency={currency} />
              <ChartWrapper>
                <HistoryChart data={coin.sparkline_in_7d.price} />
              </ChartWrapper>
            </Row>
          </Link>
        ))}
      </Wrapper>
      <Pagination current={page} max={5} />
    </Section>
  )
}

const Wrapper = styled(Card)`
  padding: 0;
  overflow-x: auto;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 2fr 2fr 2fr;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[500]};
  width: max(60rem, 100%);
  padding: ${({ theme }) => theme.sizes[400]} ${({ theme }) => theme.sizes[500]};

  transition: background-color 0.15s linear;

  &:first-child {
    font-weight: ${({ theme }) => theme.fontWeights[600]};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  a&:hover,
  a&:focus-visible {
    background-color: ${({ theme }) => theme.colors.surfaceLight};
  }
`

const ChartWrapper = styled.div`
  height: 2.5rem;
`

export default Ranking

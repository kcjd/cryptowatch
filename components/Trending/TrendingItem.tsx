import { CoinMarketData } from '../../lib/types'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../Card'
import Coin from '../Coin'
import CoinChange from '../CoinChange'
import CoinName from '../CoinName'
import CoinSymbol from '../CoinSymbol'
import HistoryChart from '../HistoryChart'
import styled from 'styled-components'
import { mq } from '../../lib/mixins'

type Props = {
  coin: CoinMarketData
}

const TrendingItem = ({ coin }: Props) => {
  return (
    <Link href={`/coins/${coin.id}`} passHref>
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
  )
}

const Header = styled(Coin)`
  margin-bottom: ${({ theme }) => theme.sizes[400]};
`

const ChartWrapper = styled.div`
  height: 6rem;

  ${mq('md')`
    height: 8rem;
  `}
`

export default TrendingItem

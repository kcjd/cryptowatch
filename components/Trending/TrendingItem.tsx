import { CoinMarketData } from '../../types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Card from '../Card'
import Coin from '../Coin'
import CoinChange from '../CoinChange'
import CoinName from '../CoinName'
import CoinSymbol from '../CoinSymbol'
import HistoryChart from '../HistoryChart'
import styled from 'styled-components'

type Props = {
  coin: CoinMarketData
}

const TrendingItem = ({ coin }: Props) => {
  const router = useRouter()

  return (
    <Link href={`/coins/${coin.id}`} passHref>
      <Card as="a">
        <Header>
          <Image src={coin.image} width={24} height={24} alt="" />
          <CoinName>{coin.name}</CoinName>
          <CoinSymbol>{coin.symbol}</CoinSymbol>
          <CoinChange value={coin.price_change_percentage_24h} />
        </Header>

        <HistoryChart data={coin.sparkline_in_7d.price} />
      </Card>
    </Link>
  )
}

const Header = styled(Coin)`
  margin-bottom: ${({ theme }) => theme.sizes[400]};
`

export default TrendingItem

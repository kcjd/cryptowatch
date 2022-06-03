import { CoinMarketData } from '../../types'
import Image from 'next/image'
import styled from 'styled-components'
import Coin from '../Coin'
import CoinChange from '../CoinChange'
import CoinName from '../CoinName'
import CoinPrice from '../CoinPrice'
import CoinSymbol from '../CoinSymbol'

type Props = {
  coin: CoinMarketData
  currency: string
}

const Overview = ({ coin, currency }: Props) => {
  return (
    <section>
      <NameWrapper>
        <Image src={coin.image} width={28} height={28} alt="" />
        <CoinName>{coin.name}</CoinName>
        <CoinSymbol>{coin.symbol}</CoinSymbol>
      </NameWrapper>
      <PriceWrapper>
        <CoinPrice value={coin.current_price} currency={currency} />
        <CoinChange value={coin.price_change_percentage_24h} />
      </PriceWrapper>
    </section>
  )
}

const NameWrapper = styled(Coin)`
  margin-bottom: ${({ theme }) => theme.sizes[200]};
  font-size: ${({ theme }) => theme.fontSizes[500]};
`

const PriceWrapper = styled(Coin)`
  font-size: ${({ theme }) => theme.fontSizes[700]};
`

export default Overview

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
      <Wrapper>
        <Image src={coin.image} width={44} height={44} alt="" />
        <Coin>
          <CoinName>{coin.name}</CoinName>
          <CoinSymbol>{coin.symbol}</CoinSymbol>
        </Coin>
        <Coin>
          <CoinPrice value={coin.current_price} currency={currency} />
          <CoinChange value={coin.price_change_percentage_24h} />
        </Coin>
      </Wrapper>
    </section>
  )
}

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

export default Overview

import { MarketsResponse } from '../../types'
import { useRouter } from 'next/router'
import Image from 'next/image'
import useSWR from 'swr'
import Coin from '../Coin'
import CoinChange from '../CoinChange'
import CoinName from '../CoinName'
import CoinPrice from '../CoinPrice'
import CoinSymbol from '../CoinSymbol'
import { usePreferences } from '../../context/preferencesContext'
import { API_ENDPOINTS } from '../../helpers/constants'
import styled from 'styled-components'

const Overview = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { preferences } = usePreferences()
  const { data } = useSWR<MarketsResponse>(
    id ? [API_ENDPOINTS.markets, { ids: id, vs_currency: preferences.currency }] : null
  )
  const coin = data?.[0]

  return (
    <section>
      {coin && (
        <>
          <NameWrapper>
            <Image src={coin.image} width={28} height={28} alt="" />
            <CoinName>{coin.name}</CoinName>
            <CoinSymbol>{coin.symbol}</CoinSymbol>
          </NameWrapper>

          <PriceWrapper>
            <CoinPrice value={coin.current_price} />
            <CoinChange value={coin.price_change_percentage_24h} />
          </PriceWrapper>
        </>
      )}
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

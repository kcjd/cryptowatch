import { MarketsResponse, TrendingResponse } from '../../types'
import styled from 'styled-components'
import useSWR from 'swr'
import { Flash } from '@styled-icons/ionicons-solid'
import SectionTitle from '../SectionTitle'
import TrendingItem from './TrendingItem'
import { usePreferences } from '../../context/preferencesContext'
import { API_ENDPOINTS } from '../../helpers/constants'
import { mq } from '../../helpers/mixins'

const Trending = () => {
  const { preferences } = usePreferences()
  const { data: trending } = useSWR<TrendingResponse>(API_ENDPOINTS.trending)
  const ids = trending?.coins
    .map(({ item }) => item.id)
    .slice(0, 6)
    .join(',')
  const { data: trendingCoins } = useSWR<MarketsResponse>(
    ids ? [API_ENDPOINTS.markets, { ids, vs_currency: preferences.currency, sparkline: true }] : null
  )

  return (
    <section>
      <SectionTitle>
        <Flash size={16} />
        Populaires
      </SectionTitle>

      <Grid>
        {trendingCoins?.map((coin) => (
          <TrendingItem key={coin.id} coin={coin} />
        ))}
      </Grid>
    </section>
  )
}

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[400]};

  & > * {
    min-width: 0;
  }

  ${mq('md')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${mq('lg')`
    grid-template-columns: repeat(3, 1fr);
  `}
`

export default Trending

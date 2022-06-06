import { Flash } from '@styled-icons/ionicons-solid'
import styled from 'styled-components'

import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import SectionTitle from 'components/SectionTitle'

import { mq } from 'lib/mixins'
import { CoinMarketData } from 'lib/types'

import TrendingItem from './TrendingItem'

type Props = {
  coins: CoinMarketData[]
}

const Trending = ({ coins }: Props) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <Flash size={16} />
          Populaires
        </SectionTitle>
      </SectionHeader>
      <Grid>
        {coins.map((coin) => (
          <TrendingItem key={coin.id} coin={coin} />
        ))}
      </Grid>
    </Section>
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

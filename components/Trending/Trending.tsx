import { CoinMarketData } from '../../types'
import styled from 'styled-components'
import { Flash } from '@styled-icons/ionicons-solid'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'
import TrendingItem from './TrendingItem'
import { mq } from '../../helpers/mixins'

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

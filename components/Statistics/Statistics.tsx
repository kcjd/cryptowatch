import { InformationCircle } from '@styled-icons/ionicons-solid'
import styled from 'styled-components'

import Card from 'components/Card'
import CoinPrice from 'components/CoinPrice'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import SectionTitle from 'components/SectionTitle'

import { CoinMarketData } from 'lib/types'

type Props = {
  coin: CoinMarketData
  currency: string
}

const Statistics = ({ coin, currency }: Props) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <InformationCircle size={16} />
          Statistiques
        </SectionTitle>
      </SectionHeader>
      <Card>
        <Row>
          <div>Cours</div>
          <CoinPrice value={coin.current_price} currency={currency} />
        </Row>
        <Row>
          <div>Évolution 24h</div>
          <CoinPrice value={coin.price_change_24h} currency={currency} />
        </Row>
        <Row>
          <div>Cap. Marché</div>
          <CoinPrice value={coin.market_cap} currency={currency} />
        </Row>
        <Row>
          <div>Volume 24h</div>
          <CoinPrice value={coin.total_volume} currency={currency} />
        </Row>
        <Row>
          <div>Min. 24h</div>
          <CoinPrice value={coin.low_24h} currency={currency} />
        </Row>
        <Row>
          <div>Max. 24h</div>
          <CoinPrice value={coin.high_24h} currency={currency} />
        </Row>
        <Row>
          <div>Min. Historique</div>
          <CoinPrice value={coin.atl} currency={currency} />
        </Row>
        <Row>
          <div>Max. Historique</div>
          <CoinPrice value={coin.ath} currency={currency} />
        </Row>
      </Card>
    </Section>
  )
}

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.sizes[400]};
  padding-block: ${({ theme }) => theme.sizes[400]};

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  & > *:first-child {
    font-weight: ${({ theme }) => theme.fontWeights[600]};
  }

  & > *:last-child {
    color: ${({ theme }) => theme.colors.textLight};
  }
`

export default Statistics

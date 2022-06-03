import { CoinMarketData } from '../../types'
import { InformationCircle } from '@styled-icons/ionicons-solid'
import styled from 'styled-components'
import Card from '../Card'
import CoinPrice from '../CoinPrice'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

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
        <Table>
          <tbody>
            <tr>
              <th scope="row">Cours</th>
              <td>
                <CoinPrice value={coin.current_price} currency={currency} />
              </td>
            </tr>
            <tr>
              <th scope="row">Évolution 24h</th>
              <td>
                <CoinPrice value={coin.price_change_24h} currency={currency} />
              </td>
            </tr>
            <tr>
              <th scope="row">Cap. Marché</th>
              <td>
                <CoinPrice value={coin.market_cap} currency={currency} />
              </td>
            </tr>
            <tr>
              <th scope="row">Volume 24h</th>
              <td>
                <CoinPrice value={coin.total_volume} currency={currency} />
              </td>
            </tr>
            <tr>
              <th scope="row">Min. 24h</th>
              <td>
                <CoinPrice value={coin.low_24h} currency={currency} />
              </td>
            </tr>
            <tr>
              <th scope="row">Max. 24h</th>
              <td>
                <CoinPrice value={coin.high_24h} currency={currency} />
              </td>
            </tr>
            <tr>
              <th scope="row">Min. Historique</th>
              <td>
                <CoinPrice value={coin.atl} currency={currency} />
              </td>
            </tr>
            <tr>
              <th scope="row">Max. Historique</th>
              <td>
                <CoinPrice value={coin.ath} currency={currency} />
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Section>
  )
}

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;

  & tr:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  & th {
    font-weight: ${({ theme }) => theme.fontWeights[600]};
  }

  & th,
  & td {
    padding-block: ${({ theme }) => theme.sizes[400]};
  }

  & td {
    color: ${({ theme }) => theme.colors.textLight};
  }
`

export default Statistics

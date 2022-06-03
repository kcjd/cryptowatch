import { MarketsResponse } from '../../types'
import { InformationCircle } from '@styled-icons/ionicons-solid'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Card from '../Card'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'
import { usePreferences } from '../../context/preferencesContext'
import { API_ENDPOINTS } from '../../helpers/constants'
import CoinPrice from '../CoinPrice'
import styled from 'styled-components'

const Statistics = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { currency } = usePreferences()
  const { data } = useSWR<MarketsResponse>(id ? [API_ENDPOINTS.markets, { ids: id, vs_currency: currency }] : null)
  const coin = data?.[0]

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <InformationCircle size={16} />
          Statistiques
        </SectionTitle>
      </SectionHeader>
      <Card>
        {coin && (
          <Table>
            <tbody>
              <tr>
                <th scope="row">Cours</th>
                <td>
                  <CoinPrice value={coin.current_price} />
                </td>
              </tr>
              <tr>
                <th scope="row">Évolution 24h</th>
                <td>
                  <CoinPrice value={coin.price_change_24h} />
                </td>
              </tr>
              <tr>
                <th scope="row">Cap. Marché</th>
                <td>
                  <CoinPrice value={coin.market_cap} />
                </td>
              </tr>
              <tr>
                <th scope="row">Volume 24h</th>
                <td>
                  <CoinPrice value={coin.total_volume} />
                </td>
              </tr>
              <tr>
                <th scope="row">Min. 24h</th>
                <td>
                  <CoinPrice value={coin.low_24h} />
                </td>
              </tr>
              <tr>
                <th scope="row">Max. 24h</th>
                <td>
                  <CoinPrice value={coin.high_24h} />
                </td>
              </tr>
              <tr>
                <th scope="row">Min. Historique</th>
                <td>
                  <CoinPrice value={coin.atl} />
                </td>
              </tr>
              <tr>
                <th scope="row">Max. Historique</th>
                <td>
                  <CoinPrice value={coin.ath} />
                </td>
              </tr>
            </tbody>
          </Table>
        )}
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

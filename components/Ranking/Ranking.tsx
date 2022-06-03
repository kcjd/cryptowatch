import { MarketsResponse } from '../../types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import styled from 'styled-components'
import { Trophy } from '@styled-icons/ionicons-solid'
import Image from 'next/image'
import Card from '../Card'
import Coin from '../Coin'
import CoinName from '../CoinName'
import CoinSymbol from '../CoinSymbol'
import CoinChange from '../CoinChange'
import CoinPrice from '../CoinPrice'
import HistoryChart from '../HistoryChart'
import Pagination from '../Pagination'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'
import { usePreferences } from '../../context/preferencesContext'
import { API_ENDPOINTS } from '../../helpers/constants'

const Ranking = () => {
  const router = useRouter()
  const page = Number(router.query.page || 1)
  const { currency } = usePreferences()

  const { data } = useSWR<MarketsResponse>([
    API_ENDPOINTS.markets,
    { vs_currency: currency, page, per_page: 25, sparkline: true }
  ])

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <Trophy size={16} />
          Top 100
        </SectionTitle>
      </SectionHeader>
      <Wrapper>
        <ScrollContainer>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>24h</th>
                <th>Cap. Marché</th>
                <th>7 jours</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((coin) => (
                <tr key={coin.id}>
                  <td>{coin.market_cap_rank}</td>
                  <td>
                    <Link href={`/coins/${coin.id}`} passHref>
                      <Coin as="a">
                        <Image src={coin.image} width={24} height={24} alt="" />
                        <CoinName>{coin.name}</CoinName>
                        <CoinSymbol>{coin.symbol}</CoinSymbol>
                      </Coin>
                    </Link>
                  </td>
                  <td>
                    <CoinPrice value={coin.current_price} />
                  </td>
                  <td>
                    <CoinChange value={coin.price_change_percentage_24h} />
                  </td>
                  <td>
                    <CoinPrice value={coin.market_cap} />
                  </td>
                  <td>
                    <HistoryChart data={coin.sparkline_in_7d.price} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollContainer>
        <Pagination current={page} max={4} onChange={(page) => router.push(`?page=${page}`)} />
      </Wrapper>
    </Section>
  )
}

const Wrapper = styled(Card)`
  padding: 0;
`

const ScrollContainer = styled.div`
  overflow-x: auto;
`

const Table = styled.table`
  width: max(60rem, 100%);
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;

  & tr {
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    transition: background-color 0.15s linear;
  }

  & tbody > tr:hover {
    background-color: ${({ theme }) => theme.colors.surfaceLight};
  }

  & th {
    font-weight: ${({ theme }) => theme.fontWeights[600]};

    &:first-child {
      width: ${({ theme }) => theme.sizes[850]};
    }

    &:nth-child(2) {
      width: 30%;
    }

    &:nth-child(5) {
      width: 20%;
    }
  }

  & th,
  & td {
    padding: ${({ theme }) => theme.sizes[400]} ${({ theme }) => theme.sizes[500]};
  }

  & a:after {
    content: '';
    position: absolute;
    inset: 0;
  }
`

export default Ranking

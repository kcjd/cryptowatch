import useCurrency from 'contexts/currencyContext'
import { useState } from 'react'
import styled from 'styled-components'
import useSWR from 'swr'

import FetchError from 'components/FetchError'
import FilterGroup from 'components/FilterGroup'
import HistoryChart from 'components/HistoryChart'
import Loader from 'components/Loader'
import SectionTitle from 'components/SectionTitle'

import { screens } from 'lib/mixins'
import { MarketChartResponse } from 'lib/types'

type Props = {
  coinId: string
}

const daysFilterList = [
  { value: 1, label: '24H' },
  { value: 7, label: '7J' },
  { value: 30, label: '30J' },
]

const History = ({ coinId }: Props) => {
  const { currency } = useCurrency()

  const [daysFilter, setDaysFilter] = useState(1)

  const { data: historyData, isValidating } = useSWR<MarketChartResponse>(
    `/coins/${coinId}/market_chart?days=${daysFilter}&vs_currency=${currency}`
  )

  return (
    <section>
      <Header>
        <SectionTitle>Historique</SectionTitle>
        <FilterGroup
          value={daysFilter}
          filters={daysFilterList}
          onChange={setDaysFilter}
        />
      </Header>
      <ChartWrapper>
        {historyData ? (
          <HistoryChart data={historyData.prices} showScales showTooltip />
        ) : isValidating ? (
          <Loader />
        ) : (
          <FetchError />
        )}
      </ChartWrapper>
    </section>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.sizes[450]};

  & ${SectionTitle} {
    margin-bottom: 0;
  }
`

const ChartWrapper = styled.div`
  height: 26rem;

  ${screens.md} {
    height: 32rem;
  }

  ${screens.lg} {
    height: 32rem;
  }
`

export default History

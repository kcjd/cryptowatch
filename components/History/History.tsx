import { useRouter } from 'next/router'

import { setCookie } from 'nookies'
import styled from 'styled-components'

import FilterGroup from 'components/FilterGroup'
import HistoryChart from 'components/HistoryChart'
import SectionTitle from 'components/SectionTitle'

import { screens } from 'lib/mixins'
import { HistoryChartData } from 'lib/types'

type Props = {
  data: HistoryChartData
  currency: string
  days: number
}

const filters = [
  { value: 1, label: '24H' },
  { value: 7, label: '7J' },
  { value: 30, label: '30J' },
]

const History = ({ data, currency, days }: Props) => {
  const router = useRouter()

  const handleDaysChange = (days: number) => {
    setCookie(null, 'days', days.toString(), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    router.reload()
  }

  return (
    <section>
      <Header>
        <SectionTitle>Historique</SectionTitle>
        <FilterGroup
          value={days}
          filters={filters}
          onChange={handleDaysChange}
        />
      </Header>
      <ChartWrapper>
        <HistoryChart data={data} currency={currency} showScales showTooltip />
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

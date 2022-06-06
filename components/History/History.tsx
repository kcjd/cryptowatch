import { useRouter } from 'next/router'

import { Analytics } from '@styled-icons/ionicons-solid'
import { setCookie } from 'nookies'
import styled from 'styled-components'

import Card from 'components/Card'
import FilterGroup from 'components/FilterGroup'
import HistoryChart from 'components/HistoryChart'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import SectionTitle from 'components/SectionTitle'

import { mq } from 'lib/mixins'
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

    router.push(router.asPath)
  }

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <Analytics size={16} />
          Historique
        </SectionTitle>
        <FilterGroup
          value={days}
          filters={filters}
          onChange={handleDaysChange}
        />
      </SectionHeader>
      <ChartWrapper>
        <HistoryChart data={data} currency={currency} showScales showTooltip />
      </ChartWrapper>
    </Section>
  )
}

const ChartWrapper = styled(Card)`
  height: 26rem;

  ${mq('md')`
    height: 32rem;
  `}
`

export default History

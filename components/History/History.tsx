import { HistoryChartData } from '../../types'
import { Analytics } from '@styled-icons/ionicons-solid'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import Card from '../Card'
import FilterGroup from '../FilterGroup'
import HistoryChart from '../HistoryChart'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

type Props = {
  data: HistoryChartData
  currency: string
  days: number
}

const filters = [
  { value: 1, label: '24H' },
  { value: 7, label: '7J' },
  { value: 30, label: '30J' }
]

const History = ({ data, currency, days }: Props) => {
  const router = useRouter()

  const handleDaysChange = (days: number) => {
    setCookie(null, 'days', days.toString(), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
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
        <FilterGroup value={days} filters={filters} onChange={handleDaysChange} />
      </SectionHeader>
      <Card>{data && <HistoryChart height={120} data={data} currency={currency} showScales showTooltip />}</Card>
    </Section>
  )
}

export default History

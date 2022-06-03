import { MarketChartResponse } from '../../types'
import { Analytics } from '@styled-icons/ionicons-solid'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Card from '../Card'
import FilterGroup from '../FilterGroup'
import HistoryChart from '../HistoryChart'
import Section from '../Section'
import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'
import { usePreferences } from '../../context/preferencesContext'
import { API_ENDPOINTS } from '../../helpers/constants'

const filters = [
  { value: 1, label: '24h' },
  { value: 7, label: '7 jours' },
  { value: 30, label: '30 jours' }
]

const History = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { currency, historyDays, setHistoryDays } = usePreferences()
  const { data } = useSWR<MarketChartResponse>(
    id ? [API_ENDPOINTS.marketChart(id), { vs_currency: currency, days: historyDays }] : null
  )

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          <Analytics size={16} />
          Historique
        </SectionTitle>
        <FilterGroup value={historyDays} filters={filters} onChange={setHistoryDays} />
      </SectionHeader>
      <Card>{data && <HistoryChart height={140} data={data?.prices} showScales showTooltip />}</Card>
    </Section>
  )
}

export default History

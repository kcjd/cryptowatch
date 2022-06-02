import { Analytics } from '@styled-icons/ionicons-solid'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR from 'swr'
import { usePreferences } from '../../context/preferencesContext'
import { API_ENDPOINTS } from '../../helpers/constants'
import { MarketChartResponse } from '../../types'
import Card from '../Card'
import FilterGroup from '../FilterGroup'
import HistoryChart from '../HistoryChart'
import SectionTitle from '../SectionTitle'

const filters = [
  { value: 1, label: '24h' },
  { value: 7, label: '7 jours' },
  { value: 30, label: '30 jours' }
]

const History = () => {
  const router = useRouter()
  const id = router.query.id as string
  const days = Number(router.query.days || 1)
  const { preferences } = usePreferences()
  const { data } = useSWR<MarketChartResponse>(
    id ? [API_ENDPOINTS.marketChart(id), { vs_currency: preferences.currency, days }] : null
  )

  return (
    <section>
      <SectionTitle>
        <Analytics size={16} />
        Historique
        <FilterGroup value={days} filters={filters} onChange={(value) => router.push(`/coins/${id}?days=${value}`)} />
      </SectionTitle>

      <Card>{data && <HistoryChart height={120} data={data?.prices} showScales showTooltip />}</Card>
    </section>
  )
}

export default History

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  ChartData,
  ChartOptions,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip
} from 'chart.js'
import 'chartjs-adapter-dayjs'
import { getDate, getPrice } from '../../helpers/utils'
import { HistoryChartData } from '../../types'
import theme from '../../theme'

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, TimeScale, Tooltip)

type Props = {
  data: HistoryChartData
  showScales?: boolean
  showTooltip?: boolean
}

const SparklineChart = ({ data, showScales = false, showTooltip = false }: Props) => {
  const points = data.map((v) => (typeof v === 'number' ? v : v[1]))
  const labels = data.map((v, i) => (typeof v === 'number' ? i : getDate(v[0])))

  const isChangeUp = points[points.length - 1] > points[0]

  const chartData: ChartData<'line'> = {
    labels,
    datasets: [
      {
        data: points
      }
    ]
  }

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'DD/MM'
          },
          tooltipFormat: 'DD/MM/YYYY HH:mm'
        },
        display: showScales,
        grid: {
          display: false
        },
        ticks: {
          color: theme.colors.textLight
        }
      },
      y: {
        display: showScales,
        grid: {
          color: theme.colors.border
        },
        ticks: {
          color: theme.colors.textLight,
          callback: (v) => getPrice(v)
        }
      }
    },
    elements: {
      line: {
        borderColor: isChangeUp ? theme.colors.success : theme.colors.danger,
        borderWidth: 2
      },
      point: {
        radius: 0
      }
    },
    plugins: {
      tooltip: {
        enabled: showTooltip,
        displayColors: false,
        backgroundColor: theme.colors.surface,
        bodyColor: theme.colors.text,
        bodyFont: {
          size: 14
        },
        titleColor: theme.colors.text,
        titleFont: {
          size: 14
        },
        padding: 16
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    }
  }

  return <Line width={200} height={60} data={chartData} options={options} />
}

export default SparklineChart

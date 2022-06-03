import { HistoryChartData } from '../../types'
import { Line } from 'react-chartjs-2'
import { isDayjs } from 'dayjs'
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
import theme from '../../theme'

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, TimeScale, Tooltip)

type Props = {
  data: HistoryChartData
  currency?: string
  width?: number
  height?: number
  showScales?: boolean
  showTooltip?: boolean
}

const SparklineChart = ({ data, width = 200, height = 60, showScales = false, showTooltip = false }: Props) => {
  const points = data.map((v) => (typeof v === 'number' ? v : v[1]))
  const labels = data.map((v, i) => (typeof v === 'number' ? i : getDate(v[0])))

  const startDate = labels[0]
  const startValue = points[0]
  const endDate = labels[labels.length - 1]
  const endValue = points[points.length - 1]

  const unit = isDayjs(endDate) && endDate.diff(startDate, 'day') > 1 ? 'day' : 'hour'

  const isChangeUp = endValue > startValue

  const chartData: ChartData<'line'> = {
    labels,
    datasets: [
      {
        data: points
      }
    ]
  }

  const options: ChartOptions<'line'> = {
    animation: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit,
          displayFormats: {
            day: 'DD/MM',
            hour: 'HH:mm'
          },
          tooltipFormat: 'DD/MM/YYYY HH:mm'
        },
        display: showScales,
        grid: {
          display: false
        },
        ticks: {
          padding: 12,
          maxRotation: 0,
          color: theme.colors.textLight,
          font: {
            family: theme.fontFamilies.base,
            weight: '500'
          }
        }
      },
      y: {
        display: showScales,
        grid: {
          color: theme.colors.border
        },
        ticks: {
          color: theme.colors.textLight,
          font: {
            family: theme.fontFamilies.base,
            weight: '500'
          },
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
        animation: {
          duration: 100,
          easing: 'linear'
        },
        callbacks: {
          label: (context) => getPrice(context.raw as number)
        },
        enabled: showTooltip,
        displayColors: false,
        padding: 12,
        cornerRadius: 8,
        backgroundColor: theme.colors.text,
        titleColor: theme.colors.primary,
        bodyColor: theme.colors.background,
        titleFont: {
          family: theme.fontFamilies.base,
          size: 14,
          weight: '500'
        },
        bodyFont: {
          family: theme.fontFamilies.base,
          size: 16,
          weight: '600'
        }
      }
    },
    interaction: {
      mode: 'nearest',
      intersect: false
    }
  }

  return <Line width={width} height={height} data={chartData} options={options} />
}

export default SparklineChart

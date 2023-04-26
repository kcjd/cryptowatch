import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-dayjs";
import useCurrency from "contexts/currencyContext";
import dayjs, { isDayjs } from "dayjs";
import { Line } from "react-chartjs-2";
import theme from "lib/theme";
import { HistoryChartData } from "lib/types";
import { getPrice } from "lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Tooltip
);

type Props = {
  data: HistoryChartData;
  showScales?: boolean;
  showTooltip?: boolean;
};

const HistoryChart = ({
  data,
  showScales = false,
  showTooltip = false,
}: Props) => {
  const { currency } = useCurrency();

  const points = data.map((v) => (typeof v === "number" ? v : v[1]));
  const labels = data.map((v, i) => (typeof v === "number" ? i : dayjs(v[0])));

  const startDate = labels[0];
  const startValue = points[0];
  const endDate = labels[labels.length - 1];
  const endValue = points[points.length - 1];

  const unit =
    isDayjs(endDate) && endDate.diff(startDate, "day") > 1 ? "day" : "hour";

  const isChangeUp = endValue > startValue;

  const chartData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        data: points,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    animation: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: showScales,
        type: "time",
        time: {
          unit,
          displayFormats: {
            day: "DD/MM",
            hour: "HH:mm",
          },
          tooltipFormat: "DD/MM/YYYY HH:mm",
        },
        grid: {
          display: false,
        },
        ticks: {
          autoSkipPadding: 12,
          padding: 12,
          maxRotation: 0,
          color: theme.colors.textLight,
          font: {
            family: theme.fontFamilies.base,
            weight: "500",
          },
        },
      },
      y: {
        display: showScales,
        grid: {
          color: theme.colors.border,
          drawBorder: false,
        },
        ticks: {
          color: theme.colors.textLight,
          font: {
            family: theme.fontFamilies.base,
            weight: "500",
          },
          callback: (v) => getPrice(v, currency),
        },
      },
    },
    elements: {
      line: {
        borderColor: isChangeUp ? theme.colors.success : theme.colors.danger,
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      tooltip: {
        enabled: showTooltip,
        animation: {
          duration: 100,
          easing: "linear",
        },
        callbacks: {
          label: (context) => getPrice(context.raw as number, currency),
        },
        displayColors: false,
        padding: 12,
        cornerRadius: 8,
        backgroundColor: theme.colors.text,
        titleColor: theme.colors.primary,
        bodyColor: theme.colors.background,
        titleFont: {
          family: theme.fontFamilies.base,
          size: 12,
          weight: "500",
        },
        bodyFont: {
          family: theme.fontFamilies.base,
          size: 14,
          weight: "600",
        },
      },
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
  };

  return <Line data={chartData} options={options} />;
};

export default HistoryChart;

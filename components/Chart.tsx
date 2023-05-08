import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useCurrency } from "contexts/currencyContext";
import theme from "lib/theme";
import { formatCurrency, formatDate, getTicks, getUnit } from "lib/utils";

type Props = {
  data: {
    price: number;
    date?: number;
  }[];
  showAxis?: boolean;
  showTooltip?: boolean;
};

const Chart = ({ data, showAxis, showTooltip }: Props) => {
  const { currency } = useCurrency();
  const chartData = data.map((x, i) => ({ ...x, date: x.date || i }));
  const unit = getUnit(chartData.map((x) => x.date));
  const ticks = getTicks(chartData.map((x) => x.date));
  const isChangeUp = chartData[chartData.length - 1].price > chartData[0].price;

  return (
    <ResponsiveContainer>
      <LineChart
        data={chartData}
        margin={{ top: 4, right: 4, bottom: 4, left: 4 }}
        style={{ cursor: "unset" }}
      >
        {showAxis && (
          <CartesianGrid
            horizontal={showAxis}
            vertical={false}
            stroke={theme.colors.neutral[800]}
          />
        )}
        {showTooltip && (
          <Tooltip
            isAnimationActive={false}
            contentStyle={{
              padding: theme.sizes[200],
              borderRadius: theme.borderRadius[200],
              borderWidth: 0,
              backgroundColor: theme.colors.neutral[50],
            }}
            cursor={{ stroke: theme.colors.neutral[600] }}
            labelFormatter={(v: number) => formatDate(v)}
            labelStyle={{
              fontSize: theme.fontSizes[300],
              fontWeight: 500,
              color: theme.colors.primary[500],
            }}
            formatter={(v) => [formatCurrency(Number(v), currency)]}
            itemStyle={{
              fontSize: theme.fontSizes[400],
              fontWeight: 600,
              color: theme.colors.neutral[900],
            }}
          />
        )}
        <XAxis
          hide={!showAxis}
          dataKey="date"
          type="number"
          domain={["dataMin", "dataMax"]}
          axisLine={false}
          ticks={ticks}
          tick={{
            fontSize: theme.fontSizes[200],
            fontWeight: 500,
            fill: theme.colors.neutral[400],
          }}
          tickFormatter={(v: number) => formatDate(v, unit)}
          tickLine={false}
          minTickGap={32}
        />
        <YAxis
          hide={!showAxis}
          type="number"
          domain={["auto", "auto"]}
          axisLine={false}
          tick={{
            fontSize: theme.fontSizes[200],
            fontWeight: 500,
            fill: theme.colors.neutral[400],
          }}
          tickFormatter={(v: number) => formatCurrency(v, currency)}
          tickCount={10}
          tickLine={false}
        />
        <Line
          dataKey="price"
          stroke={
            isChangeUp ? theme.colors.success[400] : theme.colors.danger[400]
          }
          strokeWidth={1.5}
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;

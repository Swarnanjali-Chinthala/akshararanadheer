import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: 0, value: 100 },
  { year: 5, value: 73 },
  { year: 10, value: 54 },
  { year: 15, value: 40 },
  { year: 20, value: 30 }
];

function InflationChart() {

  return (

    <ResponsiveContainer width="100%" height={300}>

      <LineChart data={data}>

        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="value" />

      </LineChart>

    </ResponsiveContainer>

  );
}

export default InflationChart;
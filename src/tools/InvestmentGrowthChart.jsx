import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function InvestmentGrowthChart() {

  const data = [
    { year: 1, value: 60000 },
    { year: 5, value: 420000 },
    { year: 10, value: 1160000 },
    { year: 15, value: 2500000 },
    { year: 20, value: 5000000 }
  ];

  return (

    <div className="bg-white p-6 shadow rounded-xl w-full">

      <h2 className="text-xl font-bold mb-4">
        Investment Growth Example
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="value" />

        </LineChart>
      </ResponsiveContainer>

    </div>

  );
}

export default InvestmentGrowthChart;
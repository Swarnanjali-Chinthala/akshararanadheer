import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Equity", value: 60 },
  { name: "Debt", value: 25 },
  { name: "Gold", value: 15 }
];

const colors = ["#22c55e", "#3b82f6", "#f59e0b"];

function AssetAllocationChart() {

  return (

    <ResponsiveContainer width="100%" height={300}>

      <PieChart>

        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
        >

          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index]} />
          ))}

        </Pie>

        <Tooltip />

      </PieChart>

    </ResponsiveContainer>

  );
}

export default AssetAllocationChart;
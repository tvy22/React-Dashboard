import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2600 },
  { month: "May", revenue: 2400 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3800 },
  { month: "Aug", revenue: 4000 },
  { month: "Sep", revenue: 2700 },
  { month: "Oct", revenue: 3000 },
  { month: "Nov", revenue: 3100 },
  { month: "Dec", revenue: 5000 },
];

const ChartComponent = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Last 12 months</h2>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]} />
          <Bar dataKey="revenue" fill="#7cb9e8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;

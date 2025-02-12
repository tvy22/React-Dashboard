import { Wallet, Clock, FileText, Users } from "lucide-react";

const DashboardCard = () => {
  const stats = [
    { icon: <Wallet size={20} />, label: "Collected", value: "$13,052.00" },
    { icon: <Clock size={20} />, label: "Pending", value: "$123.00" },
    { icon: <FileText size={20} />, label: "Total Invoices", value: "1" },
    { icon: <Users size={20} />, label: "Total Customers", value: "1" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 text-gray-600">
            {stat.icon}
            <span className="font-medium text-sm sm:text-base">{stat.label}</span>
          </div>
          <p className="text-xl sm:text-2xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;

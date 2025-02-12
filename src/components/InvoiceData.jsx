import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

const invoices = [
  { id: 1, name: "Amy Burns", email: "amy@burns.com", amount: "$1,000.00", date: "Feb 10, 2025", status: "Pending", avatar: "https://i.pravatar.cc/40?u=1" },
  { id: 2, name: "Hector Simpson", email: "hector@simpson.com", amount: "$1,000.00", date: "Feb 10, 2025", status: "Paid", avatar: "https://i.pravatar.cc/40?u=2" },
  { id: 3, name: "Balazs Orban", email: "balazs@orban.com", amount: "$122.00", date: "Feb 9, 2025", status: "Paid", avatar: "https://i.pravatar.cc/40?u=3" },
];

export default function InvoiceList() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const filteredInvoices = invoices.filter((invoice) => invoice.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <input 
          type="text" 
          placeholder="Search invoices..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/3 mb-2 sm:mb-0"
        />
        <button 
          onClick={() => navigate("/create-invoice")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full sm:w-auto">
          Create Invoice
        </button>
      </div>

      {/* Ensure responsive table */}
      <div className="overflow-x-auto max-w-full">
        <table className="w-full min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">Customer</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">Amount</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.id} className="text-center border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 flex items-center gap-3">
                  <img src={invoice.avatar} alt={invoice.name} className="w-8 h-8 rounded-full" />
                  <span className="truncate">{invoice.name}</span> {/* Prevent text overflow */}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{invoice.email}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{invoice.amount}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">{invoice.date}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  <span className={`px-2 py-1 rounded ${invoice.status === "Paid" ? "bg-green-500 text-white" : "bg-gray-400 text-white"}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                  <div className="flex gap-2 justify-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Pencil size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

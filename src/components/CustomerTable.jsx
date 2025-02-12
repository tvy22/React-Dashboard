import { useState } from "react";

const customersData = [
  { name: "Amy Burns", email: "amy@burns.com", totalInvoices: 1, totalPending: 1000, totalPaid: 0, avatar: "https://i.pravatar.cc/40?img=1" },
  { name: "Balazs Orban", email: "balazs@orban.com", totalInvoices: 1, totalPending: 0, totalPaid: 122, avatar: "https://i.pravatar.cc/40?img=2" },
  { name: "Delba de Oliveira", email: "delba@oliveira.com", totalInvoices: 0, totalPending: 0, totalPaid: 0, avatar: "https://i.pravatar.cc/40?img=3" },
  { name: "Emil Kowalski", email: "emil@kowalski.com", totalInvoices: 0, totalPending: 0, totalPaid: 0, avatar: "https://i.pravatar.cc/40?img=4" },
  { name: "Evil Rabbit", email: "evil@rabbit.com", totalInvoices: 0, totalPending: 0, totalPaid: 0, avatar: "https://i.pravatar.cc/40?img=5" },
  { name: "Hector Simpson", email: "hector@simpson.com", totalInvoices: 1, totalPending: 0, totalPaid: 1000, avatar: "https://i.pravatar.cc/40?img=6" },
  { name: "Lee Robinson", email: "lee@robinson.com", totalInvoices: 0, totalPending: 0, totalPaid: 0, avatar: "https://i.pravatar.cc/40?img=7" },
  { name: "Michael Novotny", email: "michael@novotny.com", totalInvoices: 0, totalPending: 0, totalPaid: 0, avatar: "https://i.pravatar.cc/40?img=8" }
];

const CustomerTable = () => {
  const [search, setSearch] = useState("");

  const filteredCustomers = customersData.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-6xl mx-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search customers..."
        className="w-full p-2 mb-4 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 min-w-[600px] lg:min-w-[900px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-3 text-left">Name</th>
              <th className="border border-gray-300 px-6 py-3 text-left hidden sm:table-cell">Email</th>
              <th className="border border-gray-300 px-6 py-3 text-center">Invoices</th>
              <th className="border border-gray-300 px-6 py-3 text-center hidden md:table-cell">Pending</th>
              <th className="border border-gray-300 px-6 py-3 text-center hidden md:table-cell">Paid</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={customer.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                  {customer.name}
                </td>
                <td className="px-6 py-4 hidden sm:table-cell">{customer.email}</td>
                <td className="px-6 py-4 text-center">{customer.totalInvoices}</td>
                <td className="px-6 py-4 text-center hidden md:table-cell">${customer.totalPending.toFixed(2)}</td>
                <td className="px-6 py-4 text-center hidden md:table-cell">${customer.totalPaid.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;

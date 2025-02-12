const transactions = [
  { name: "Balazs Orban", email: "balazs@orban.com", amount: "$123.00", image: "https://ui-avatars.com/api/?name=Balazs+Orban&background=random" },
  { name: "Emil Kowalski", email: "emil@kowalski.com", amount: "$345.00", image: "https://ui-avatars.com/api/?name=Emil+Kowalski&background=random" },
  { name: "Amy Burns", email: "amy@burns.com", amount: "$27.00", image: "https://ui-avatars.com/api/?name=Amy+Burns&background=random" },
  { name: "Amy Burns", email: "amy@burns.com", amount: "$111.00", image: "https://ui-avatars.com/api/?name=Amy+Burns&background=random" },
  { name: "Balazs Orban", email: "balazs@orban.com", amount: "$12,312.00", image: "https://ui-avatars.com/api/?name=Balazs+Orban&background=random" },
];


const DashboartdLIst = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg min-h-[500px]">
      <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="flex items-center justify-between py-6 border-b last:border-b-0">
            <div className="flex items-center gap-3">
              <img src={transaction.image} alt={transaction.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.email}</p>
              </div>
            </div>
            <p className="font-semibold">{transaction.amount}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-gray-500 text-sm flex items-center gap-2">
        <span className="text-lg">↻</span> Updated just now
      </div>
    </div>
  );
};

export default DashboartdLIst;

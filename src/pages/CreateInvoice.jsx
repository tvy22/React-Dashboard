import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateInvoice = () => {
  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("paid");
  const navigate = useNavigate();

  return (
    <div 
      className="
        max-w-full sm:w-[90%] md:w-[70%] lg:w-[80%] mx-auto 
        p-6 bg-white shadow-md rounded-lg 
        mt-16 sm:pt-20 md:pt-0 lg:pt-0  
        md:ml-[220px] lg:ml-[260px] sm:ml-[160px]"  
    >
      <h2 className="text-2xl sm:text-xl font-semibold mb-4">Create Invoice</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Choose customer</label>
        <select 
          className="w-full p-2 border rounded-lg" 
          value={customer} 
          onChange={(e) => setCustomer(e.target.value)}
        >
          <option value="">Select a customer</option>
          <option value="Customer A">Customer A</option>
          <option value="Customer B">Customer B</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Choose an amount</label>
        <input
          type="number"
          className="w-full p-2 border rounded-lg"
          placeholder="Enter USD amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Set the invoice status</label>
        <div className="flex items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg ${status === "pending" ? "bg-gray-300" : "bg-white border"}`}
            onClick={() => setStatus("pending")}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${status === "paid" ? "bg-green-500 text-white" : "bg-white border"}`}
            onClick={() => setStatus("paid")}
          >
            Paid
          </button>
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <button 
            onClick={() => navigate("/invoices")}
            className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-200">
            Cancel
        </button>
        <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            Create Invoice
        </button>
      </div>
    </div>
  );
};

export default CreateInvoice;

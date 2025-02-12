import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Invoices from "./pages/Invoices"
import Customer from "./pages/Customer"
import Sidebar from "./components/Sidebar"
import CreateInvoice from "./pages/CreateInvoice"


function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col sm:flex-row min-h-screen">
          <Sidebar/>
          <div className="flex-1 flex flex-col">
            {}
            <main className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/invoices" element={<Invoices/>}/>
                <Route path="/customer" element={<Customer/>}/>
                <Route path="/create-invoice" element={<CreateInvoice />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App

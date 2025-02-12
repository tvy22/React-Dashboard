import DashboardCard from "../components/DashboardCard"
import DashboartdLIst from "../components/DashboartdLIst"
import ChartComponent from "../components/chart"


function Dashboard() {
  return (
    <div className="flex-1 p-4 sm:ml-60">
      <h1>Dashboard</h1>
      <DashboardCard/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h1>Recent Revenue</h1>
          <ChartComponent/>
        </div>
        <div>
          <h1>Latest Invoices</h1>
          <DashboartdLIst/>
        </div>
      </div>
    </div>
    
  )
}

export default Dashboard

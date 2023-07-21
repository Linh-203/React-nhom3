import images from "../../assets/images"
import AnalyticOverview, { IProps } from "../../components/AnalyticOverview/AnalyticOverview"
import DoughnutChart from "../../components/DoughnutChart/DoughnutChart"
import OrderOverView from "../../components/OrderOverView/OrderOverView"
import AdminSection from "./components/AdminSection"

const analytics: IProps[] = [
  { className: "bg-green-300", title: 'Website Visits', total: 212, resultPercent: 12, state: 'Decrease'},
  { className: "bg-green-200", title: 'New Signups', total: 212, resultPercent: 12, state: 'Decrease'},
  { className: "bg-green-100", title: 'Orders Submitted', total: 212500, resultPercent: 30, state: 'Increase'},
  { className: "bg-gradient-to-br from-black via-gray-400 via-20% to-black text-white", title: 'Profit is Taken', total: 50000, resultPercent: 20, state: ['Increase', 'Currency']},
]

const DashBoard = () => {
  return (
    <div >
      <h1 className="text-4xl font-bold">Welcome to DashBoard</h1>
      <div className="flex justify-between items-center my-5 text-black">
        {analytics.map((item, index) => (
          <AnalyticOverview key={index} {...item}/>
        ))}
      </div>
        <div className="flex justify-between items-center gap-4">
          <AdminSection className="w-3/5" title="RECENTLY PLACED ORDERS"><OrderOverView/></AdminSection>
          <AdminSection className="w-2/5" title="Customer Satisfaction">
            <DoughnutChart/>
          </AdminSection>
        </div>
    </div>
  )
}

export default DashBoard
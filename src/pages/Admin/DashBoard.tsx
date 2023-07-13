import AnalyticOverview, { IProps } from "../../components/AnalyticOverview/AnalyticOverview"
import OrderOverView from "../../components/OrderOverView/OrderOverView"

const analytics: IProps[] = [
  { className: "bg-green-300", title: 'Website Visits', total: 212, resultPercent: 12, state: 'Decrease'},
  { className: "bg-green-200", title: 'New Sigups', total: 212, resultPercent: 12, state: 'Decrease'},
  { className: "bg-green-100", title: 'Orders Submitted', total: 212500, resultPercent: 30, state: 'Increase'},
  { className: "bg-black text-white", title: 'Profit is Taken', total: 50000, resultPercent: 20, state: ['Increase', 'Currency']},
]

const DashBoard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to DashBoard</h1>
      <div className="flex justify-between items-center my-5">
        {analytics.map((item, index) => (
          <AnalyticOverview key={index} {...item}/>
        ))}
      </div>
        <OrderOverView/>
    </div>
  )
}

export default DashBoard
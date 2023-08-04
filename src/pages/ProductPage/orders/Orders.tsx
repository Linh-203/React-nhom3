

import "./orders.css"
import {useEffect,useState} from "react"

import { Link, useNavigate } from 'react-router-dom';
import { filterOrder, getOrdersUser } from "../../../api/orders";

const Orders = () => {
  const idUser = "64c70e3980d555c680c5b0d5";
  const [orders, setOrders] = useState()
  useEffect(()=>{
    getOrdersUser(idUser).then(({data})=>setOrders(data.order))
  },[])
  const navigate=useNavigate()
 
  useEffect(()=>{
    if(!idUser){
    navigate("/auth/login")
}
  },[])

 const onHandleFilterOrder=(status:string)=>{
  filterOrder(status,idUser).then(({data})=>{
    setOrders(data.order)
  })
  
 }

  // Lọc danh sách hóa đơn theo trạng thái

  return (
    <div>
      <hr />
      <div className="order-main">
      <h1 >Danh sách hóa đơn</h1>
     

      <button className="bg-green-500 text-white py-2 px-4 rounded-lg" onClick={()=>onHandleFilterOrder("")}>Tất cả</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg" onClick={()=>onHandleFilterOrder("Chưa xử lý")}>Chưa xử lý</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg" onClick={()=>onHandleFilterOrder("Chờ xác nhận")}>Chờ xác nhận</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg" onClick={()=>onHandleFilterOrder("Chờ lấy hàng")}>Chờ lấy hàng</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg" onClick={()=>onHandleFilterOrder("Đang giao")}>Đang giao</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg" onClick={()=>onHandleFilterOrder("Đã nhận hàng")}>Đã nhận hàng</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg" onClick={()=>onHandleFilterOrder("Đã hủy")}>Đã hủy</button>
    
      <table id="table-order" className="w-full border-collapse">
  <thead>
    <tr>
      <th className="bg-blue-700 text-white py-3 px-4">Mã đơn hàng</th>
      <th className="bg-blue-700 text-white py-3 px-4">Trạng thái</th>
      <th className="bg-blue-700 text-white py-3 px-4">Số tiền</th>
      <th className="bg-blue-700 text-white py-3 px-4">Thanh toán</th>
      <th className="bg-blue-700 text-white py-3 px-4"></th>
    </tr>
  </thead>
  <tbody>
    {orders?.map((invoice: any) => (
      <tr key={invoice._id}>
        <td className="border py-3 px-4">{invoice._id}</td>
        <td className="border py-3 px-4">{invoice.status}</td>
        <td className="border py-3 px-4">${invoice.totalPrice}</td>
        <td className="border py-3 px-4">{invoice.pay ? "Đã thanh toán" : "Chưa thanh toán"}</td>
        <td className="border py-3 px-4">
          <Link to={`/order/${invoice._id}`} className="bg-orange-500 text-white py-2 px-4 rounded-lg">
            Chi tiết
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    </div>
  );
};

export default Orders;
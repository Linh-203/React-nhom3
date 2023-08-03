import React from 'react'
import { IOrders } from '../../common/orders'
import { Link } from 'react-router-dom';

const Orders = ({orders}:IOrders[]) => {
  return (
    <>
    {orders?.map((item:any, index:number)=>{
     const checkTime = new Date(item.createdAt);
     const outTime = checkTime.toLocaleString();
     return(
        <tr>
        <td className="py-2 px-4 border-b text-center">{item?._id}</td>
        <td className="py-2 px-4 border-b text-center">{outTime}</td>
        <td className="py-2 px-4 border-b text-center">${item?.totalPrice}</td>
        <td className="py-2 px-4 border-b text-center">
            <span className="inline-block bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">{item?.status}</span>
        </td>
        <td className="py-2 px-4 border-b text-center"><span className="inline-block bg-blue-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">
        {!item?.pay ? "Chưa thanh toán" : "Đã thanh toán"}
            </span></td>
        <td className="py-2 px-4 border-b text-center" >    
         <Link to={`/admin/order/${item._id}`} className="inline-block bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold">Chi tiết</Link>
        </td>
    </tr>
     )
   })}
   </>
    
  )
}

export default Orders
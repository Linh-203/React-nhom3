
import { useState, useEffect } from "react"
import "./OrderDetail.css"
import { useParams } from "react-router-dom"
import { getOrder } from "../../../api/orders"
import { format } from 'date-fns';
import { useCancelOrderMutation, useDetailOrderQuery } from "../../../api-slice/baseOrderAPI";

const DetailOrder = () => {
  const { id } = useParams()
  const { data } = useDetailOrderQuery(id)
  const detailOrder = data?.order
  const remainingTimeMessage = data?.remainingTimeMessage
  const [formattedDateTime, setFormattedDateTime] = useState()
  const [cancelOrder] = useCancelOrderMutation()
  console.log(detailOrder);


  useEffect(() => {
    const date = new Date(detailOrder?.createdAt)

    if (date.getTime()) {
      const fomatTime = format(date, "yyyy-MM-dd hh:mm a")
      setFormattedDateTime(fomatTime)
    }
  }, [detailOrder])

  const handleCancelOrder=()=>{
    cancelOrder(id)
  }



  return (
    <div>
      <hr />
      <div className="order-main">
        <h2 className="order-title">Chi tiết đơn hàng</h2>
        <div className="order-info">
          <div className="order-info-item">
            <span className="info-item-label">Số đơn hàng:</span>
            <span className="info-item-value">{detailOrder?._id}</span>
          </div>
          <div className="order-info-item">
            <span className="info-item-label">Người đặt:</span>
            <span className="info-item-value">{detailOrder?.customerName}</span>
          </div>
          <div className="order-info-item">
            <span className="info-item-label">Số điện thoại :</span>
            <span className="info-item-value">{detailOrder?.phone}</span>
          </div>
          <div className="order-info-item">
            <span className="info-item-label">Địa chỉ nhận hàng:</span>
            <span className="info-item-value">{detailOrder?.address}</span>
          </div>
          <div className="order-info-item">
            <span className="info-item-label">Ghi chú:</span>
            <span className="info-item-value">{detailOrder?.note}</span>
          </div>
          <div className="order-info-item">
            <span className="info-item-label">Ngày đặt hàng:</span>
            <span className="info-item-value">{formattedDateTime}</span>

          </div>
          <div className="order-info-item">
            <span className="info-item-label">Dự kiến ngày nhận: </span>
            <span className="info-item-value">{detailOrder?.receivedDate}</span>
          </div>
          <div className="order-info-item">
            <span className="info-item-label">Trạng thái:</span>
            <span className="info-item-value status-shipped">{detailOrder?.status}</span>
          </div>
          <div className="order-info-item">
            <span className="info-item-label">Thanh toán:</span>
            <span className="info-item-value">{(!detailOrder?.pay) ? "Chưa thanh toán" : "Đã thanh toán"}</span>
          </div>
        </div>
        <div className="order-items">
          {detailOrder?.products?.map((item: any) => (
            <div className="order-item">
              <img src={item.productId.images[0].url} alt="Product 1" className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{item.productId.name}</h3>
                <p className="product-price">${item.price}</p>
                <p className="product-quantity">Số lượng: {item.quantity}</p>
                <p className="product-total">Tổng cộng: ${item.quantity * item.price}</p>
              </div>
            </div>
          ))}


        </div>
        <div className="order-summary">
          <h3 className="summary-title">Tổng thanh toán:</h3>
          <p className="summary-amount">${detailOrder?.totalPrice}</p>
        </div>
        <p>{remainingTimeMessage && detailOrder?.status !=="Đã hủy" ? remainingTimeMessage : ""} </p>
        {( detailOrder?.status !=="Đã hủy" && remainingTimeMessage ) ?
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500" onClick={()=>handleCancelOrder()}>
            HỦY ĐƠN HÀNG
          </button> : <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded border border-gray-400 hover:border-gray-500">
            ĐÃ HỦY
          </button>
        }
      </div>

    </div>
  )
}

export default DetailOrder
import React, { useState } from 'react';
import { useDetailOrderQuery, useUpdateOrderMutation } from '../../api-slice/baseOrderAPI';
import { useParams, useNavigate } from 'react-router-dom';
const OrdersDetail = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { data } = useDetailOrderQuery(id);
   const detailOrder = data?.order;
   const [status, setStatus] = useState(detailOrder?.status);
   const [receivedDate, setDate] = useState(detailOrder?.receivedDate);
   const [pay, setPay] = useState(detailOrder?.pay);
   const [updateOrder] = useUpdateOrderMutation();
   const checkTime = new Date(detailOrder?.createdAt);
   const outTime = checkTime.toLocaleString();
   const onHandleSubmit = (e: any) => {
      e.preventDefault();
      console.log({ id, status, receivedDate });
      updateOrder({ id, status, receivedDate, pay });
      navigate('/admin/orders');
   };
   return (
      <div>
         <div className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold mb-4'>Chi tiết đơn hàng</h2>
            <div>
               <strong className='font-semibold'>Số đơn hàng:</strong> {detailOrder?._id}
            </div>
            <div>
               <strong className='font-semibold'>Người đặt:</strong> {detailOrder?.customerName}
            </div>
            <div>
               <strong className='font-semibold'>Số điện thoại:</strong> {detailOrder?.phone}
            </div>
            <div>
               <strong className='font-semibold'>Địa chỉ nhận hàng:</strong> {detailOrder?.address}
            </div>
            <div>
               <strong className='font-semibold'>Ghi chú: {detailOrder?.note}</strong>
            </div>
            <div>
               <strong className='font-semibold'>Ngày đặt hàng:</strong> {outTime}
            </div>

            <div>
               <form action='' onSubmit={onHandleSubmit}>
                  <div>
                     <strong className='font-semibold'>
                        Thanh toán: {detailOrder?.pay ? 'Đã thanh toán' : 'Chưa thanh toán'}
                     </strong>
                     <select
                        className='mt-2 border border-gray-300 rounded-md p-1'
                        onChange={(e) => setPay(e.target.value)}
                     >
                        <option hidden value={detailOrder?.pay}>
                           {' '}
                           {detailOrder?.pay ? 'Đã thanh toán' : 'Chưa thanh toán'}
                        </option>
                        <option value={false}>Chưa thanh toán</option>
                        <option value={true}>Đã thanh toán</option>
                     </select>
                  </div>
                  <div>
                     <strong className='font-semibold'>
                        Dự kiến ngày nhận: {detailOrder?.receivedDate} <br />
                        <input type='date' value={receivedDate} onChange={(e) => setDate(e.target.value)} />{' '}
                     </strong>
                  </div>
                  <strong className='font-semibold'>Trạng thái:</strong>
                  <select
                     className='mt-2 border border-gray-300 rounded-md p-1'
                     onChange={(e) => setStatus(e.target.value)}
                  >
                     <option hidden value={detailOrder?.status}>
                        {detailOrder?.status}
                     </option>
                     <option value='Chưa xử lý'>Chưa xử lý</option>
                     <option value='Chờ xác nhận'>Chờ xác nhận</option>
                     <option value='Chờ lấy hàng'>Chờ lấy hàng</option>
                     <option value='Đang giao'>Đang giao</option>
                     <option value='Đã nhận hàng'>Đã nhận hàng</option>
                     <option value='Đã hủy'>Đã hủy</option>
                  </select>
                  <button className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded'>
                     Cập nhật
                  </button>
               </form>
               <strong className='font-semibold text-red-500'>Tổng thanh toán: ${detailOrder?.totalPrice}</strong>
            </div>
         </div>
         <div className='mt-8'>
            <h3 className='text-xl font-bold mb-4'>Giỏ hàng</h3>
            {detailOrder?.products.map((item: any) => {
               const sum = item?.quantity * item?.productId.price;

               return (
                  <div className='bg-gray-100 rounded-md p-4'>
                     <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center'>
                           <img src={item.productId.images[0].url} className='w-40 h-30 rounded-md' />
                           <div className='ml-4'>
                              <h4 className='font-semibold'>{item.productId.name}</h4>
                              <p className='text-gray-500 text-red-500'>
                                 ${item.productId.price} X {item.quantity}
                              </p>
                           </div>
                        </div>
                        <p className='font-semibold text-red-600 '>${sum}</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default OrdersDetail;

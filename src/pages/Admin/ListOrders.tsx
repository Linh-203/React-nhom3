import { useEffect, useRef, useState } from 'react';
import { useGetOrdersAdminQuery } from '../../api-slice/orderAPI';
import Orders from '../../components/orders/Orders';
import { IOrders } from '../../common/orders';
import { adminSocket } from '../../socket/config';

const ListOrders = () => {
   const { data } = useGetOrdersAdminQuery('argumentValue');
   const [orders, setOrders] = useState<IOrders[]>([]);
   const lastEventId = useRef(null);
   useEffect(() => {
      if (data) setOrders(data.order!);
   }, [data]);
   useEffect(() => {
      adminSocket.open();
      adminSocket.on('orderConfirm', ({ data }) => {
         if (data.eventId !== lastEventId.current) {
            setOrders((prev) => [data.order as IOrders, ...orders]);
            lastEventId.current = data.eventId;
         } else {
            console.log('not run');
         }
      });
      return () => {
         adminSocket.disconnect();
      };
   }, [data]);
   return (
      <div className='bg-gray-100'>
         <div className='container mx-auto py-8'>
            <table className='min-w-full bg-white border border-gray-300'>
               <thead>
                  <tr>
                     <th className='py-2 px-4 border-b bg-orange-500 text-white text-center'>ID</th>
                     <th className='py-2 px-4 border-b bg-orange-500 text-white text-center'>Ngày đặt hàng</th>
                     <th className='py-2 px-4 border-b bg-orange-500 text-white text-center'>Tổng tiền</th>
                     <th className='py-2 px-4 border-b bg-orange-500 text-white text-center'>Trạng thái</th>
                     <th className='py-2 px-4 border-b bg-orange-500 text-white text-center'>Thanh toán</th>
                     <th className='py-2 px-4 border-b bg-orange-500 text-white text-center'></th>
                  </tr>
               </thead>
               <tbody>
                  <Orders orders={orders}></Orders>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ListOrders;

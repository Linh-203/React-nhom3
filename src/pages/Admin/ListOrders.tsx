import { useGetOrdersAdminQuery } from '../../api-slice/baseOrderAPI';
import Orders from '../../components/orders/Orders';

const ListOrders = () => {
   const { data } = useGetOrdersAdminQuery('argumentValue');
   const orders = data?.order;

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

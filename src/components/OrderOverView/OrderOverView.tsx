type IOrder = {
   id: string;
   orderName: string;
   customerName: string;
   Location: string;
   orderStatus: string;
   deliveredTime: string;
   price: string;
};

const order: IOrder[] = [
   {
      id: '1',
      orderName: 'French Fries',
      customerName: 'Jhon Leo',
      Location: 'New Town',
      orderStatus: 'Pending',
      deliveredTime: '10:00',
      price: '$10.00'
   },
   {
      id: '2',
      orderName: 'Mango Pie',
      customerName: 'Kristien',
      Location: 'Old Town',
      orderStatus: 'Cancelled',
      deliveredTime: '14:05',
      price: '$9.00'
   },
   {
      id: '3',
      orderName: 'Fried Egg Sandwich',
      customerName: 'Jack Suit',
      Location: 'Oxford Street',
      orderStatus: 'Delivered',
      deliveredTime: '12:05',
      price: '$19.00'
   },
   {
      id: '4',
      orderName: 'Lemon Yogurt Parfait',
      customerName: 'Alesdro Guitto',
      Location: 'Church hilln',
      orderStatus: 'Delivered',
      deliveredTime: '12:05',
      price: '$18.00'
   },
   {
      id: '5',
      orderName: 'Spicy Grill Sandwich',
      customerName: 'Jacob Sahwny',
      Location: 'Palace Road',
      orderStatus: 'Delivered',
      deliveredTime: '12:05',
      price: '$21.00'
   },
   {
      id: '6',
      orderName: 'Chicken Sandwich',
      customerName: 'Peter Gill',
      Location: 'Street 21',
      orderStatus: 'Pending',
      deliveredTime: '12:05',
      price: '$50.00'
   }
];

function OrderOverView() {
   return (
      <div className='dark:text-white p-4 my-2 text-black'>
         <div>
            <table className='w-full rounded-t-xl overflow-hidden'>
               <thead className='bg-navBg dark:bg-navDarkBg'>
                  <tr>
                     <th className='p-2' scope='col'>
                        Order ID
                     </th>
                     <th className='p-2' scope='col'>
                        Order Name
                     </th>
                     <th className='p-2' scope='col'>
                        Customer Name
                     </th>
                     <th className='p-2' scope='col'>
                        Location
                     </th>
                     <th className='p-2' scope='col'>
                        Order Status
                     </th>
                     <th className='p-2' scope='col'>
                        Delivered Time
                     </th>
                     <th className='p-2' scope='col'>
                        Price
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {order?.map((item, index) => (
                     <tr key={index} className='border-b-[1px] border-gray-400'>
                        <th className='p-2' scope='col'>
                           {item.id}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.orderName}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.customerName}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.Location}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.orderStatus}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.deliveredTime}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.price}
                        </th>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default OrderOverView;

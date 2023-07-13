function OrderOverView() {
   return (
      <div className='rounded-2xl p-4 bg-dropBg'>
         <div>
            <h1 className='text-[20px]'>RECENTLY PLACED ORDERS</h1>
            <table  className='w-full my-5 rounded-2xl overflow-hidden'>
               <thead className="bg-navBg">
                  <tr >
                     <th  scope='col'>
                        Order ID
                     </th>
                     <th  scope='col'>
                        Order Name
                     </th>
                     <th  scope='col'>
                        Customer Name
                     </th>
                     <th  scope='col'>
                        Location
                     </th>
                     <th  scope='col'>
                        Order Status
                     </th>
                     <th  scope='col'>
                        Delivered Time
                     </th>
                     <th  scope='col'>
                        Price
                     </th>
                  </tr>
               </thead>
               <tbody >
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default OrderOverView;

import TruckIcon from '../../assets/icons/Truck';
import HeadPhone from '../../assets/icons/HeadPhone';
import Money from '../../assets/icons/Money';
import Load from '../../assets/icons/Load';
const Delivery = () => {
   return (
      <div className='delivery'>
         <div className='grid grid-cols-4 mx-20 my-10 gap-8 place-content-center'>
            <div className=' flex justify-center items-center shadow-md h-40'>
               <TruckIcon width='70' height='50' />
               <div className='delivery-text pl-5'>
                  <h2 className='text-center font-bold pr-10 text-slate-900'>Free delivery</h2>
                  <p>Orders over $99.00</p>
               </div>
            </div>
            <div className=' flex justify-center items-center shadow-md h-35'>
               <Money width='60' height='40' />
               <div className='delivery-text pl-5'>
                  <h2 className='text-center font-bold pr-12 text-slate-900'>Back guarantee</h2>
                  <p>Money back guarantee.</p>
               </div>
            </div>
            <div className=' flex justify-center items-center shadow-md h-35'>
               <HeadPhone width='60' height='40' />
               <div className='delivery-text pl-5'>
                  <h2 className='text-center font-bold pr-12 text-slate-900'>Online support 24/7</h2>
                  <p>Delicated client support</p>
               </div>
            </div>
            <div className=' flex justify-center items-center shadow-md h-35'>
               <Load width='60' height='40' />
               <div className='delivery-text pl-5'>
                  <h4 className='text-center font-bold pr-12 text-slate-900'>90 Days return!!</h4>
                  <p>If goods have problems</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Delivery;

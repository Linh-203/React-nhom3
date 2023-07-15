import LabelRed from '../../components/Label/LabelRed';
import styles from './ProductPage.module.css';
const ProductPage = () => {
   return (
      <div className='min-h-[100vh] w-full bg-primaryBg'>
         <div>Breadcrumb</div>
         <section className='w-full pt-20 flex justify-center gap-10'>
            <article className='w-[20%] flex flex-col'>
               <div className={`${styles['block-filter']}`}>
                  <LabelRed>Filter</LabelRed>
                  <p className='text-grayLight200 mt-5'>23 products</p>
                  <hr className='mt-5' />
               </div>
               <div className={`${styles['block-filter']}`}>
                  <LabelRed>Availability</LabelRed>
                  <div className='w-full mt-5'>
                     <div className='w-full flex justify-between items-center'>
                        <p className='text-grayLight200'>
                           <span>0</span> selected
                        </p>
                        <button className='text-grayLight100  border-grayLight100 border-b-[1px] font-semibold hover:text-grayLight200'>
                           Reset
                        </button>
                     </div>
                     <div className='w-full max-h-[200px] overflow-auto'>
                        <div className='flex justify-between items-center mt-5'>
                           <div>
                              <input type='checkbox' name='attribute' id='check-box' />
                              <label className='ml-2 text-grayLight200 flex items-center' htmlFor='check-box'>
                                 <span className='ml-8'>In stock</span>
                              </label>
                           </div>
                           <span className='text-grayLight200'>(2)</span>
                        </div>
                     </div>
                  </div>
                  <hr className='mt-5' />
               </div>
               <div className={`${styles['block-filter']}`}>
                  <LabelRed>Price</LabelRed>
                  <div className='w-full flex justify-between items-center mt-5'>
                     <p className='text-grayLight200 '>The highest price is $89.00</p>
                     <button className='text-grayLight100  border-grayLight100 border-b-[1px] font-semibold hover:text-grayLight200'>
                        Reset
                     </button>
                  </div>
                  <div className='mt-3'>
                     <input type='range' className='' step={1} max={45} min={1} />
                     <input type='range' className='' step={1} max={89} min={46} />
                  </div>
                  <div className='flex w-full justify-center items-center gap-5 mt-5'>
                     <div>
                        <p className='text-grayLight100 text-sm '>From</p>
                        <input
                           type='text'
                           className='p-2 w-[80%] rounded-md border-[1px] border-grayLight100 outline-none'
                        />
                     </div>

                     <div>
                        <p className='text-grayLight100 text-sm '>To</p>
                        <input
                           type='text'
                           className='p-2 w-[80%] rounded-md border-[1px] border-grayLight100 outline-none'
                        />
                     </div>
                  </div>
                  <hr className='mt-5' />
               </div>
               <div className={`${styles['block-filter']}`}>
                  <LabelRed>Filter</LabelRed>
                  <p className='text-grayLight200 mt-5'>23 products</p>
                  <hr className='mt-5' />
               </div>
            </article>
            <main className='w-[50%] bg-red-200'>main</main>
         </section>
      </div>
   );
};

export default ProductPage;

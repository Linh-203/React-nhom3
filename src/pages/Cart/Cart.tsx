/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ChangeEvent, useState } from 'react';
import { useGetCartQuery, useRemoveProductInCartMutation, useUpdateCartMutation } from '../../api-slice/baseCartAPI';
import { InputCart } from '../../common/cart';
import Loading from '../../components/Loading/Loading';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Cart = () => {
   const userId = useSelector((state: RootState) => state.authReducer.user._id);
   const { data, error, isLoading } = useGetCartQuery(userId, { skip: !userId });
   const [updateCart] = useUpdateCartMutation();
   const [removeProductInCart] = useRemoveProductInCartMutation();
   const cart = data?.cart;
   const [quantityInput, setQuantityInput] = useState<number>(cart?.quantity ? cart.quantity : 1);

   const onChangeQuantity = async (e: ChangeEvent<HTMLInputElement>, productId: string, variationId: string) => {
      if (e.target) {
         setQuantityInput(Number(e.target.value));
         const data: InputCart = {
            userId,
            productId,
            quantity: Number(e.target.value),
            variationId
         };
         await updateCart(data);
      }
   };
   const removeCart = async (productId: string) => {
      await removeProductInCart({ userId, productId });
   };
   if (isLoading) return <Loading screen='large' />;
   return (
      <div>
         <hr />
         {cart?.products ? (
            <div className='show-cart flex flex-col justify-between gap-3 items-center w-full p-5 px-10'>
               <div id='cart'>
                  <h3>Giỏ hàng của bạn</h3>
                  <table>
                     <thead>
                        <tr>
                           <th className='w-[20%]'>Image</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Total</th>
                           {/* <th>Addition Info</th> */}
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {cart?.products?.map((product, index) => {
                           const sum = product.quantity * product.productId.price;

                           return (
                              <tr key={index}>
                                 <td className='flex justify-center items-center '>
                                    <img
                                       src={product.productId.images[0].url}
                                       className='w-full aspect-square rounded-lg'
                                    />
                                 </td>
                                 <td className='text-lg font-semibold'>{product.productId.name}</td>
                                 <td className='text-lg font-semibold'>${product.productId.price}</td>
                                 <td>
                                    <div className='flex' style={{ justifyContent: 'center' }}>
                                       <input
                                          id='counter'
                                          aria-label='input'
                                          className='border border-gray-300 h-full text-center w-14 p-5 outline-none rounded-md text-md text-colorText'
                                          type='text'
                                          value={quantityInput}
                                          onChange={(e) =>
                                             onChangeQuantity(e, product.productId._id, product.variationId)
                                          }
                                       />
                                    </div>
                                 </td>
                                 <td>${sum}</td>
                                 {/* <td>{product.variationId?.name}</td> */}
                                 <td>
                                    <div
                                       className='flex justify-center items-center'
                                       onClick={() => removeCart(product.productId._id)}
                                    >
                                       <button className='btn-removeCart flex justify-center items-center text-center'>
                                          x
                                       </button>
                                    </div>
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
               <div className='flex justify-end w-[60%]'>
                  <Link to={'/checkout'}>
                     <button className='bg-hightLigh text-white font-semibold p-3 rounded-lg'>Checkout</button>
                  </Link>
               </div>
            </div>
         ) : (
            <div className='w-full flex justify-center items-center py-5 gap-5 min-h-[300px]'>
               <p className='text-3xl text-colorText font-semibold'>Cart Empty</p>
               <Link to={'/products'}>
                  <button className='bg-hightLigh text-white font-semibold p-3 rounded-lg'>Continue shopping</button>
               </Link>
            </div>
         )}
      </div>
   );
};
export default Cart;

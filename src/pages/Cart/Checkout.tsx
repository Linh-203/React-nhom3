import { useState, useReducer, useEffect } from 'react';
import { createOrder } from '../../api/orders';
import { useNavigate } from 'react-router-dom';
import { useGetCartQuery } from '../../api-slice/baseCartAPI';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

interface IFormData {
   customerName: string;
   phone: string;
   note: string;
   address: string;
   userId?: string;
   cartId?: string;
}
interface IFormDataValid {
   isValidCustomerName: boolean;
   isValidPhone: boolean;
   isValidAddress: boolean;
}
const Checkout = () => {
   const userId = useSelector((state: RootState) => state.authReducer.user._id);
   const user = useSelector((state: RootState) => state.authReducer.user);
   const navigate = useNavigate();
   const { data } = useGetCartQuery(userId);
   const cart = data?.cart;
   const [buttonDisabled, setButtonDisabled] = useState(true);
   const initialFormData: IFormData = {
      customerName: '',
      phone: '',
      note: '',
      address: ''
   };
   const initialFormValid: IFormDataValid = {
      isValidCustomerName: true,
      isValidPhone: true,
      isValidAddress: true
   };
   useEffect(() => {
      dispatchFormData({ type: 'UPDATE_CUSTOMER_NAME', payload: user.name });
      dispatchFormData({ type: 'UPDATE_PHONE', payload: user.phone });
   }, [user]);
   const reducerFormData = (state: IFormData, action: { type: string; payload: string }) => {
      switch (action.type) {
         case 'UPDATE_CUSTOMER_NAME':
            return { ...state, customerName: action.payload };
         case 'UPDATE_PHONE':
            return { ...state, phone: action.payload };
         case 'UPDATE_ADDRESS':
            return { ...state, address: action.payload };
         case 'UPDATE_NOTE':
            return { ...state, note: action.payload };
         default:
            return state;
      }
   };
   const reducerFormValid = (state: IFormDataValid, action: { type: string; payload: IFormData }) => {
      let isValid: boolean;
      switch (action.type) {
         case 'VALIDATE_CUSTOMER_NAME':
            console.log(action.payload.customerName);
            isValid = action.payload.customerName.length > 0;
            return { ...state, isValidCustomerName: isValid };
         case 'VALIDATE_PHONE':
            isValid = action.payload.phone.length > 0;
            return { ...state, isValidPhone: isValid };
         case 'VALIDATE_ADDRESS':
            isValid = action.payload.address.length > 0;
            return { ...state, isValidAddress: isValid };

         default:
            return state;
      }
   };

   const [formData, dispatchFormData] = useReducer(reducerFormData, initialFormData);
   const [formValid, dispatchFormValid] = useReducer(reducerFormValid, initialFormValid);
   useEffect(() => {
      if (formData.customerName && formData.phone && formData.address) {
         setButtonDisabled(false);
      }
   }, [formData.customerName, formData.phone, formData.address]);
   const handleSubmit = (e: Event) => {
      e.preventDefault();
      formData['userId'] = userId;
      formData['cartId'] = cart?._id;
      createOrder(formData)
         .then(() => {
            navigate('/message');
         })
         .catch((error) => console.log(error));
   };
   return (
      <div className='w-full flex justify-center items-center pb-10 pt-10'>
         <form className='w-full max-w-lg' onSubmit={handleSubmit}>
            <h3 style={{ textAlign: 'center' }}>Thông tin nhận hàng</h3>
            <div className='flex flex-wrap -mx-3 mb-6'>
               <div className='w-full px-3 mb-6 md:mb-0'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='name'>
                     Tên khách hàng
                  </label>
                  <input
                     className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='name'
                     type='text'
                     value={formData.customerName}
                     placeholder='Nhập tên khách hàng'
                     onChange={(e) => {
                        dispatchFormData({
                           type: 'UPDATE_CUSTOMER_NAME',
                           payload: e.target.value
                        });
                        dispatchFormValid({
                           type: 'VALIDATE_CUSTOMER_NAME',
                           payload: formData
                        });
                     }}
                     onBlur={() =>
                        dispatchFormValid({
                           type: 'VALIDATE_CUSTOMER_NAME',
                           payload: formData
                        })
                     }
                  />
                  <div className='text-red-500'>
                     {!formValid.isValidCustomerName ? 'Trường dữ liệu không hợp lệ' : ''}
                  </div>
               </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
               <div className='w-full px-3 mb-6 md:mb-0'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='phone'>
                     Số điện thoại
                  </label>
                  <input
                     className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='phone'
                     type='text'
                     value={formData.phone}
                     placeholder='Nhập số điện thoại'
                     onChange={(e) => {
                        dispatchFormData({
                           type: 'UPDATE_PHONE',
                           payload: e.target.value
                        });
                        dispatchFormValid({
                           type: 'VALIDATE_PHONE',
                           payload: formData
                        });
                     }}
                     onBlur={() =>
                        dispatchFormValid({
                           type: 'VALIDATE_PHONE',
                           payload: formData
                        })
                     }
                  />
                  <div className='text-red-500'>{!formValid.isValidPhone ? 'Trường dữ liệu không hợp lệ' : ''}</div>
               </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
               <div className='w-full px-3 mb-6 md:mb-0'>
                  <label
                     className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                     htmlFor='address'
                  >
                     Địa chỉ
                  </label>
                  <input
                     className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='address'
                     type='text'
                     placeholder='Nhập địa chỉ'
                     onChange={(e) => {
                        dispatchFormData({
                           type: 'UPDATE_ADDRESS',
                           payload: e.target.value
                        });
                        dispatchFormValid({
                           type: 'VALIDATE_ADDRESS',
                           payload: formData
                        });
                     }}
                     onBlur={() =>
                        dispatchFormValid({
                           type: 'VALIDATE_ADDRESS',
                           payload: formData
                        })
                     }
                  />
                  <div className='text-red-500'>{!formValid.isValidAddress ? 'Trường dữ liệu không hợp lệ' : ''}</div>
               </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
               <div className='w-full px-3 mb-6 md:mb-0'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='note'>
                     Ghi chú
                  </label>
                  <textarea
                     className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                     id='note'
                     placeholder='Nhập ghi chú'
                     onChange={(e) =>
                        dispatchFormData({
                           type: 'UPDATE_NOTE',
                           payload: e.target.value
                        })
                     }
                  ></textarea>
               </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-2'>
               <div className='w-full px-3 mb-6 md:mb-0'>
                  <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                     Phương thức thanh toán
                  </label>
                  <div className='mt-2'>
                     <label className='inline-flex items-center'>
                        <input type='radio' className='form-radio h-5 w-5 text-gray-600' name='paymentMethod' checked />
                        <span className='ml-2 text-gray-700'>Thanh toán khi nhận hàng</span>
                     </label>
                  </div>
               </div>
            </div>
            <h1>Tổng tiền thanh toán: ${cart?.totalPrice}</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>
               Đặt hàng
            </button>
         </form>
      </div>
   );
};

export default Checkout;

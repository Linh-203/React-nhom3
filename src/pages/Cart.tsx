import React, { useState, useEffect, useReducer } from 'react';
import { IProduct } from '../common/product';
import { createOrder } from '../api/orders';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchCart, handleUpdateCart, removeItemInCart } from '../slices/CartSlice';
import UpdateProduct from './Admin/UpdateProduct';
import { useGetCartQuery, useRemoveProductInCartMutation, useUpdateCartMutation } from '../api-slice/baseAPI';
interface IFormData {
  customerName: string,
  phone: string,
  note: string,
  address: string,
}
interface IFormDataValid {
  customerName: boolean;
  phone: boolean;
  address: boolean,
}
const Cart = () => {
  const userId = '64c70e3980d555c680c5b0d5';
  const { data, error, isLoading } = useGetCartQuery(userId)
  const [updateCart] = useUpdateCartMutation()
  const [removeProductInCart] = useRemoveProductInCartMutation()
  const cart = data?.cart
  const dispatch = useDispatch<AppDispatch>()

  const handleFetchCart = async () => {
    try {
      const data = await dispatch(fetchCart()).unwrap()
      console.log(data);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleFetchCart()
  }, [])
  console.log(cart);

  const navigate = useNavigate()

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const initialFormData = {
    customerName: "",
    phone: "",
    note: "",
    address: "",
  }
  const initialFormValid = {
    isValidCustomerName: true,
    isValidPhone: true,
    isValidAddress: true,
  }

  const reducerFormData = (state: IFormData, action: { type: string, payload: string }) => {
    switch (action.type) {
      case "UPDATE_CUSTOMER_NAME":
        return { ...state, customerName: action.payload }
      case "UPDATE_PHONE":
        return { ...state, phone: action.payload }
      case "UPDATE_ADDRESS":
        return { ...state, address: action.payload }
      case "UPDATE_NOTE":
        return { ...state, note: action.payload }
      default:
        return state
    }
  }
  const reducerFormValid = (state: IFormDataValid, action: { type: string, payload: IFormData }) => {
    let isValid: boolean
    switch (action.type) {
      case "VALIDATE_CUSTOMER_NAME":
        console.log(action.payload.customerName);

        isValid = action.payload.customerName.length > 0

        return { ...state, isValidCustomerName: isValid }
      case "VALIDATE_PHONE":
        isValid = action.payload.phone.length > 0
        return { ...state, isValidPhone: isValid }
      case "VALIDATE_ADDRESS":
        isValid = action.payload.address.length > 0
        return { ...state, isValidAddress: isValid }

      default:
        return state
    }
  }

  const [formData, dispatchFormData] = useReducer(reducerFormData, initialFormData)
  const [formValid, dispatchFormValid] = useReducer(reducerFormValid, initialFormValid)


  const onChangeQuantity = (e: any, productId: string) => {


    const updatedProduct = cart?.products?.find(
      (product: IProduct) => { return product?.productId?._id == productId }
    );
    console.log(updatedProduct.quantity);
    console.log(e);
    let quantity = updatedProduct.quantity

    if (updatedProduct) {


      if (typeof e == "number") {
        if (e == 0) {
          quantity = 1
        } else {
          quantity = e as number
        }


        // }  if(e.target.value ==""){
        //     if(window.confirm("Xóa khỏi giỏ hàng")){
        //         removeOneProductInCart(userId, productId)
        //     }
        //     return
      } else {
        quantity = e.target.value
      }

      const data = {
        userId,
        productId,
        quantity
      };
      updateCart(data)
      // void (async () => {
      //   await dispatch(handleUpdateCart(data)).unwrap()
      // })()
      // updateCart(data)
      //   .then(() => {
      //     getCart(userId).then(({ data }) => {
      //       setCarts(data.cart);
      //     });
      //   })
      //   .catch((error) => {
      //     console.log('Error updating cart:', error);
      //   });
    }

  };
  const removeCart = async (productId: string) => {
    removeProductInCart({userId, productId})
  }
  useEffect(() => {
    if (formData.customerName && formData.phone && formData.address) {
      setButtonDisabled(false)
    }
  }, [formData.customerName, formData.phone, formData.address])
  const handleSubmit = (e: any) => {
    e.preventDefault()

    formData["userId"] = userId
    formData["cartId"] = cart._id
    console.log(formData);
    createOrder(formData).then(() => {
      navigate("/message")
    })
      .catch((error) => console.log(error)
      )



  }

  return (
    <div>
      <hr />
      {cart?.products ?
        <div className="show-cart">

          <div id='cart'>
            <h3>Giỏ hàng của bạn</h3>
            <table >

              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sum</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart?.products?.map((product: IProduct, index: number) => {
                  const sum = product.quantity * product.productId.price;

                  return (
                    <tr key={index}>
                      <td>
                        <img
                          width={90}
                          src={product.productId.images[0].url}
                          alt=''
                        />
                      </td>
                      <td>{product.productId.name}</td>
                      <td>${product.productId.price}</td>
                      <td>
                        <div className='flex' style={{ justifyContent: "center" }}>
                          <span
                            onClick={() => onChangeQuantity(product?.quantity - 1, product.productId._id)}
                            className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1'
                          >
                            -
                          </span>
                          <input
                            id='counter'
                            aria-label='input'
                            className='border border-gray-300 h-full text-center w-14 pb-1'
                            type='text'
                            value={product?.quantity}
                            onChange={(e) => onChangeQuantity(e, product.productId._id)}
                          />
                          <span
                            onClick={() => onChangeQuantity(product?.quantity + 1, product?.productId?._id)}
                            className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1'
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>${sum}</td>
                      <td>
                        <button style={{ fontSize: "25px" }} onClick={() => removeCart(product.productId._id)}><button className="btn-removeCart">x</button>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <form className="w-full max-w-lg" onSubmit={handleSubmit} >
            <h3 style={{ textAlign: "center" }}>Thông tin nhận hàng</h3>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                  Tên khách hàng
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name" type="text" placeholder="Nhập tên khách hàng" onChange={(e) => {
                    dispatchFormData({
                      type: "UPDATE_CUSTOMER_NAME",
                      payload: e.target.value
                    })
                    dispatchFormValid({
                      type: "VALIDATE_CUSTOMER_NAME",
                      payload: formData
                    })
                  }}
                  onBlur={() => dispatchFormValid({
                    type: "VALIDATE_CUSTOMER_NAME",
                    payload: formData
                  })}
                />
                <div className="text-red-500">{!formValid.isValidCustomerName ? "Trường dữ liệu không hợp lệ" : ""}</div>

              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                  Số điện thoại
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone" type="text" placeholder="Nhập số điện thoại" onChange={(e) => {
                    dispatchFormData({
                      type: "UPDATE_PHONE",
                      payload: e.target.value
                    })
                    dispatchFormValid({
                      type: "VALIDATE_PHONE",
                      payload: formData
                    })
                  }
                  }
                  onBlur={() => dispatchFormValid({
                    type: "VALIDATE_PHONE",
                    payload: formData
                  })}
                />
                <div className="text-red-500">{!formValid.isValidPhone ? "Trường dữ liệu không hợp lệ" : ""}</div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                  Địa chỉ
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address" type="text" placeholder="Nhập địa chỉ" onChange={(e) => {
                    dispatchFormData({
                      type: "UPDATE_ADDRESS",
                      payload: e.target.value
                    })
                    dispatchFormValid({
                      type: "VALIDATE_ADDRESS",
                      payload: formData
                    })
                  }
                  }
                  onBlur={() => dispatchFormValid({
                    type: "VALIDATE_ADDRESS",
                    payload: formData
                  })}

                />
                <div className="text-red-500">{!formValid.isValidAddress ? "Trường dữ liệu không hợp lệ" : ""}</div>

              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="note">
                  Ghi chú
                </label>
                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="note" type="text" placeholder="Nhập ghi chú" onChange={(e) => dispatchFormData({
                    type: "UPDATE_NOTE",
                    payload: e.target.value
                  })}
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phương thức thanh toán
                </label>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input type="radio" className="form-radio h-5 w-5 text-gray-600"
                      name="paymentMethod"
                      checked
                    />
                    <span className="ml-2 text-gray-700">Thanh toán khi nhận hàng</span>
                  </label>
                </div>
              </div>
            </div>
            <h1>Tổng tiền thanh toán: ${cart?.totalPrice}</h1>
            <button disabled={buttonDisabled} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Đặt hàng
            </button>
          </form>
        </div>
        : <div>
          <img src="https://bizweb.dktcdn.net/100/331/465/themes/684469/assets/empty-bags.jpg?1541753997372" alt="" />
          <p>Gio hàng trống</p>
        </div>}
    </div>
  );
};

export default Cart;

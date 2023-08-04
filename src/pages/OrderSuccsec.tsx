import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function OrderSuccessNotification() {


    return (


        <div className="message-main py-10 min-h-[300px]">
            <div className="image-success">
                <img src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" alt="" />
            </div>
            <h1>Đặt hàng thành công!</h1>
            <p>Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đã được ghi nhận và đang được xử lý.</p>

          <div className='flex justify-center items-center gap-6'>
              <Link to="/orders"> <button className="bg-orange-500 text-black font-bold py-2 px-4 rounded">
                    Kiểm tra đơn hàng
                </button></Link> 
                <button className="border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
                    Về trang chủ
                </button>
          </div>
        </div>

    );
}

export default OrderSuccessNotification;

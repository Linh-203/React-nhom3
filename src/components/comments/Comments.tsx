import React from 'react'
import "./comments.css"
const Comments = () => {
  return (
       <div className="comments">
       <h3>Bình luận (4)</h3>
      <div className="show-comment">
      
            {/* // var checkTime = new Date(item.createdAt);
            // var outTime = checkTime.toLocaleString(); */}
           
          
            <div className='item-showComment' >
               <img src="https://icdn.dantri.com.vn/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126694049.jpeg" alt="Avatar"/>
    <div className="comment-info">
      <h3 className="comment-name">Nam Lê</h3>
      <p className="comment-date">30/7/2023</p>
      <p className="comment-content">Sản phẩm rất tốt</p>
    </div>
          </div> 
          <div className='item-showComment' >
               <img src="https://icdn.dantri.com.vn/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126694049.jpeg" alt="Avatar"/>
    <div className="comment-info">
      <h3 className="comment-name">Nam Lê</h3>
      <p className="comment-date">30/7/2023</p>
      <p className="comment-content">Sản phẩm rất tốt</p>
    </div>
          </div> 
          <div className='item-showComment' >
               <img src="https://icdn.dantri.com.vn/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126694049.jpeg" alt="Avatar"/>
    <div className="comment-info">
      <h3 className="comment-name">Nam Lê</h3>
      <p className="comment-date">30/7/2023</p>
      <p className="comment-content">Sản phẩm rất tốt</p>
    </div>
          </div> 
          </div>
          <div className="mx-auto max-w-md">
  <h2 className="text-2xl font-bold mb-4">Viết bình luận của bạn</h2>
  <form>
    <div className="mb-4">
      <label  className="block text-sm font-medium text-gray-700">Comment</label>
      <textarea id="comment" className="form-textarea mt-1 block w-full border border-gray-200 p-2 rounded" rows="4"></textarea>
    </div>
   
    <div className="flex justify-end">
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
    </div>
  </form>
</div>

 
</div>
  )
}

export default Comments
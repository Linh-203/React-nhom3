import React, { useState, useEffect } from 'react';
import { IProduct } from '../../../common/product';
import productService from '../../../api/product';
import CardProduct from '../../../components/CardProduct/CardProduct';

const ListProduct = React.memo(() => {
    console.log('render')
   const [products, setProducts] = useState<IProduct[]>([]);
   useEffect(() => {
      void (async () => {
         try {
            const res = await productService.getAllProduct({});
            setProducts(res.data.data);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);
   return (
      <section className='grid grid-cols-3 gap-8 mt-5'>
         {products.map((item) => (
            <CardProduct product={item} link={`/products/${item._id}`} key={item._id} />
         ))}
      </section>
   );

   
});

export default ListProduct;

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import productService from '../../api/product';
import { IProduct } from '../../common/product';
import Slide from '../../components/Slide/Slide';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CardProduct from '../../components/CardProduct/CardProduct';

const SearchContext = () => {
   const location = useLocation();
   const searchValue = new URLSearchParams(location.search).get('');
   const [products, setProducts] = useState<IProduct[]>([]);
   const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
   const [notFound, setNotFound] = useState(false);

   useEffect(() => {
      productService
         .getAllProduct({})
         .then(({ data }) => {
            setProducts(data.data);
         })
         .catch(({ response }) => {
            alert(response.data.message);
         });
   }, []);

   useEffect(() => {
      const filtered = products.filter((product) => product.name.toLowerCase().includes(searchValue!.toLowerCase()));
      setFilteredProducts(filtered);
      setNotFound(filtered.length === 0);
   }, [searchValue, products]);

   return (
      <div>
         {searchValue && <h1>Sản phẩm bạn vừa tìm kiếm: {searchValue}</h1>}
         {notFound ? (
            <p className='not-found-text'>Không tìm thấy sản phẩm phù hợp</p>
         ) : filteredProducts.length > 0 ? (
            <Slide slidesPerView={4} navigation={true}>
               {filteredProducts.map((item, index) => (
                  <SwiperSlide key={index}>
                     <CardProduct product={item} link={`/products/${item._id}`} />
                  </SwiperSlide>
               ))}
            </Slide>
         ) : null}
      </div>
   );
};

export default SearchContext;

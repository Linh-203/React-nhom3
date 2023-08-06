import { AxiosResponse } from 'axios';
import { IProduct, ResponsePaginate, InputProduct } from '../common/product';
import instanse from './instance';

export type IQuery = {
   sort: string;
   order: 'asc' | 'desc';
   limit: number;
   expand: string;
   q: string;
   page: number;
   from: number;
   to: number;
   cate: string;
   inStock: boolean;
   outStock: boolean;
};

export const getAllProduct = async ({
   sort,
   order,
   limit,
   expand,
   q,
   page,
   from,
   to,
   cate,
   inStock,
   outStock
}: Partial<IQuery>): Promise<AxiosResponse<ResponsePaginate<IProduct[]>, any>> => {
   const res = await instanse.get(`/products`, {
      params: {
         _order: order,
         _expand: expand,
         _limit: limit,
         _sort: sort,
         _q: q,
         _page: page,
         _from: from,
         _to: to,
         _cate: cate,
         _inStock: inStock,
         _outStock: outStock
      }
   });
   return res;
};
export const getProductById = async (id: string): Promise<AxiosResponse<ResponsePaginate<IProduct>, any>> => {
   const res = await instanse.get('/products/' + id);
   return res;
};
export const deleteProduct = async (id: string) => {
   return await instanse.delete('/products/' + id);
};
export const addProduct = (product: InputProduct) => {
   return instanse.post('/products', product);
};
export const updateProduct = (id: string, product: InputProduct) => {
   return instanse.patch('/products/' + id, product);
};
const productService = { getAllProduct, getProductById, deleteProduct, addProduct, updateProduct };
export default productService;

import { AxiosResponse } from 'axios';
import { IProduct, ResponsePaginate } from '../common/product';
import instanse from './instanse';

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

const getAllProduct = async ({
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
const getProductById = async (id: string): Promise<AxiosResponse<any>> => {
   const res = await instanse.get('/products/' + id);
   return res;
};
const deleteProduct = async (id: string) => {
   return await instanse.delete('/products/' + id);
};
const addProduct = (product: IProduct) => {
   return instanse.post('/products', product);
};
const updateProduct = (id: string, product: IProduct) => {
   return instanse.patch('/products/' + id, product);
};
const productService = { getAllProduct, getProductById, deleteProduct, addProduct, updateProduct };
export default productService;

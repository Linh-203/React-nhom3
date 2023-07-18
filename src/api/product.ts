import { AxiosResponse } from 'axios';
import { IProduct, ResponsePaginate } from '../common/product';
import instanse from './instance';

export type IQuery = {
   sort: string;
   order: 'asc' | 'desc';
   limit: number;
   expand: string;
   q: string;
};

const getAllProduct = async ({
   sort,
   order,
   limit,
   expand,
   q
}: Partial<IQuery>): Promise<AxiosResponse<ResponsePaginate<IProduct[]>, any>> => {
   const res = await instanse.get(`/products`, {
      params: {
         _order: order,
         _expand: expand,
         _limit: limit,
         _sort: sort,
         _q: q
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

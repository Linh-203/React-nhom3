import { AxiosResponse } from 'axios';
import instanse from './instanse';
import { ResponsePaginate } from '../common/product';
import { ICategory } from '../common/category';

export const getAllCategory = async (): Promise<AxiosResponse<ResponsePaginate<ICategory[]>, any>> => {
   const res = await instanse.get('/categories?_expand');
   return res;
};
const getCategoryById = async (id: string): Promise<AxiosResponse<ResponsePaginate<ICategory>, any>> => {
   const res = await instanse.get('/categories/' + id + '?_expand');
   return res;
};
const categoryService = { getAllCategory };
export default categoryService;

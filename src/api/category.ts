import { AxiosResponse } from 'axios';
import instanse from './instanse';
import { ResponsePaginate } from '../common/product';
import { ICategory } from '../common/category';

export const getAllCategory = async (): Promise<ICategory[]> => {
   const res = await instanse.get('/categories?_expand');
   return res.data
 };
 const getCategoryById = async (id: string): Promise<ICategory[]> => {
   const res = await instanse.get('/categories/'+id+'?_expand')
   return res.data
 } 
const categoryService = { getAllCategory };
export default categoryService;
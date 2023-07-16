import { AxiosResponse } from 'axios';
import instanse from './instanse';
import { ResponsePaginate } from '../common/product';
import { ICategory } from '../common/category';

export const getAllCategory = async (): Promise<AxiosResponse<ResponsePaginate<ICategory[]>, any>> => {
   return await instanse.get('/categories');
};

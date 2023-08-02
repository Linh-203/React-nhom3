import { AxiosResponse } from 'axios';
import instance from './instance';
import { IVendor, ResponsePaginate } from '../common/product';

export const getAllVendor = (): Promise<AxiosResponse<ResponsePaginate<IVendor[]>, any>> => {
   return instance.get('/vendor');
};

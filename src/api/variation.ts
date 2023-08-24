import { AxiosResponse } from 'axios';
import instance from './instance';
import { IVariation } from '../common/product';

export const addVariation = (data: Omit<IVariation, '_id'>): Promise<AxiosResponse<IVariation, any>> => {
   return instance.post('/variations', data);
};

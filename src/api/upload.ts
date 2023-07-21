import { AxiosResponse } from 'axios';
import instanse from './instance';
import { Image } from '../common/image';
import { ResponsePaginate } from '../common/product';

export const uploadImage = async (files: FormData): Promise<AxiosResponse<ResponsePaginate<Image[] | string>, any>> => {
   console.log('bo m da submit');
   return await instanse.post('/upload', files);
};

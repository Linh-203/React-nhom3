import { AxiosResponse } from 'axios';
import instanse from './instance';
import { Image } from '../common/image';
import { ResponsePaginate } from '../common/product';

export const uploadImage = async (files: FormData): Promise<AxiosResponse<ResponsePaginate<Image[]>, any>> => {
   return await instanse.post('/images', files);
};
export const deleteImages = (publicId: string) => {
   return instanse.delete('/images/' + publicId);

};

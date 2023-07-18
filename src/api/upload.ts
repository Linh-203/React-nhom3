import instanse from './instance';

export const uploadImage = async (files): Promise<any> => {
   return await instanse.post('/upload', files);
};
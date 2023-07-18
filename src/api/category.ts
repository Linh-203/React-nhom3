import instance from './instance';

import { ICategory } from '../common/category';

export const createCate =async(data:ICategory)=>{
  return await instance.post("/categories",data)
}
export const getAllCategory = async (): Promise<ICategory[]> => {
  const res = await instance.get('/categories?_expand');
  return res.data
};
 export const getCategoryById = async (id: string)=> {
  return await instance.get('/categories/' + id)

}
export const removeCategoryById = async (id: string)=> {
  return await instance.delete('/categories/' + id)

}
export const updateCategory = async (id: string,data:ICategory) => {
  return await instance.patch('/categories/' + id, data)

}

const categoryService = { getAllCategory };
export default categoryService;

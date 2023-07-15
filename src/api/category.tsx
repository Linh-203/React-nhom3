import instanse from "./instanse";
import { ICategory } from "../common/category";

const getAllCategory = async (): Promise<ICategory[]> => {
    const res = await instanse.get('/categories?_expand');
    return res.data
  };
  const getCategoryById = async (id: string): Promise<ICategory[]> => {
    const res = await instanse.get('/categories/'+id+'?_expand')
    return res.data
  } 

  const categoryService = { getAllCategory, getCategoryById };
export default categoryService
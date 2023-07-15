import { Iproduct } from "../common/product";
import instanse from "./instanse";

const getAllProduct = async (): Promise<Iproduct[]> => {
  const res = await instanse.get('/products?_expand');
  return res.data
};
const getProductById = async (id: string): Promise<Iproduct[]> => {
  const res = await instanse.get('/products/'+id+'?_expand')
  return res.data
} 

const addProduct = async (product: Iproduct): Promise<Iproduct[] > => {
  const res = await instanse.post('/products/', product)
  return res.data
} 
const deleteProduct = async (id: string) => {
  return await instanse.delete('/products/' + id);
};
// const addProduct = (product: number) => {
//   return instanse.post('/products', product);
// };
//   const updateProduct = (id, product) => {
//     return instanse.patch('/products/' + id, product);
//   };
const productService = { getAllProduct, getProductById ,deleteProduct, addProduct };
export default productService
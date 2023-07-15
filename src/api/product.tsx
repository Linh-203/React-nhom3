import instanse from "./instanse";

const getAllProduct = () => {
    return instanse.get('/products/?_expand=category');
  };
  const deleteProduct = (id : string) => {
    return instanse.delete('/products/' + id);
  };
  const addProduct = (product : number) => {
    return instanse.post('/products', product);
  };
//   const updateProduct = (id, product) => {
//     return instanse.patch('/products/' + id, product);
//   };
  export { getAllProduct, deleteProduct, addProduct };
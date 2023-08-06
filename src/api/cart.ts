import { ICart } from '../common/cart';
import instance from './instance';

export const addToCart=(data:ICart)=>{
  return instance.post("/cart", data)
}
export const getCart=(id:string)=>{
    return instance.get("/cart/"+id)
  }
  export const updateCart=(data:ICart)=>{
    return instance.patch("/cart/",data)
  }
  export const removeOneProductInCart=(userId:string, productId:string)=>{
    
    return instance.post("/cart/"+productId, {userId:userId})
  }
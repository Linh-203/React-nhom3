import { IOrders } from '../common/orders';
import instance from './instance';
export const getOrderAdmin=()=>{
  return instance.get("/order-admin")
}
export const createOrder=(data:IOrders)=>{
  return instance.post("/order", data)
}
export const getOrdersUser=(userId:string)=>{
  return instance.get("/orderUser/"+ userId  )
}
export const getOrder=(id:string)=>{
  return instance.get("/order/"+id)
}
export const filterOrder=(status:string,idUser:string)=>{
  return instance.post('orderFilter/'+idUser, {status:status})
}
export const cancelOrder=(id:string)=>{
  return instance.delete('order/'+id)
}
export const resetOrder=(id:string)=>{
  return instance.post('order/'+id)
}
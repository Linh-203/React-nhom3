import { IProduct } from "./product"

export interface IProductInCart{
    productId:string,
    variationId:string,
    quantity:number
}
export type resCart={
 products:ProductPopulate[]

} & Omit<ICart, "products">

export type CartDataResponse ={
    message:string,
    cart:resCart
} 
type ProductPopulate={
    productId:IProduct,
    variationId:string,
    quantity:number
}
export interface ICart{
    _id:string,
    products:IProductInCart[],
    userId:string,
    quantity:number,
    totalPrice:number,
}

export type InputCart = {
    productId:string,
    quantity:number,
    variationId:string,
    userId:string
}
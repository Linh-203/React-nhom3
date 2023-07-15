import { Iproduct } from "./product";

export interface ICategory{
    id: string,
    name: string,
    products: Iproduct[]
}
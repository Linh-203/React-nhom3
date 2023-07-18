import { IProduct } from './product';

export type ICategory = {
   name: string;
   _id: string;
   image:string
   products?: IProduct[];
};

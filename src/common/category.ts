import { IProduct } from './product';

export type ICategory = {
   name: string;
   id: string;
   products?: IProduct[];
};

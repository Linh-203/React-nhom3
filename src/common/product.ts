// dung de data:any o day xin day !!!!!
export interface IProduct  {
   _id: string;
   name: string;
   favorite: number;
   price: number;
   desc: string;
   categoryId: string;
   stock: number;
   solded: number;
   variations: IVariation[];
   images: { url: string; public_id?: string; _id?: string }[];
   discount: number;
}

export type InputProduct = {
   name: string;
   price: number;
   desc: string;
   categoryId: string;
   images: string | { url: string; public_id?: string; _id?: string }[];
   discount: number;
   variations: IVariation[];
};
export type ResponsePaginate<T> = {
   message: string;
   data: T;
   pagination: IPaginate;
   maxPrice: number;
   inStock: number;
};

export type IPaginate = {
   currentPage: number;
   totalPages: number;
   totalItems: number;
};

export type IVariation = {
   _id: string;
   weight: number;
   quantity: number;
   vendorId: string;
};

export type IVendor = {
   _id: string;
   name: string;
   origin: string;
};

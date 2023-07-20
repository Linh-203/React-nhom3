// dung de data:any o day xin day !!!!!
export type IProduct = {
   _id: string;
   name: string;
   favorite: number;
   price: number;
   desc: string;
   categoryId: string;
   stock: number;
   solded: number;
   images: { url: string, public_id?: string, _id?: string }[];
   discount: number;
};
export type InputProduct = Omit<IProduct, '_id'>;
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

export type IProduct = {
   data: any;
   favorite: ReactNode;
   _id: string;
   name: string;
   price: number;
   desc: string;
   categoryId: string;
   stock: number;
   solded: number;
   images: { url: string }[];
   discount: number;
};

export type ResponsePaginate<T> = {
   message: string;
   data: T;
   pagination: IPaginate;
};

export type IPaginate ={
    currentPage: number;
      totalPages: number;
      totalItems: number;
}
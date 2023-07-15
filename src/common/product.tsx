export interface Iproduct {
    id: string,
    name: string,
    price: number,
    categoryId: string,
    desc: string,
    discount: number,
    favorite: number,
    solded: number,
    stock: number,
    images: [{url: string, public_id: string}]
}
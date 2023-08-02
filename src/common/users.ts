export type IUser = {
    _id: string;
    name: string;
    email: string;
    phone: number;
    password: string;
    avatar: string;
    role: 'admin' | 'member'   
};
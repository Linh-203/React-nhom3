import React, { useEffect, useState } from 'react';
import MenuDropDown from '../MenuDropDown';
import DashBoardIcon from '../../assets/icons/DashBoardIcon';
import ProductIcon from '../../assets/icons/ProductIcon';
import CategoryIcon from '../../assets/icons/CategoryIcon';

type IProps = {
    isMenuActive: boolean,
}

type IMenu = {
    title: string | React.ReactNode,
    icon?: React.ReactNode,
    to?: string,
    href?: string,
    children?: IMenu[],
}

const menu: IMenu[] = [
    {title: 'DashBoard', icon: <DashBoardIcon/>, to:"/admin/dashboard"},
    {title: 'Product Managerment', icon: <ProductIcon/>, children: [
        {title: 'Products', to: '/admin/products'},
        {title: 'Add Product', to: '/admin/product-add'},
    ]},
    {title: 'Category Managerment', icon: <CategoryIcon/>, children: [
        {title: 'Categories', to: '/admin/categories'},
        {title: 'Add Category', to: '/admin/category-add'},
    ]},
]

function AdminSideBar(props: IProps) {
    const [active, setActive] = useState(props.isMenuActive)
    useEffect(() => {
        setActive(props.isMenuActive)
    }, [props])
    return <div className={`fixed drop-shadow-lg left-0 w-64 p-0 bg-slate-900 transition-all  max-h-screen h-full overflow-y-auto overflow-x-hidden overscroll-y-contain ${!active?"-translate-x-full":"translate-x-0"}`}>
        <div className='h-16 bg-zinc-700 flex items-center justify-center'>
            <h1>logo here</h1>
        </div>
        <div>
            {menu.map((mu, index) =>(
                <MenuDropDown key={index} {...mu}/>
            ))}
        </div>
    </div>;
}

export default AdminSideBar;
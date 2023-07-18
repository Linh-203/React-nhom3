import { useMemo, useState } from 'react';
import DropDown, { DropdownChild } from '../../../components/Dropdown/DropDown';
import { useDispatch } from 'react-redux';
import { filterSlice } from '../../../slices/FilterSlice';

const DropFilter = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [label, setLabel] = useState<string>('Drop down');
   const dispatch = useDispatch();
   const childDrops: DropdownChild[] = useMemo(
      () => [
         {
            label: 'Drop down',
            handleGetValue: () => {
               dispatch(filterSlice.actions.setSort('createAt'));
               dispatch(filterSlice.actions.setOrder('asc'));
               setIsOpen(false);
               setLabel('Drop down');
            }
         },
         {
            label: 'From A-Z',
            handleGetValue: () => {
               dispatch(filterSlice.actions.setSort('name'));
               dispatch(filterSlice.actions.setOrder('asc'));
               setIsOpen(false);
               setLabel('From A-Z');
            }
         },
         {
            label: 'Price low to high',
            handleGetValue: () => {
               dispatch(filterSlice.actions.setSort('price'));
               dispatch(filterSlice.actions.setOrder('asc'));
               setIsOpen(false);
               setLabel('Price low to high');
            }
         },
         {
            label: 'Price high to low',
            handleGetValue: () => {
               dispatch(filterSlice.actions.setSort('price'));
               dispatch(filterSlice.actions.setOrder('desc'));
               setIsOpen(false);
               setLabel('Price high to low');
            }
         }
      ],
      []
   );
   return (
      <div className='relative'>
         <p
            className='font-semibold'
            onClick={() => {
               setIsOpen(!isOpen);
            }}
         >
            Sort by: <span className='text-grayLight200 font-normal cursor-pointer'>{label}</span>
         </p>
         {isOpen && <DropDown childs={childDrops} isOpen={isOpen} />}
      </div>
   );
};

export default DropFilter;

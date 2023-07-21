import React from 'react';
import { NavLink } from 'react-router-dom';
import UpArrow from '../../assets/icons/UpArrow';
import DownArrow from '../../assets/icons/DownArrow';

type IProps = {
   title: string | React.ReactNode;
   icon?: React.ReactNode;
   to?: string;
   href?: string;
   hadChildren: boolean;
   isDropdown?: boolean;
   onClick(): void | undefined;
};

function Button(props: IProps) {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   let Comp: any = 'button';
   const onHandleClick = () => props.onClick();
   const prps: { to?: string; href?: string } = {};
   if (props.to) {
      Comp = NavLink;
      prps.to = props.to;
   } else if (props.href) {
      Comp = 'a';
      prps.href = props.href;
   } else if (props.hadChildren) {
      Comp = 'button';
      prps.href = undefined;
      prps.to = undefined;
   }
   
   return (
      <Comp
         className={`relative w-full mx-auto rounded-xl h-14 items-center justify-between  flex p-5  text-black dark:text-white`}
         onClick={props.hadChildren?onHandleClick:()=>undefined}
         {...prps}
      >
         <span className='flex-1 flex gap-2 text-left hover:text-hightLigh'>
            {props.icon && <span className='py-1'>{props.icon}</span>}
            {props.title}
         </span>
         {props.hadChildren && (
            <span>
               {props.isDropdown ? (
                  <DownArrow className='w-3 absolute right-2 top-1/3 dark:text-white ' />
               ) : (
                  <UpArrow className='w-3 absolute right-2 top-1/3 dark:text-white ' />
               )}
            </span>
         )}
      </Comp>
   );
}

export default Button;

import { useState, useEffect } from 'react';

type IProps = {
   title?: string;
   toggle?: boolean;
   children?: React.ReactNode;
};

function Portal(props: IProps) {
   const [toggle, setToggle] = useState<boolean>(props.toggle || false);

   useEffect(() => {
      setToggle(props.toggle || false);
   }, [props]);

   return (
      <div
         className={`fixed left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center overflow-hidden transition-all justify-center ${
            toggle ? 'top-0' : '-top-[100%]'
         }`}
      >
         <div onClick={(event) => event.stopPropagation()} className='w-[80%] min-h-[90%] overscroll-contain overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-5'>
            {props.children}
         </div>
      </div>
   );
}

export default Portal;

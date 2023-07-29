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
         className={`fixed left-0 min-w-[100vw] min-h-[100vh] bg-[rgba(0,0,0,0.5)] flex items-center overflow-hidden transition-all justify-center z-[100] ${
            toggle ? 'top-0' : '-top-[100%]'
         }`}
      >
         <div
            onClick={(event) => event.stopPropagation()}
            className='w-[80%] min-h-[90%] overscroll-contain overflow-x-hidden overflow-y-auto rounded-2xl bg-white p-5'
         >
            {props.children}
         </div>
      </div>
   );
}

export default Portal;

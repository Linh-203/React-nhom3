import { useState, useEffect } from 'react';

type IProps = {
   toggle?: boolean;
   children?: React.ReactNode;
};

function Portal(props: IProps) {
   const [toggle, setToggle] = useState<boolean>(props.toggle||false);

    useEffect(() => {
        setToggle(props.toggle||false)
    }, [props])

   return (
      <div
         className={`fixed left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center transition-all justify-center ${
            toggle ? 'top-0' : '-top-[100%]'
         }`}
         onClick={() => setToggle(false)}
      >
         <div onClick={(event) => event.stopPropagation()} className='w-[80%] h-[90%] rounded-2xl bg-white p-5'>
            <div className='flex pb-4 justify-between items-center'>
               <h1 className='text-4xl font-bold'>Product Detail</h1>
               <button
                  onClick={() => setToggle(false)}
                  className='text-white p-2 rounded-lg bg-red-400 hover:bg-red-500'
               >
                  Close
               </button>
            </div>
            {props.children}
         </div>
      </div>
   );
}

export default Portal;

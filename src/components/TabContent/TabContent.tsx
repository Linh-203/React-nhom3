import React, { useState } from 'react';
import style from './TabContent.module.css';
export type Tab = {
   label: string;
   content: string | JSX.Element;
   type: string;
};
type Props = {
   tabs: Tab[];
};

const TabContent = React.memo(({ tabs }: Props) => {
   const [type, setType] = useState<string>(tabs[0].type);
   return (
      <div>
         <div className={`${style['head-tab']}`}>
            {tabs.map((tab, index) => (
               <button
                  key={index}
                  onClick={() => setType(tab.type)}
                  className={`${style['btn-tab']}  ${
                     type === tab.type ? 'text-gray-600' : 'text-grayLight200'
                  } uppercase`}
               >
                  {tab.label}
               </button>
            ))}
         </div>
         <div className='px-[2rem] text-grayLight200'>{tabs?.find((item) => item.type === type)?.content}</div>
      </div>
   );
});

export default TabContent;

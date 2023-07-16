import { useEffect, useState } from 'react';
import GrownUp from '../../assets/icons/GrownUp';
import GrownDown from '../../assets/icons/GrownDown';

export interface IProps {
   className?: string;
   title: string;
   total: number;
   resultPercent: number;
   state: 'Decrease' | 'Increase' | ['Decrease', 'Currency'] | ['Increase', 'Currency'];
}

function AnalyticOverview({ className, total, resultPercent, state, title }: IProps) {
   const [numberRevert, setNumberRevert] = useState<string>();
   const convertNumberToAbbreviation = (number: number) => {
      if (number >= 1000) {
         // Chuyển đổi thành định dạng "200.0K"
         const abbreviatedNumber = (number / 1000).toFixed(1) + 'K';
         // Giữ nguyên giá trị nếu số nhỏ hơn 1000
         if (state.length == 2) {
            return '$' + abbreviatedNumber;
         } else {
            return abbreviatedNumber;
         }
      } else {
         // Giữ nguyên giá trị nếu số nhỏ hơn 1000
         if (state.length == 2) {
            return '$' + number.toString();
         } else {
            return number.toString();
         }
      }
   };

   useEffect(() => {
      setNumberRevert(convertNumberToAbbreviation(total));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [total]);
   return (
      <div className={`w-1/5 rounded-2xl ${className ? className : ''} overflow-hidden`}>
         <div className={`w-full h-full relative p-5`}>
            {state === 'Decrease' ? (
               <GrownDown className='absolute top-3 right-3' />
            ) : (
               <GrownUp className='absolute top-3 right-3' />
            )}
            <h1 className='text-[35px] font-bold text-center'>{numberRevert}</h1>
            <h5 className='text-center'>{title}</h5>
            <p className='text-[13px] text-center text-gray-400'>
               {resultPercent}% {state.length == 2 ? state[0] : state} from Last Week
            </p>
         </div>{' '}
      </div>
   );
}

export default AnalyticOverview;

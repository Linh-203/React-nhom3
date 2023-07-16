export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const UpArrow = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         version='1.1'
         width={width}
         height={height}
         fill='none'
         stroke='currentColor'
         strokeWidth='1'
         strokeLinecap='round'
         strokeLinejoin='round'
         viewBox='0 0 6.35 6.35'
         className={className}
      >
         <g>
            <path
               d='M5.291 3.987a.265.265 0 0 0-.064-.192L3.373 1.678a.265.265 0 0 0-.398 0L1.123 3.795a.265.265 0 0 0 .026.373.265.265 0 0 0 .373-.025l1.652-1.889 1.654 1.889a.265.265 0 0 0 .373.025.265.265 0 0 0 .09-.181z'
               fill='#000'
               data-original='#000000'
               opacity='1'
            ></path>
         </g>
      </svg>
   );
};

export default UpArrow;

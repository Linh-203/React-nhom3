export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const SearchIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         version='1.1'
         width={width}
         height={height}
         fill='none'
         stroke='currentColor'
         strokeWidth='2'
         strokeLinecap='round'
         strokeLinejoin='round'
         viewBox='0 0 24 24'
         className={className}
      >
         <g>
            <path
               d='m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z'
               fill='#000000'
               data-original='#000000'
            ></path>
         </g>
      </svg>
   );
};

export default SearchIcon;

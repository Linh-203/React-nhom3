export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const BellIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
         viewBox='0 0 64 64'
         className={className}
      >
         <g>
            <path
               d='M28.26 11.4a1 1 0 0 1-.93-.63A4.8 4.8 0 0 1 27 9a5 5 0 0 1 10 0 4.8 4.8 0 0 1-.33 1.77 1 1 0 0 1-1.15.61 16.71 16.71 0 0 0-7 0zM32 6a3 3 0 0 0-3 3 1.93 1.93 0 0 0 0 .24 18.75 18.75 0 0 1 6 0A1.93 1.93 0 0 0 35 9a3 3 0 0 0-3-3z'
               fill='#000000'
               data-original='#000000'
            ></path>
            <path
               d='M50 48H14a1 1 0 0 1-1-1V28A19.06 19.06 0 0 1 28.05 9.42a18.83 18.83 0 0 1 7.91 0A19.06 19.06 0 0 1 51 28v19a1 1 0 0 1-1 1zm-35-2h34V28a17 17 0 0 0-13.47-16.62 16.75 16.75 0 0 0-7 0A17 17 0 0 0 15 28z'
               fill='#000000'
               data-original='#000000'
            ></path>
            <path
               d='M52 54H12a4 4 0 1 1 0-8h40a4 4 0 1 1 0 8zm-40-6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h40a2 2 0 0 0 2-2 2 2 0 0 0-2-2z'
               fill='#000000'
               data-original='#000000'
            ></path>
            <path
               d='M32 60a6 6 0 0 1-6-6 5.77 5.77 0 0 1 .12-1.21 1 1 0 0 1 1-.79h9.8a1 1 0 0 1 1 .79A5.77 5.77 0 0 1 38 54a6 6 0 0 1-6 6zm-4-6a4 4 0 0 0 8 0z'
               fill='#000000'
               data-original='#000000'
            ></path>
         </g>
      </svg>
   );
};

export default BellIcon;

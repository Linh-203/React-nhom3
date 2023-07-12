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
         viewBox='0 0 32 32'
         className={className}
      >
         <g>
            <linearGradient id='a' x1='6.23' x2='25.86' y1='7.87' y2='27.5' gradientUnits='userSpaceOnUse'>
               <stop offset='0' stopColor='#5c258d'></stop>
               <stop offset='1' stopColor='#4389a2'></stop>
            </linearGradient>
            <linearGradient id='b' x1='23.04' x2='29.91' y1='4.57' y2='11.44'></linearGradient>
            <linearGradient id='c' x1='3.61' x2='7.48' y1='6.08' y2='9.95'></linearGradient>
            <g data-name='Layer 13'>
               <path
                  fill='url(#a)'
                  d='M26 20.58V12a10 10 0 0 0-9.93-10C10.67 1.91 5.91 7 6 12.34v8.23l-2 2A2 2 0 0 0 5.43 26H12c.09 5.25 7.89 5.24 8 0h6.58A2 2 0 0 0 28 22.57zM16 28a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2zm3-4H5.44c.69-.83 2.69-2.18 2.58-3.4v-8.26C8.26 1.67 23.57 1.24 24 12v8.57c-.13 1.21 1.93 2.6 2.59 3.4z'
                  data-original='url(#a)'
               ></path>
               <path
                  fill='url(#b)'
                  d='M25.7 3.36a1 1 0 0 0-1.49 1.33A11 11 0 0 1 27 12a1 1 0 0 0 1 1c2.85-.37-.81-8.57-2.3-9.64z'
                  data-original='url(#b)'
               ></path>
               <path
                  fill='url(#c)'
                  d='M5 12a11 11 0 0 1 2.79-7.31 1 1 0 0 0-.07-1.41C5.44 1.3 1 13 4 13a1 1 0 0 0 1-1z'
                  data-original='url(#c)'
               ></path>
            </g>
         </g>
      </svg>
   );
};

export default BellIcon;

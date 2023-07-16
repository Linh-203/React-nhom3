export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const MenuIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
         viewBox='0 0 16 16'
         className={className}
      >
         <g>
            <g data-name='31'>
               <path
                  d='M15.5 4H.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zM15.5 9H.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1zM15.5 14H.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z'
                  fill='#000000'
                  data-original='#000000'
               ></path>
            </g>
         </g>
      </svg>
   );
};

export default MenuIcon;

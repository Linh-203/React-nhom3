import { IconProps } from './GlassIcon';

const DownArrow = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
         viewBox='0 0 32 32'
         className={className}
      >
         <g>
            <path
               fill='#000000'
               fillRule='evenodd'
               d='M4.94 10.94a1.5 1.5 0 0 1 2.12 0L16 19.878l8.94-8.94a1.5 1.5 0 0 1 2.12 2.122l-10 10a1.5 1.5 0 0 1-2.12 0l-10-10a1.5 1.5 0 0 1 0-2.122z'
               clipRule='evenodd'
               data-original='#000000'
            ></path>
         </g>
      </svg>
   );
};

export default DownArrow;

import { IconProps } from './GlassIcon';

const CategoryIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
               d='M7.8 10.5h7.4c.8 0 1.3-.9.8-1.5l-3.7-6.1c-.4-.6-1.3-.6-1.7 0L6.9 9c-.4.7.1 1.5.9 1.5z'
               fill='#ffffff'
               data-original='#000000'
               opacity='1'
            ></path>
            <circle cx='17' cy='17' r='4.5' fill='#ffffff' data-original='#000000' opacity='1'></circle>
            <path
               d='M9.5 13h-6c-.5 0-1 .5-1 1v6c0 .5.5 1 1 1h6c.5 0 1-.5 1-1v-6c0-.5-.5-1-1-1z'
               fill='#ffffff'
               data-original='#000000'
               opacity='1'
            ></path>
         </g>
      </svg>
   );
};

export default CategoryIcon;

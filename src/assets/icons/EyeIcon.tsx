import { IconProps } from './GlassIcon';

const EyeIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         viewBox='0 0 24 24'
         fill='none'
         stroke='currentColor'
         stroke-width='2'
         stroke-linecap='round'
         stroke-linejoin='round'
         className={className}
      >
         <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
         <circle cx='12' cy='12' r='3'></circle>
      </svg>
   );
};

export default EyeIcon;
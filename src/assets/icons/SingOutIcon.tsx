import { IconProps } from './GlassIcon';

const SignOutIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
         viewBox='0 0 30 30'
         className={className}
      >
         <g>
            <g fill='none' stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
               <path d='M15 5v10M10 8.5a9 9 0 1 0 10 0' fill=''></path>
            </g>
         </g>
      </svg>
   );
};

export default SignOutIcon;

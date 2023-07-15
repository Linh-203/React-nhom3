import { IconProps } from './GlassIcon';

const GrownUp = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
            <clipPath id='a'>
               <path d='M0 0h24v24H0z' fill='#000000' data-original='#000000'></path>
            </clipPath>
            <g fill='#000' clipPath='url(#a)'>
               <path
                  d='M19.586 7H21v1.414l-7.293 7.293a1 1 0 0 1-1.414 0L9 12.414l-6.293 6.293a1 1 0 1 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0L13 13.586z'
                  opacity='.4'
                  fill='#000000'
                  data-original='#000000'
               ></path>
               <path
                  fillRule='evenodd'
                  d='M22 13a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h5v5a1 1 0 0 0 1 1z'
                  clipRule='evenodd'
                  fill='#000000'
                  data-original='#000000'
               ></path>
            </g>
         </g>
      </svg>
   );
};

export default GrownUp;

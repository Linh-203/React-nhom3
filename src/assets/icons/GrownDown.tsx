import { IconProps } from './GlassIcon';

const GrownDown = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
               <path d='M0 0h24v24H0z' fill='#000000' data-original='#000000' opacity='1'></path>
            </clipPath>
            <g fill='#000000' clipPath='url(#a)'>
               <g opacity='.4'>
                  <path
                     d='M22.638 18.77zM22.77 18.637zM21 15.586l-6.293-6.293a1 1 0 0 0-1.414 0L10 12.586 2.707 5.293a1 1 0 0 0-1.414 1.414l8 8a1 1 0 0 0 1.414 0L14 11.414 19.586 17H21z'
                     fill='#000000'
                     data-original='#000000'
                     opacity='1'
                  ></path>
               </g>
               <path
                  fillRule='evenodd'
                  d='M22 11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1z'
                  clipRule='evenodd'
                  fill='#000000'
                  data-original='#000000'
                  opacity='1'
               ></path>
            </g>
         </g>
      </svg>
   );
};

export default GrownDown;

export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const DashBoardIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
         viewBox='0 0 512 512'
         className={className}
      >
         <g>
            <path
               fill='#2196f3'
               d='M197.332 0h-160C16.746 0 0 16.746 0 37.332v96c0 20.59 16.746 37.336 37.332 37.336h160c20.59 0 37.336-16.746 37.336-37.336v-96C234.668 16.746 217.922 0 197.332 0zm0 0'
               data-original='#2196f3'
            ></path>
            <path
               fill='#1976d2'
               d='M197.332 213.332h-160C16.746 213.332 0 230.078 0 250.668v224C0 495.254 16.746 512 37.332 512h160c20.59 0 37.336-16.746 37.336-37.332v-224c0-20.59-16.746-37.336-37.336-37.336zm0 0'
               data-original='#1976d2'
            ></path>
            <path
               fill='#2196f3'
               d='M474.668 341.332h-160c-20.59 0-37.336 16.746-37.336 37.336v96c0 20.586 16.746 37.332 37.336 37.332h160C495.254 512 512 495.254 512 474.668v-96c0-20.59-16.746-37.336-37.332-37.336zm0 0'
               data-original='#2196f3'
            ></path>
            <path
               fill='#1976d2'
               d='M474.668 0h-160c-20.59 0-37.336 16.746-37.336 37.332v224c0 20.59 16.746 37.336 37.336 37.336h160c20.586 0 37.332-16.746 37.332-37.336v-224C512 16.746 495.254 0 474.668 0zm0 0'
               data-original='#1976d2'
            ></path>
         </g>
      </svg>
   );
};

export default DashBoardIcon;

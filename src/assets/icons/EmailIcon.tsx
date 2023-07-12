export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const EmailIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
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
         viewBox='0 0 550 350'
         className={className}
      >
         <g>
            <path
               d='M462.5-5.582h-400C27.988-5.57.016 22.406 0 56.918v233.371c.016 34.512 27.988 62.492 62.5 62.5h400c34.512-.008 62.484-27.988 62.5-62.5V56.918c-.016-34.512-27.988-62.488-62.5-62.5zm-400 25h400c18.004.047 33.453 12.824 36.875 30.496L262.5 181.918 25.625 49.914c3.422-17.672 18.871-30.45 36.875-30.496zm400 308.25h-400c-20.684-.063-37.441-16.816-37.5-37.5v-212l231.375 128.996a13.17 13.17 0 0 0 6.125 1.629c2.152.023 4.266-.54 6.125-1.629L500 78.168v212c-.016 20.703-16.797 37.48-37.5 37.5zm0 0'
               fill='#000000'
               data-original='#000000'
            ></path>
         </g>
      </svg>
   );
};

export default EmailIcon;
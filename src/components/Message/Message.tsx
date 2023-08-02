import { useEffect, useState } from 'react';
import PortalF8 from '../Portal/PortalOfHiep';
import style from './Message.module.css';
import { useNavigate } from 'react-router-dom';
type Props = {
   msg: string;
   type: 'error' | 'warn' | 'success';
   duration?: number;
   navigateLink?: string;
};

const Message = ({ msg, type, duration = 500, navigateLink }: Props) => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const navigate = useNavigate();
   useEffect(() => {
      setIsOpen(true);
      const timeId = setTimeout(() => {
         setIsOpen(false);
         if (navigateLink) navigate(navigateLink);
      }, duration);

      return () => {
         clearTimeout(timeId);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [duration, msg, navigateLink]);
   if (!isOpen) return null;
   return (
      <PortalF8>
         <div
            className={`${style['wrap-msg']} ${type === 'warn' ? 'bg-yellow-400' : ''} ${
               type === 'error' ? 'bg-red-400' : ''
            } ${type === 'success' ? 'bg-green-400' : ''} text-white font-semibold text-center`}
         >
            {msg}
         </div>
      </PortalF8>
   );
};

export default Message;

import { ReactNode, useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

type Props = {
   children: ReactNode;
   target?: string;
};
// @param : target : string -> use to custom portal, if you want to create portal in a HTML element with id or className
function PortalF8({ children, target }: Props) {
   const [root, setRoot] = useState<Element>();
   useEffect(() => {
      let portalRoot = document.querySelector(target!);
      if (!portalRoot) {
         portalRoot = document.createElement('div');
         portalRoot.classList.add('absolute');
         portalRoot.classList.add('w-full');
         portalRoot.classList.add('top-0');
         portalRoot.classList.add('left-0');
         document.body.appendChild(portalRoot);
      }
      setRoot(portalRoot);
      return () => {
         if (!target) {
            document.body.removeChild(portalRoot!);
         }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [target]);

   if (!root) {
      return null;
   }
   return ReactDOM.createPortal(children, root);
}

export default PortalF8;

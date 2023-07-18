import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = <T>(q: any, duration: number) => {
   const [value, setValue] = useState<T>();

   useEffect(() => {
      const timeId = setTimeout(() => {
         // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
         setValue(q);
      }, duration);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => clearTimeout(timeId);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [q]);

   return value;
};

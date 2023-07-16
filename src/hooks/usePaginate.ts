import { useCallback, useMemo, useState } from 'react';

type Props = {
   totalPages: number;
   curPage: number;
};

export const usePaginate = ({ curPage, totalPages }: Props) => {
   const [page, setPage] = useState<number>(curPage);
   const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, index) => index + start);
   };
   const pageRange = useMemo(() => range(1, totalPages), [totalPages]);
   const nextPage = useCallback(() => {
      if (page === totalPages) setPage(1);
      else setPage((prev) => prev + 1);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const prevPage = useCallback(() => {
      if (page === 1) setPage((prev) => prev - 1);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const goToPage = useCallback((p: number) => {
      setPage(p);
   }, []);

   return { pageRange, nextPage, prevPage, goToPage, page };
};

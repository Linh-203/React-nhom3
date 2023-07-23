import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allQuerySelector, filterSlice } from '../slices/FilterSlice';

type Props = {
   totalPages: number;
};

export const usePaginate = ({ totalPages }: Props) => {
   const { page } = useSelector(allQuerySelector);
   const dispatch = useDispatch();
   const range = (start: number, end: number) => {
      const length = end - start + 1;
      return Array.from({ length }, (_, index) => index + start);
   };
   const pageRange = useMemo(() => range(1, totalPages), [totalPages]);
   const nextPage = useCallback(() => {
      if (page === totalPages) dispatch(filterSlice.actions.setPage(1));
      else dispatch(filterSlice.actions.setPage(page + 1));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const prevPage = useCallback(() => {
      if (page === 1) dispatch(filterSlice.actions.setPage(page - 1));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const goToPage = useCallback((p: number) => {
      dispatch(filterSlice.actions.setPage(p));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return { pageRange, nextPage, prevPage, goToPage, page };
};

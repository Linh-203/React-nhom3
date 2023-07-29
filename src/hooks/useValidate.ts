function useValidate() {
   const handleValidate = (item: Record<string, string | number>): [boolean, Record<string, string | undefined>] => {
      const errs: Record<string, string | undefined> = {};
      let isValid = true;
      for (const key in item) {
         if (item[key].toString().trim() === '' || (item[key] == undefined) || (item[key] == 0 && key == 'price')) {
            errs[key] = 'Hãy nhập ' + key;
            isValid = false;
         } else {
            errs[key] = undefined;
         }
      }
      return [isValid, errs];
   };
   return handleValidate;
}

export default useValidate;

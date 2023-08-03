interface IValidateRules {
   required?: boolean;
   min?: number;
   max?: number;
   minLength?: number;
   maxLength?: number;
   email?: boolean;
   type?: 'object' | 'array' | 'number';
}

export type ValidationPattern = Record<string, IValidateRules>;

function useValidate() {
   function handleValidate(
      item: Record<string, string | number | string[]>,
      pattern: ValidationPattern
   ): [boolean, Record<string, string | undefined>] {
      const errs: Record<string, string | undefined> = {};
      let isValid = true;
      // for (const key in item) {
      //    // if (item[key].toString().trim() === '' || (item[key] == undefined) || (item[key] == 0 && key == 'price')) {
      //    //    errs[key] = 'Hãy nhập ' + key;
      //    //    isValid = false;
      //    // } else if (item[key] as number < 0) {
      //    //    errs[key] = key + " phải lớn hơn 0";
      //    //    isValid = false;
      //    // } else {
      //    //    errs[key] = undefined;
      //    // }
      // }
      for (const key in item) {
         const value = item[key];
         const validationRules: IValidateRules = pattern[key];
         if (validationRules) {
            if (validationRules.required && (value === undefined || value.toString().trim() === '')) {
               errs[key] = 'Vui lòng không để trống trường này!';
               isValid = false;
            } else if (validationRules.email && typeof value === 'string' && !isValidEmail(value)) {
               errs[key] = 'Email không hợp lệ';
               isValid = false;
            } else if (validationRules.min !== undefined && typeof value === 'string') {
               // Convert the value to a number for comparison
               const numericValue = parseFloat(value);
               if (isNaN(numericValue) || numericValue < validationRules?.min) {
                  errs[key] = 'Giá trị phải lớn hơn hoặc bằng ' + validationRules.min.toString();
                  isValid = false;
               }
            } else if (validationRules.max !== undefined && typeof value === 'string') {
               // Convert the value to a number for comparison
               const numericValue = parseFloat(value);
               if (isNaN(numericValue) || numericValue > validationRules?.max) {
                  errs[key] = 'Giá trị phải lớn hơn hoặc bằng ' + validationRules.max?.toString();
                  isValid = false;
               }
            } else if (validationRules.type === 'number' && typeof value === 'string') {
               // Convert the value to a number for comparison
               const numericValue = parseFloat(value);
               if (isNaN(numericValue)) {
                  errs[key] = 'Không phải là 1 số';
                  isValid = false;
               }
            } else if (validationRules.minLength !== undefined && typeof value === 'string') {
               if (value.length < validationRules.minLength) {
                  errs[key] = 'Giá trị phải có độ dài tối thiểu ' + validationRules.minLength.toString();
                  isValid = false;
               }
            } else if (validationRules.maxLength !== undefined && typeof value === 'string') {
               if (value.length > validationRules.maxLength) {
                  errs[key] = 'Giá trị phải có độ dài tối đa ' + validationRules.maxLength.toString();
                  isValid = false;
               }
            }
            //  else if (validationRules.type === 'object' && typeof value !== 'object') {
            //    errs[key] = 'Giá trị phải là một object';
            //    isValid = false;
            else if (validationRules.type === 'array' && Array.isArray(value) && value.length === 0) {
               errs[key] = 'Vui lòng không để trống trường này!';
               isValid = false;
            } else {
               errs[key] = undefined;
            }
         }
      }
      return [isValid, errs];
   }
   return handleValidate;
}

function isValidEmail(email: string): boolean {
   // Basic email validation regex pattern
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}

export default useValidate;

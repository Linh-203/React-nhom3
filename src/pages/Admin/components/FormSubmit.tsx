// import { Image } from '../../../common/image';
// import { InputProduct } from '../../../common/product';
import useValidate, { ValidationPattern } from '../../../hooks/useValidate';
import { FileFormTarget } from '../UpdateProduct';

// type FormResult<T> = {
//   [key in keyof T]: T[key] extends (infer U)[] ? U[] | string : T[key] | string;
// };

export type FormResponse<T> = {
   result: T;
   isValid: boolean;
   errs: Record<string, string | undefined>;
};

type IProps<T> = {
   children?: React.ReactNode;
   onSubmit: (res: FormResponse<T>) => void;
   haveFiles?: boolean;
   className?: string;
   pattern?: ValidationPattern;
};

function FormSubmit<T>(props: IProps<T>) {
   const validate = useValidate();

   const handleSubmit = (e: FileFormTarget) => {
      e.preventDefault();
      const formResult: T | Record<string, number | string | string[] > = {};
      let fileExist = false;
      if (props.haveFiles) {
         fileExist = props.haveFiles;
      }
      let files: string[] = [];
      for (const tg of e.target) {
         if (tg.name && !tg.files && typeof tg.value !== 'number') {
            formResult[tg.name] = tg.value.toString();
         }
         if (tg.files && tg.files.length > 0) {
            fileExist = true;
            files = tg.files as string[];
         }
         // if (tg.name && !tg.files && typeof tg.value === 'object') {
         //    formResult[tg.name] = JSON.stringify(tg.value);
         // }
      }
      const [isValid, errs] = validate(formResult, props.pattern || {});

      let valid = isValid;
      if (fileExist) {
         if (files && files.length > 0) {
            errs.images = undefined;
            formResult.images = files;
            props.onSubmit({ result: formResult as T, isValid: valid, errs: errs });
         } else {
            errs.images = 'Hãy chọn file';
            valid = false;
            props.onSubmit({ result: formResult as T, isValid: valid, errs: errs });
         }
      } else {
         props.onSubmit({ result: formResult as T, isValid: valid, errs: errs });
      }
   };

   return (
      <form onSubmit={handleSubmit} className={props.className}>
         {props.children}
      </form>
   );
}

export default FormSubmit;

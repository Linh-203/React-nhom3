import { uploadImage } from '../../../api/upload';
import { Image } from '../../../common/image';
import { InputProduct } from '../../../common/product';
import useValidate from '../../../hooks/useValidate';
import { FileFormTarget } from '../UpdateProduct';

type IProps = {
   children?: React.ReactNode;
   onSubmit: (
      result: Record<string, string | number | Image[]> | InputProduct,
      isValid: boolean,
      errs: Record<string, string | number | undefined> | InputProduct
   ) => void;
   haveFiles?: boolean;
   className?: string;
};

function FormSubmit(props: IProps) {
   const validate = useValidate();

   const handleSubmit = (e: FileFormTarget) => {
      e.preventDefault();
      const formResult: Record<string, string | number> = {};
      let fileExist = false;
      
      if (props.haveFiles) {
        fileExist = props.haveFiles;
      }
      
      let files = '';
      for (const tg of e.target) {
         if (tg.name && !tg.files) {
            formResult[tg.name] = tg.value;
         }
         if (tg.files && tg.files.length > 0) {
            fileExist = true;
            files = tg.files as string;
         }
      }
      console.log(fileExist);

      const [isValid, errs] = validate(formResult);

      let valid = isValid;
      if (fileExist) {
        console.log(files);
        
         if (files.length > 0) {
            formResult.images = files;
            props.onSubmit(formResult, valid, errs);
         } else {
            errs.images = 'Hãy chọn ảnh';
            valid = false;
            props.onSubmit(formResult, valid, errs);
         }
      } else {
         props.onSubmit(formResult, valid, errs);
      }
   };
   return (
      <form onSubmit={handleSubmit} className={props.className}>
         {props.children}
      </form>
   );
}

export default FormSubmit;

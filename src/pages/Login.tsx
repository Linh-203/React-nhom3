import FormSubmit, { FormResponse } from './Admin/components/FormSubmit';
import FormInputFeild from '../components/InputField/InputFeild';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';
import FacebookIcon from '../assets/icons/Fb';
import Gg from '../assets/icons/Gg';
import Twitter from '../assets/icons/Twitter';
import { useState } from 'react';
// import Message from '../components/Message/Message';
const { InputField } = FormInputFeild;
const Login = () => {
   const [errors, setErrors] = useState<Record<string, string | undefined>>({});
   const validateForm = (values: { [key: string]: string }): boolean => {
      let isValid = true;
      const newErrors: { [key: string]: string | undefined } = {};

      // Kiểm tra trường email
      if (!values.email) {
         newErrors.email = 'Email is required.';
         isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
         newErrors.email = 'Invalid email address.';
         isValid = false;
      }

      // Kiểm tra trường password
      if (!values.password) {
         newErrors.password = 'Password is required.';
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };
   const { login, isLoading, error } = useLogin();
   const onHandleSubmit = async (res: FormResponse<{ email: string; password: string }>) => {
      const { result } = res;
      const isValid = validateForm(result);
      if (isValid) {
         await login(result.email, result.password);
      }
   };

   return (
      <div className='relative'>
         {/* {msg && <Message msg={msg.content} type={msg.type} duration={1000} navigateLink='/admin/products' />} */}

         <FormSubmit
            onSubmit={onHandleSubmit}
            pattern={{ email: { required: true, email: true }, password: { required: true } }}
            className='my-28'
         >
            <div className='flex justify-center gap-28 '>
               <div className=''>
                  <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg' alt='' />
               </div>
               <div className='w-80'>
                  <div>
                     <h2 className='text-4xl pt-4 pb-4 font-bold dark:text-white'>Login</h2>
                  </div>
                  <InputField type='text' name='email' placeholder='Your Email' />
                  {errors.email && <p className='text-sm text-red-400'>{errors.email}</p>}

                  <InputField type='password' name='password' placeholder='Your Password' />
                  {errors.password && <p className='text-sm text-red-400'>{errors.password}</p>}

                  <button
                     disabled={isLoading}
                     type='submit'
                     className='text-lg mt-10 py-1 px-5 border-transparent shadow-sm text-white rounded bg-[dodgerblue] hover:bg-gradient-to-r hover:from-[rgba(30,144,255,1)] hover:from-0% hover:to-[rgba(0,212,255,1)] hover:to-100%'
                  >
                     Submit
                  </button>
                  {error && <div className='error'>{error}</div>}
               </div>
            </div>
            <div className='flex justify-center gap-48 py-16'>
               <div className=''>
                  <Link to={'/signup'}>Create an account !</Link>
               </div>
               <div className=' flex items-center gap-5 pl-10 pr-24'>
                  <a href='#'>Or login with</a>
                  <FacebookIcon className='w-7 h-7' />
                  <Gg className='w-7 h-7' />
                  <Twitter className='w-8 h-8' />
               </div>
            </div>
         </FormSubmit>
      </div>
   );
};

export default Login;

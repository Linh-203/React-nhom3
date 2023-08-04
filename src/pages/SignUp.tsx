import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormSubmit, { FormResponse } from './Admin/components/FormSubmit';
import FormInputField from '../components/InputField/InputFeild';
import { useSignUp } from '../hooks/useSignUp';

const { InputField } = FormInputField;

const SignUp = () => {
   const { signup, isLoading, error } = useSignUp();
   const [errors, setErrors] = useState<Record<string, string | undefined>>({});

   const validateForm = (values: { [key: string]: string }): boolean => {
      let isValid = true;
      const newErrors: { [key: string]: string | undefined } = {};

      // Kiểm tra trường name
      if (!values.name) {
         newErrors.name = 'Name is required.';
         isValid = false;
      } else if (values.name.length < 3) {
         newErrors.name = 'Name must be at least 3 characters long.';
         isValid = false;
      }

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

      // Kiểm tra trường phone
      if (!values.phone) {
         newErrors.phone = 'Phone is required.';
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   const onHandleSubmit = async (
      res: FormResponse<{ name: string; email: string; password: string; phone: string }>
   ) => {
      const { result } = res;
      const isValid = validateForm(result);
      if (isValid) {
         await signup(result.name, result.email, result.password, result.phone);
      }
   };

   return (
      <div className='relative'>
         <div>
            <h2 className='text-4xl pl-[400px] pt-24 font-bold dark:text-white'>Sign up</h2>
         </div>
         <FormSubmit
            onSubmit={onHandleSubmit}
            pattern={{
               name: { required: true, minLength: 3 },
               email: { required: true, email: true },
               password: { required: true },
               phone: { required: true }
            }}
            className='my-4'
         >
            <div className='flex justify-center gap-28 '>
               <div className='w-80'>
                  <div className='pt-4'>
                     <InputField type='text' name='name' placeholder='Your Name' />
                     {errors.name && <p className='text-sm text-red-400'>{errors.name}</p>}
                  </div>
                  <div className='py-8'>
                     <InputField type='text' name='email' placeholder='Your Email' />
                     {errors.email && <p className='text-sm text-red-400'>{errors.email}</p>}
                  </div>
                  <div className='pb-8'>
                     <InputField type='password' name='password' placeholder='Your Password' />
                     {errors.password && <p className='text-sm text-red-400'>{errors.password}</p>}
                  </div>
                  <div className='pb-24'>
                     <InputField type='text' name='phone' placeholder='Your Phone' />
                     {errors.phone && <p className='text-sm text-red-400'>{errors.phone}</p>}
                  </div>
               </div>
               <div className=''>
                  <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg' alt='' />
               </div>
            </div>
            <div className='flex pl-96 pr-[470px]  justify-between items-center'>
               <div className=''>
                  <button
                     type='submit'
                     className='text-lg py-1 px-4 border-transparent shadow-sm text-white rounded bg-[dodgerblue] hover:bg-gradient-to-r hover:from-[rgba(30,144,255,1)] hover:from-0% hover:to-[rgba(0,212,255,1)] hover:to-100%'
                  >
                     Submit
                  </button>
                  {error && <div className='error'>{error}</div>}
               </div>
               <div className=''>
                  <Link to={'/login'}>I am already member</Link>
               </div>
            </div>
         </FormSubmit>
      </div>
   );
};

export default SignUp;

import FormSubmit, { FormResponse } from './Admin/components/FormSubmit';
import FormInputFeild from '../components/InputField/InputFeild';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';
// import Message from '../components/Message/Message';
const { InputField } = FormInputFeild;

const Login = () => {
   const { login, isLoading, error } = useLogin();
   const onHandleSubmit = async (res: FormResponse<{ email: string; password: string }>) => {
      await login(res.result.email, res.result.password);
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
                  <div className='pt-4'>
                     <InputField type='text' name='email' placeholder='Your Email' />
                     {/* <p className='text-sm text-red-400'>{errors?.name}</p> */}
                  </div>
                  <div className='py-8'>
                     <InputField type='text' name='password' placeholder='Your Password' />
                     {/* <p className='text-sm text-red-400'>{errors?.price}</p> */}
                  </div>
                  <button
                     disabled={isLoading}
                     type='submit'
                     className='text-lg py-1 px-5 border-transparent shadow-sm text-white rounded bg-[dodgerblue] hover:bg-gradient-to-r hover:from-[rgba(30,144,255,1)] hover:from-0% hover:to-[rgba(0,212,255,1)] hover:to-100%'
                  >
                     Submit
                  </button>
                  {error && <div className='error'>{error}</div>}
               </div>
            </div>
            <div className='flex justify-center gap-48 py-16'>
               <div className=''>
                  <Link to={'/signup'}>Create an account</Link>
               </div>
               <div className='pr-36'>
                  <a href='#'>Or login with</a>
               </div>
            </div>
         </FormSubmit>
      </div>
   );
};

export default Login;

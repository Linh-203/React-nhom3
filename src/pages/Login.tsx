import FormSubmit from './Admin/components/FormSubmit';
import FormInputFeild from '../components/InputFeild/InputFeild';
// import Message from '../components/Message/Message';
const { InputFeild } = FormInputFeild;

const Login = () => {
   const onhandleSubmit = () => {};
   return (
      <div className='relative'>
         {/* {msg && <Message msg={msg.content} type={msg.type} duration={1000} navigateLink='/admin/products' />} */}

         <FormSubmit onSubmit={onhandleSubmit} haveFiles className='my-28'>
            <div className='flex justify-center gap-28 '>
               <div className=''>
                  <img src='https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg' alt='' />
               </div>
               <div className='w-80'>
                  <div>
                     <h2 className='text-4xl pt-4 pb-4 font-bold dark:text-white'>Login</h2>
                  </div>
                  <div className='pt-4'>
                     <InputFeild type='text' name='name' placeholder='Your Name' />
                     {/* <p className='text-sm text-red-400'>{errors?.name}</p> */}
                  </div>
                  <div className='py-8'>
                     <InputFeild type='text' name='password' placeholder='Your Password' />
                     {/* <p className='text-sm text-red-400'>{errors?.price}</p> */}
                  </div>
                  <button
                     type='submit'
                     className='text-lg py-1 px-5 border-transparent shadow-sm text-white rounded bg-[dodgerblue] hover:bg-gradient-to-r hover:from-[rgba(30,144,255,1)] hover:from-0% hover:to-[rgba(0,212,255,1)] hover:to-100%'
                  >
                     Submit
                  </button>
               </div>
            </div>
            <div className='flex justify-center gap-48 py-16'>
               <div className=''>
                  <a href='/signup'>Create an account</a>
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

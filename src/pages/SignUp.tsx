import FormSubmit from './Admin/components/FormSubmit';
import FormInputFeild from '../components/InputFeild/InputFeild';
// import Message from '../components/Message/Message';
const { InputFeild } = FormInputFeild;

const SignUp = () => {
   const onhandleSubmit = () => {};
   return (
      <div className='relative'>
         {/* {msg && <Message msg={msg.content} type={msg.type} duration={1000} navigateLink='/admin/products' />} */}
         <div>
            <h2 className='text-4xl pl-[400px] pt-24 font-bold dark:text-white'>Sign up</h2>
         </div>
         <FormSubmit onSubmit={onhandleSubmit} haveFiles className='my-4'>
            <div className='flex justify-center gap-28 '>
               <div className='w-80'>
                  <div className='pt-4'>
                     <InputFeild type='text' name='name' placeholder='Your Name' />
                     {/* <p className='text-sm text-red-400'>{errors?.name}</p> */}
                  </div>
                  <div className='py-8'>
                     <InputFeild type='text' name='email' placeholder='Your Email' />
                     {/* <p className='text-sm text-red-400'>{errors?.price}</p> */}
                  </div>
                  <div className='pb-24'>
                     <InputFeild type='text' name='password' placeholder='Your Password' />
                     {/* <p className='text-sm text-red-400'>{errors?.price}</p> */}
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
               </div>
               <div className=''>
                  <a className='mt-20' href='/login'>
                     I am already member
                  </a>
               </div>
            </div>
         </FormSubmit>
      </div>
   );
};

export default SignUp;

import {Link} from 'react-router-dom'
export default function SIgnup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id="username" />
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id="email" />
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id="password" />
        <button className='bg-slate-700 text-white p-3 roundeg-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Already have a account?</p>
        <Link to={'/signin'}>
          <span className='text-blue-700'>
            Sign in
          </span>
        </Link>
      </div>
    </div>
  )
}

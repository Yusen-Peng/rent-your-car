import { Link } from 'react-router-dom';
import '../App.css'

function SignupPage() {

  return (
    //subtract the header's height
    <div className='h-[calc(100vh-74px)] flex items-center justify-center'>
        {/* render the whole login form */}
        <div>
            <h1 className='text-4xl my-3 text-center'>signup</h1>
            <form className='max-w-md mx-auto' action="POST">
                <input className='bg-gray-100 w-full border rounded-full my-2 py-2 px-3' type="text" placeholder='username...' />
                <input className='bg-gray-100 w-full border rounded-full my-2 py-2 px-3' type="email" placeholder='your@email.com' />
                <input className='bg-gray-100 w-full border rounded-full my-2 py-2 px-3' type="password" placeholder='password'/>
                <button className='bg-primary p-2 w-full text-white rounded-full my-2 py-2 px-3'>Signup</button>
                <div className='text-center py-2 text-gray-500'>
                    already have an account? <Link className='underline text-red-600' to={'/login'}> login</Link>
                    
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignupPage;

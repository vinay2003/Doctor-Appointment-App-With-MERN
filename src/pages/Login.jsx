import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    // Add your form submission logic here
  }

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book an appointment</p>

        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input 
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              placeholder="Enter your full name"
              className='w-full border p-2 rounded'
            />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            placeholder="Enter your email"
            className='w-full border p-2 rounded'
          />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            placeholder="Enter your password"
            className='w-full border p-2 rounded'
          />
        </div>

        <button type="submit" className='bg-indigo-600 text-white py-2 px-4 rounded mt-4'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        <p className='text-sm mt-4'>
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"} 
          <span 
            className='text-indigo-600 cursor-pointer ml-1' 
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
          >
            {state === 'Sign Up' ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </form>
  )
}

export default Login

import React, { useState } from 'react'

const Login = ({HandleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // two way binding
  const submitHandler = (e) => {
    e.preventDefault()
    HandleLogin(email,password)
    console.log(email,password)
    setEmail("")
    setPassword("")
  }
  return (<>

    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }} required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 text-xl placeholder:text-grey-400' type="email" placeholder="enter your email" />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }} required className='outline-none bg-transparent border-2 border-emerald-600 rounded-full mt-10 px-5 py-3 text-xl placeholder:text-grey-400' type="password" placeholder="enter your password" />
          <button className='text-white outline-none bg-emerald-600 border-none rounded-full mt-5 px-5 py-3 text-xl'>LogIn</button>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login
import { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSigninForm, setisSigninForm] = useState(true)
  const toggleSigninForm = () => {
    setisSigninForm(!isSigninForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? 'Sign In' : 'Sign Up'}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-500"
        />
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Password "
          className="p-2 my-2 w-full bg-gray-500"
        />

        <button className="p-2 my-2 bg-red-700 w-full rounded-lg">
          {isSigninForm ? ' Sign In' : 'Sign UP'}
        </button>
        <p
          className="text-sm my-2 text-white cursor-pointer"
          onClick={toggleSigninForm}
        >
          {isSigninForm ? '  New to Netflix Signup Now' : 'Already Registered'}
        </p>
      </form>
    </div>
  )
}

export default Login

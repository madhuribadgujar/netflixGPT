import { useRef, useState } from 'react'
import Header from './Header'
import chkValidData from '../utils/validate'
import authData from '../utils/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {
  const [isSigninForm, setisSigninForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  // const navigate = useNavigate()

  const toggleSigninForm = () => {
    setisSigninForm(!isSigninForm)
  }
  const email = useRef(null)
  const password = useRef(null)
  const fullName = useRef(null)
  const dispatch = useDispatch()

  const handleBtnClick = () => {
    //validate form data
    const result = chkValidData(
      email.current.value,
      password.current.value,
      fullName?.current?.value
    )
    setErrorMessage(result)

    if (result) return
    //signup/singn in logic
    if (!isSigninForm) {
      //Signup
      createUserWithEmailAndPassword(
        authData,
        email.current.value,
        password.current.value
      )
        .then(userCredential => {
          // Signed up
          const user = userCredential.user
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: 'https://example.com/jane-q-user/profile.jpg'
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = authData.currentUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              )
              //    navigate('/browse')
            })
            .catch(error => {
              setErrorMessage(error.message)
            })

          // ...
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          setErrorMessage(errorCode + ' - ' + errorMessage)
          // navigate('/')
          // ..
        })
    } else {
      //Sign in
      signInWithEmailAndPassword(
        authData,
        email.current.value,
        password.current.value
      )
        .then(userCredential => {
          // Signed in
          const user = userCredential.user
          console.log(user, 'user')
          //  navigate('/browse')
          // ...
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
          setErrorMessage(errorCode + ' - ' + errorMessage)
        })
    }
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"></img>
      </div>
      <form
        onSubmit={e => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSigninForm ? 'Sign In' : 'Sign Up'}
        </h1>
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-500"
        />
        {!isSigninForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-500"
          />
        )}
        <input
          type="text"
          ref={password}
          placeholder="Password "
          className="p-2 my-2 w-full bg-gray-500"
        />
        <p className="text-red-700 font-bold"> {errorMessage}</p>
        <button
          onClick={handleBtnClick}
          className="p-2 my-2 bg-red-700 w-full rounded-lg"
        >
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

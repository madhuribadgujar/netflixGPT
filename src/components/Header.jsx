import { onAuthStateChanged, signOut } from 'firebase/auth'
import authData from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, photoURL } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    signOut(authData)
      .then(() => {
        // navigate('/')
        // Sign-out successful.
      })
      .catch(error => {
        console.log(error)
        //navigate('/error')
        // An error happened.
      })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authData, user => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        )
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/')
      }
    })
    //Unscribe when component unmounts
    return () => unsubscribe()
  }, [])
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-24" src={LOGO} alt="logo"></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-10 h-10 "
            src={user?.photoUrl ? user.photoUrl : photoURL}
            alt="user icon"
          ></img>
          <button
            onClick={handleSignOut}
            className="font-bold text-white border-gray-100"
          >
            {' '}
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header

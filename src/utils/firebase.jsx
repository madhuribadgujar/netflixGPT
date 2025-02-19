// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5QSEMd--5HtT5mqoSfpYSLCbJ_Q2H6J4',
  authDomain: 'netflixgpt-41bc4.firebaseapp.com',
  projectId: 'netflixgpt-41bc4',
  storageBucket: 'netflixgpt-41bc4.firebasestorage.app',
  messagingSenderId: '133798155240',
  appId: '1:133798155240:web:c32e1d7fc1064ec8850a5d'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const authData = getAuth()
export default authData

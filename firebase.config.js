/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcfCDd4RWQm7hhNuhd8_WSqX_SX-c_XY0",
  authDomain: "sugar-sync-ea81d.firebaseapp.com",
  projectId: "sugar-sync-ea81d",
  storageBucket: "sugar-sync-ea81d.appspot.com",
  messagingSenderId: "797764504841",
  appId: "1:797764504841:web:0cddb5ff930df971d057d8",
  measurementId: "G-VG6WN14WXM",
}

// connectAuthEmulator(auth, "http://localhost:3002")
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//     // ..
//   })

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//   })

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// })

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
export { auth }

// const analytics = getAnalytics(app)

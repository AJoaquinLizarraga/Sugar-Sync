/** @format */
"use client"
import React, { useState } from "react"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

import { auth } from "../../../firebase.config"

const Login = () => {
  const [userAuth, setUserAuth] = useState([])
  // const handleGoogleSignIn = async () => {
  //   const provider = new GoogleAuthProvider()

  //   try {
  //     const result = signInWithPopup(auth, provider)
  //     const user = result.user
  //     console.log(user)
  //     setUserAuth(user)
  //     console.log(userAuth)
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()

    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        console.log(user)
        setUserAuth(user)
      })
      .catch((error) => {
        console.error(error.message)
        // const errorCode = error.code
        // const errorMessage = error.message
        // const email = error.customData.email
        // const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }
  return (
    <div>
      {/* <Button>login</Button> */}
      <h2></h2>
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 hover:bg-blue-700 text-white"
      >
        hasodfaosdn
      </button>
    </div>
  )
}

export default Login

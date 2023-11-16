/** @format */
"use client"
import React, { useState } from "react"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { v4 as randomUUID } from "uuid"
const id = randomUUID()
import { auth, db } from "../../../firebase.config"
import { Button } from "@material-tailwind/react"
// import { Timestamp } from "firebase-admin/firestore"
// import sendData from "@/utils/addDB"
const Login = () => {
  const [userAuth, setUserAuth] = useState([])

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()

    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        console.log(user.displayName)
        setUserAuth(user)
      })
      .then(async () => {
        const data = {
          name: userAuth.displayName,
          email: userAuth.email,
          diabetesType: 1,
          age: 25,
          // dateExample: Timestamp.fromDate(new Date("November 15, 2023")),
        }

        const res = await setDoc(doc(db, "users", id), data)
        console.log(res)
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
      {/* <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 hover:bg-blue-700 text-white"
      >
        hasodfaosdn
      </button> */}
      <Button
        className="m-10 bg-orange-900 p-5 border-red-800"
        variant="outlined"
        onClick={handleGoogleSignIn}
      >
        Login
      </Button>
    </div>
  )
}

export default Login

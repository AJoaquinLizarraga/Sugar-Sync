/** @format */
"use client"
import React, { useState } from "react"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore"
import { v4 as randomUUID } from "uuid"
const id = randomUUID()
import { auth, db } from "../../../firebase.config"
import { Button } from "@material-tailwind/react"

const Login = () => {
  const [userAuth, setUserAuth] = useState([])
  const [profileInfo, setProfileInfo] = useState({
      name: userAuth.displayName,
      email: userAuth.email,
      age: "",
      gender: "",
      weight: "",
      height: "",
      diabetesType: "",
      insuline1: {
          name: "",
          basalDose: ""
      },
      insuline2: {
          name: "",
          basalDose: ""
      },
      correctionFactor: "",
      bmi: ""
  })

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()

    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        setUserAuth(user)
      })
      .then(async () => {
        const citiesRef = collection(db, "users");
        const q = query(citiesRef, where("email", "==", userAuth.email));
        const patient = await getDocs(q);
        
        if (patient.exists()) {
          console.log("redireccionar a home con patientData como prop");
        } else {
          console.log("abrir modal y cargar datos");
        }

        const data = {
          name: userAuth.displayName,
          email: userAuth.email,
          age: "edad",
          gender: "genero",
          weight: "peso",
          height: "altura",
          diabetesType: "tipo",
          insuline1: {
              name: "insulina",
              basalDose: "dosis"
          },
          insuline2: {
              name: "insulina",
              basalDose: "dosis"
          },
          correctionFactor: "autofill",
          bmi: "IMC autofill"
        }

        const res = await setDoc(doc(db, "users", id), data)
        console.log(res)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
  return (
    <div>
      <Button
        className="m-10 bg-blue-900 p-5 border-blue-200"
        variant="outlined"
        onClick={handleGoogleSignIn}
      >
        Login
      </Button>
    </div>
  )
}

export default Login

/** @format */
"use client"
import React, { useState } from "react"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, setDoc, getDocs, collection, query, where } from "firebase/firestore"
import { v4 as randomUUID } from "uuid"
const id = randomUUID()
import { auth, db } from "../../firebase.config"
import { Button } from "@material-tailwind/react"
import { useRouter } from 'next/navigation'
import ModalComponent from './ModalComponent.jsx'

const Login = () => {
  const router = useRouter()
  const [userAuth, setUserAuth] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [profileInfo, setProfileInfo] = useState({
      name: userAuth?.displayName,
      email: userAuth?.email,
      age: "",
      gender: "",
      weight: "",
      height: "",
      diabetesType: "",
      insulin1: "",
      insulin2: "",
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
        console.log(userAuth)
      })
      .then(async () => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", userAuth?.email));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          router.push('/');
        } else {
         setOpenModal(true)
        }
      })
      .then(async () => {
        const data = {
          name: userAuth.displayName,
          email: userAuth.email,
          age: profileInfo.age,
          gender: profileInfo.gender,
          weight: profileInfo.weight,
          height: profileInfo.height,
          diabetesType: profileInfo.diabetesType,
          insulin1: profileInfo.insulin1,
          insulin2: profileInfo.insulin2,
          correctionFactor: 1800 / profileInfo.insulin1,
          bmi: profileInfo.weight / (profileInfo.height ^ 2)
        }

        const res = await setDoc(doc(db, "users", id), data)
        router.push('/');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  
  return (
    <div>
      <Button
        className="m-10 bg-blue-900 p-5 border-blue-200"
        variant="outlined"
        onClick={handleGoogleSignIn}
      >
        Login
      </Button>
      {openModal === true ?
      <ModalComponent setProfileInfo={setProfileInfo} profileInfo={profileInfo} />
      : null
      }
    </div>
  )
}

export default Login;

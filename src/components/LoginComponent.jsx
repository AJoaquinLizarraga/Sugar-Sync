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
  const [openModal, setOpenModal] = useState(false)
  const [onSubmit, setOnSubmit] = useState(false)
  const [profileInfo, setProfileInfo] = useState({
      name: "",
      email: "",
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
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      setProfileInfo({...profileInfo, email: user.email, name: user.displayName})

      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", user.email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
         setOpenModal(true);
      } else {
        router.push("/");
      }
      if (onSubmit === true){
        const data = {
          name: user.displayName,
          email: user.email,
          age: profileInfo.age,
          gender: profileInfo.gender,
          weight: profileInfo.weight,
          height: profileInfo.height,
          diabetesType: profileInfo.diabetesType,
          insulin1: profileInfo.insulin1,
          insulin2: profileInfo.insulin2,
          correctionFactor: "",
          bmi: ""
          // correctionFactor: 1800 / profileInfo.insulin1,
          // bmi: profileInfo.weight / Math.pow(profileInfo.height, 2)
        };
  
        const res = await setDoc(doc(db, "users", id), data);
        router.push("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div className="">
      <Button
        className="m-10 bg-blue-900 p-5 border-blue-200"
        variant="outlined"
        onClick={handleGoogleSignIn}
      >
        Login
      </Button>
      {openModal === true &&
      <ModalComponent setProfileInfo={setProfileInfo} profileInfo={profileInfo} setOpenModal={setOpenModal} openModal={openModal} setOnSubmit={setOnSubmit}/>
      
      }
    </div>
  )
}

export default Login;

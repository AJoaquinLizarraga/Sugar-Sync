/** @format */

// import { Timestamp } from "firebase/firestore"
import { db } from "../../firebase.config"

import { doc, setDoc } from "firebase/firestore"

// await setDoc(doc(db, "users", "person"), data)

const data = {
  name: "Luciana Sanchez",
  diabetesType: 1,
  age: 30,
  // dateExample: Timestamp.fromDate(new Date("November 15, 2023")),
}

const sendData = async () => {
  const res = await setDoc(doc(db, "users", "person"), data)
  console.log(res)
}

export default sendData

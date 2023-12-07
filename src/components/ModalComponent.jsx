/** @format */
'use client'

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
 
const ModalComponent = ({setProfileInfo, profileInfo, setOpenModal, openModal, setOnSubmit}) => {
  const [incomplete, setIncomplete] = useState(true)

  const showModal = () => {
   setOnSubmit(true)
  }

  const handleChange = (event) => {
    setProfileInfo({
      ...profileInfo,
      [event.target.name]: event.target.value
    })
    const { age, gender, weight, height, diabetesType, insulin1, insulin2 } = profileInfo
    if (age.length !== 0 && gender.length !== 0 &&  weight.length !== 0 &&  height.length !== 0 &&  diabetesType.length !== 0 &&  insulin1.length !== 0 &&  insulin2.length !== 0){
      setIncomplete(false)
    }
  }

  const handleKeyPress = event => {
      if (event.key === 'Enter' && incomplete === false) {
        setOpenModal(false)
      }
  }
  
  return (
    <>
    <div className="m-6">

      <Dialog open={openModal}>
        <DialogHeader>Complete your personal information</DialogHeader>
        <DialogBody>
        <Card color="transparent" shadow={false}>
      <form className="mt-8 mb-2 w-80 h-80 max-w-screen-lg sm:w-96" onKeyPress={handleKeyPress}>
        <div className="mb-1 flex flex-col">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Name
          </Typography>
          <Input
            size="lg"
            placeholder="name autofill and disable"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={profileInfo.name}
            contentEditable={false}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com autofill and disable"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={profileInfo.email}
            contentEditable={false}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Age
          </Typography>
          <Input
            size="lg"
            placeholder="age"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={handleChange}
            name="age"
          />
           <Typography variant="h6" color="blue-gray" className="-mb-3">
            Gender
          </Typography>
          <select
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChange}
            name="gender"
          >
            <option value="" disabled selected>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
           Weight
          </Typography>
          <Input
            size="lg"
            placeholder="weight"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={handleChange}
            name="weight"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Height
          </Typography>
          <Input
            size="lg"
            placeholder="height"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={handleChange}
            name="height"
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Diabetes Type
          </Typography>
          <select
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChange}
            name="diabetesType"
          >
            <option value="" disabled selected>Select</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Insulin 1
          </Typography>
          <select
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChange}
            name="insulin1"
          >
            <option value="" disabled selected>Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Insulin 2
          </Typography>
          <select
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            onChange={handleChange}
            name="insulin2"
          >
            <option value="" disabled selected>Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Correction Factor
          </Typography>
          <Input
            size="lg"
            placeholder={profileInfo.correctionFactor}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Body Mass Index
          </Typography>
          <Input
            size="lg"
            placeholder= {profileInfo.bmi}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button variant="gradient" color="blue" onClick={incomplete === false ? showModal : null}>
          Complete
        </Button>
      </form>
    </Card>
    </DialogBody>
    </Dialog>
    </div>
    </>
  );
}

export default ModalComponent;
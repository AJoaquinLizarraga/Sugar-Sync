'use client'

import Link from 'next/link'


const HomeComponent = (patientData) => {

  return (
    <>
      <div className="container m-auto px-5">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt-10">
          
            <Link
                href={'/bloodSugar'}
                className="fixed top-32 right-40 w-56 text-center bg-[#390f69] px-[1.5rem] py-2 rounded-md text-white z-40 text-xl"
            >
                Blood Sugar
            </Link>
            <Link
                href={'/basalCorrection'}
                className="fixed top-64 right-40 w-56 text-center bg-[#390f69] px-[1.5rem] py-2 rounded-md text-white z-40 text-xl"
            >
                Basal Correction
            </Link>
            <Link
                href={'/mealCorrection'}
                className="fixed top-96 right-40 w-56 text-center bg-[#390f69] px-[1.5rem] py-2 rounded-md text-white z-40 text-xl"
            >
                Meal Correction
            </Link>
        </section>
      </div>
    </>
  )
}

export default HomeComponent;

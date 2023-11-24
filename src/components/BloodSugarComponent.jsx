'use client'
import Link from 'next/link';

const BloodSugar = () => {

    return (
      <div>
        <h1>Medir con sensor o cargar por voz</h1>
        <Link
              href={'/basalCorrection'}
              className="fixed top-64 right-40 w-56 text-center bg-[#133b47] px-[1.5rem] py-2 rounded-md text-white z-40 text-xl"
            >
              Basal Correction
            </Link>
            <Link
              href={'/mealCorrection'}
              className="fixed top-96 right-40 w-56 text-center bg-[#133b47] px-[1.5rem] py-2 rounded-md text-white z-40 text-xl"
            >
              Meal Correction
            </Link>
      </div>
    )
  }
  
  export default BloodSugar;
  
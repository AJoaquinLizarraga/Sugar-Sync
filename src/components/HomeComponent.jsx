import Link from 'next/link';
import Image from 'next/image';  // Asegúrate de importar 'next/image'
import colibri from '../../public/assets/colibri.png'

const HomeComponent = (patientData) => {
  return (
    <>
      <div className="container m-auto px-5">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt-10">

          {/* Imagen en la mitad izquierda */}
          <div className="hidden md:block md:col-span-1 lg:col-span-1">
            <Image src={colibri} alt="Bird Image" width={600} height={600} />
          </div>

          {/* Enlaces en la mitad derecha */}
          <div className="md:col-span-1 lg:col-span-1">
            <Link
              href={'/bloodSugar'}
              className="fixed top-32 right-40 w-56 text-center bg-[#133b47] px-[1.5rem] py-2 rounded-md text-white z-40 text-xl"
            >
              Blood Sugar
            </Link>
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
        </section>
      </div>
    </>
  );
};

export default HomeComponent;

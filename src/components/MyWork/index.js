import React from "react";
import LeCodeIcon from "../../img/LeCode.png";
import UnimontesIcon from "../../img/Unimontes.png";
import OPPIcon from "../../img/OPP.png";


export default function Mywork() {
  return (
    <>
      <section className="bg-oldgray">
        <div className="  container px-6 py-10 mx-auto">
      <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl  hover:text-royalblue ease-in duration-300 ">
            <span className="border-b-2 border-transparent hover:border-b-2 hover:border-royalblue duration-400">
              My works
            </span>
          </h2>
        </div>

          <p className="mt-4 text-gray-600 xl:mt-6 ">
            Things I've done or learned during my journey as an information
            technology professional.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

            <div className="p-8 space-y-3 border-2 border-royalblue dark:border-blue-300 rounded-xl">
              <div className="inline-block ">
                <img
                  src={LeCodeIcon}
                  alt="Lecode company icon miniature version "
                  className="w-20 h-20 rounded-lg"
                />
              </div>
              <h1 className="text-2xl font-semibold text-black capitalize dark:text-white">
                LeCode
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Freelance front-end web and software developer specializing in
                building (and sometimes designing) exceptional, high-quality,
                modern websites and applications.
              </p>
            </div>


            <div className="p-8 space-y-3 border-2 border-royalblue dark:border-blue-300 rounded-xl">
              <div className="inline-block ">
                <img
                  src={UnimontesIcon}
                  alt="Unimontes icon miniature version "
                  className="w-20 h-20 rounded-lg"
                />
              </div>

              <h1 className="text-2xl font-semibold text-black capitalize dark:text-white">
                Unimontes
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Back end developer in the technology and information sector at
                the state university of Montes Claros
              </p>
            </div>

            <div className="p-8 space-y-3 border-2 border-royalblue dark:border-blue-300 rounded-xl">
              <div className="inline-block ">
                <img
                  src={OPPIcon}
                  alt="Opportunity Soluções Digitais icon miniature version "
                  className="w-20 h-20 rounded-lg"
                />
              </div>
              <h1 className="text-2xl font-semibold text-black capitalize dark:text-white">
              Opportunity Soluções Digitais
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Freelance front-end web and software developer specializing in
                building (and sometimes designing) exceptional, high-quality,
                modern websites and applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

import Lave from "../../img/Lave.png";
import Mwttrainer from "../../img/mwttrainer.png";
import Netflix from "../../img/netflix.png";

export default function Portifolio() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />

      <section className="px-6 py-10 mx-auto bg-oldgray">
        <div className="container ">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none pb-10">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl  hover:text-royalblue ease-in duration-300 ">
            <span className="border-b-2 border-transparent hover:border-b-2 hover:border-royalblue duration-400">
              Projects
            </span>
          </h2>
        </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src={Lave}
                  alt="Lave website home screen"
                  className="w-full h-1/2"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <p
                      className="
                        font-semibold
                         text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        text-royalblue
                        "
                    >
                      Lave web site
                    </p>
                  </h3>
                  <p className="text-base text-black leading-relaxed mb-7">
                    Wash laundry landing page
                  </p>
                  <a
                    href="https://lave-lave.vercel.app/"
                    target={"_blank"}
                    without
                    rel="noreferrer"
                    className="
                     inline-block
                     py-2
                     px-7
                     border border-black
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-royalblue hover:bg-royalblue text-black hover:text-white
                     transition
                     "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full  md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src={Mwttrainer}
                  alt="Mwttrainer website home screen"
                  className="w-full "
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <p
                      className="
                      font-semibold
                      text-xl
                     sm:text-[22px]
                     md:text-xl
                     lg:text-[22px]
                     xl:text-xl
                     2xl:text-[22px]
                     mb-4
                     block
                     text-royalblue
                     "
                    >
                      MWT Trainer
                    </p>
                  </h3>
                  <p className="text-base text-black leading-relaxed mb-7">
                    MWT Trainer gym web page
                  </p>
                  <a
                    href="https://danteborges.github.io/MWT_Trainer//"
                    target={"_blank"}
                    without
                    rel="noreferrer"
                    className="
                     inline-block
                     py-2
                     px-7
                     border border-black
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-royalblue hover:bg-royalblue text-black hover:text-white
                     transition
                     "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src={Netflix}
                  alt="Mwttrainer website home screen"
                  className="w-full h-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <p
                      className="
                      font-semibold
                      text-xl
                     sm:text-[22px]
                     md:text-xl
                     lg:text-[22px]
                     xl:text-xl
                     2xl:text-[22px]
                     mb-4
                     block
                     text-royalblue
                     "
                    >
                      Netflix Clone
                    </p>
                  </h3>
                  <p className="text-base text-black leading-relaxed mb-7">
                  Replica of netflix layout
                  </p>
                  <a
                    href="https://netflix-clone-omega-neon.vercel.app/"
                    target={"_blank"}
                    without
                    rel="noreferrer"
                    className="
                     inline-block
                     py-2
                     px-7
                     border border-black
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-royalblue hover:bg-royalblue text-black hover:text-white
                     transition
                     "
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

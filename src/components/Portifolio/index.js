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
          <h1 className=" pb-5 font-semibold text-gray-800 capitalize lg:text-4xl ">
            <span className="hover:delay-150 hover:text-royalblue transition delay-150 duration-300">
              My Works
            </span>
          </h1>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                  src={Lave}
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      50+ Best creative website themes & templates
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
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
                  src={Mwttrainer}
                  alt="image"
                  className="w-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      The ultimate UX and UI guide to card design
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
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
                  alt="image"
                  className="w-full h-full"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                    >
                      Creative Card Component designs graphic elements
                    </a>
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
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

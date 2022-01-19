import React from "react";
import Myprofile from "../../img/Daniel_photo.jpg";

export default function About() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl  hover:text-royalblue ease-in duration-300 ">
              <span className="border-b-2 border-transparent hover:border-b-2 hover:border-royalblue duration-400">About me</span>
            </h2>
            
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center w-[1184px] h-[1376px]"
                    src={Myprofile}
                    alt="my_profile_picture"
                  ></img>
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mt-5 prose prose-indigo text-black mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p className="pb-5">
                I'am Software Developer who enjoys working with web technologies
                and helping people create/grow their businesses while developing
                as a professional.
              </p>
              <p className="pb-5">
                I worked 1 year as a digital analyst and 1 year as a software
                developer working on the Internal system of Montes Claros State
                University using PHP and Vue.js
              </p>

              <p className="pb-5">
                I have an excellent background as a Web Developer along with my
                academic education in Computer Science and Technology. I studied
                at the Montes Claros State University (Unimontes), one of the
                finest colleges in Brazil, and this helped me to understand well
                the base of programming.
              </p>
              <p className="pb-5">
                Today I work as a freelancer using JavaScript and its
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

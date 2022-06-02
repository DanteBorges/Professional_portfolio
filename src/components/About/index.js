import React from "react";
import Myprofile from "../../img/Daniel_photo.jpg";
import Tecnology from "../Tecnology";

export default function About() {
  return (
    <div id="about" >
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-1.52 sm:px-6 lg:px-8">
        <div className="hidden lg:block  absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl  hover:text-royalblue ease-in duration-300 ">
            <span className="border-b-2 border-transparent hover:border-b-2 hover:border-royalblue duration-400">
              About me
            </span>
          </h2>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center w-[1184px] h-[1376px]"
                    src={Myprofile}
                    alt="Photo_of_me_wearing_glasses"
                  ></img>
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 ">
            <div className="mt-5 prose prose-indigo text-black mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p className="pb-5">
                I'm a software developer who enjoys working with web
                technologies and helping people create/grow their businesses
                while developing as a professional.
              </p>
              <p className="pb-5">
                I worked as a software developer in the internal system of the
                State University of Montes Claros and as a freelancer.
              </p>

              <p className="pb-5">
                I have an excellent background as a Web Developer along with my
                academic background in Computer Science and Technology. I study
                at the State University of Montes Claros (Unimontes), one of the
                best colleges in Brazil, and this helped me to understand the
                basics of programming well.
              </p>
              <p className="pb-5">
                Today I continue studying and working with the JavaScript
                language for the Haus technology studio.

              </p>
            </div>
            <Tecnology/>
          </div>
        </div>
      </div>
    </div>
  );
}

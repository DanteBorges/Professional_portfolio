import React from "react";
import Lave from "../../img/Lave.png";
import Mwttrainer from "../../img/mwttrainer.png";
import Netflix from "../../img/netflix.png";

export default function CardsProject() {
  return (
    <>
      <section id="projects" >
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-1.52 sm:px-6 lg:px-8">
     <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl  hover:text-royalblue ease-in duration-300 ">
              <span className="border-b-2 border-transparent hover:border-b-2 hover:border-royalblue duration-400">
                My works
              </span>
            </h2>
          </div>
      <div className="lg:flex mb-4 m-10 rounded mx-auto">
        <div className="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
          <img src={Lave} alt="Lave website home screen" className="w-full" />
          <div className="px-6 py-4 h-full">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>

        <div className="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10">
          <img src={Mwttrainer} alt="Lave website home screen" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>

        <div className="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10">
          <img src={Netflix} alt="Lave website home screen" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
      </div>
      </section>
    </>
  );
}

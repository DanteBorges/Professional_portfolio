import React from 'react'
import { Disclosure, } from "@headlessui/react";
import {  MenuIcon, XIcon, CodeIcon } from "@heroicons/react/outline";


export default function Navbar() {
  return (
    <Disclosure as="nav" className=" shadow">
      {({ open }) => (
        <>
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-32 bg-white fixed z-50 shadow-md">
            <div className="flex justify-between sm:px-16 xl:px-44 h-16 bg-white">
              <div className="flex-shrink-0 flex items-center">
                <CodeIcon className="block lg:hidden h-8 w-auto" />
                <CodeIcon className="hidden lg:block h-8 w-auto " />
              <p className="ml-5 font-bold text-xl hover:text-midnightblue ">
                  Daniel Borges
                </p>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="#home"
                  className="border-transparent text-black hover:border-slategray hover:text-royalblue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"

                >
                  Home
                </a>
                <a
                  href="#about"
                  className="border-transparent text-black hover:border-slategray hover:text-royalblue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  About Me
                </a>
                <a
                  href="#projects"
                  className="border-transparent text-black hover:border-slategray hover:text-royalblue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Projects
                </a>
                <a
                  href="#hireme"
                  className="border-transparent text-black hover:border-slategray hover:text-royalblue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Hire me
                </a>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#home"
                  className="border-transparent text-black hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#about"
                  className="border-transparent text-black hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  About Me
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#projects"
                  className="border-transparent text-black hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#hireme"
                  className="border-transparent text-black hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Hire me
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}

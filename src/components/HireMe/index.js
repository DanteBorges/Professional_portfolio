import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { ReactComponent as GithubIcon } from "../../img/github.svg";
import { ReactComponent as UpworkIcon } from "../../img/upwork.svg";
import { ReactComponent as LinkedinIcon } from "../../img/linkedin.svg";
import { ReactComponent as Triangle } from "../../img/triangle.svg";
import { ReactComponent as TriangleResponsive } from "../../img/triangle_responsive.svg";

export default function HireMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f2ne3is",
      "template_lqnvp9h",
      form.current,
      "user_vVXH8VL0YnDG8Gx4iRCqj"
    );
  };
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 	">
        <div className="relative bg-white shadow-xl rounded-md	">
          <h2 className="sr-only">Contact me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="relative overflow-hidden py-10 px-6 bg-royalblue sm:px-10 xl:p-12 rounded-md	">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <TriangleResponsive />
              </div>

              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <Triangle />
              </div>
              <h3 className="text-lg font-medium text-white">
                Contact information
              </h3>
              <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                Interested in my work? Contact me and let's talk :)
              </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-indigo-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+55 (38) 98833-0330</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-indigo-50">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-indigo-200"
                    aria-hidden="true"
                  />
                  <span className="ml-3">daniel@lecode.dev</span>
                </dd>
              </dl>
              <ul role="list" className="mt-8 flex space-x-12">
                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://www.instagram.com/danielborggs/"
                    rel="noopener"
                    target="_blank"
                  >
                    <span className="sr-only">GitHub</span>
                    <GithubIcon />
                  </a>
                </li>

                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://www.upwork.com/freelancers/~013f21e3623726319d"
                    rel="noopener"
                    target="_blank"
                  >
                    <span className="sr-only">Upwork</span>

                    <UpworkIcon />
                  </a>
                </li>

                <li>
                  <a
                    className="text-indigo-200 hover:text-indigo-100"
                    href="https://github.com/DanteBorges"
                    target="_blank"

                  >
                    <span className="sr-only">Linkedin</span>
                    <LinkedinIcon />
                  </a>
                </li>
              </ul>
            </div>

            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                Send me a message
              </h3>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-900"
                    
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      required="required"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-midnightblue focus:border-royalblue border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium tflex text-base text-indigo-50ext-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      required="required"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-midnightblue focus:border-royalblue border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required="required"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-midnightblue focus:border-royalblue border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      required="required"
                      id="subject"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      required="required"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                 
                  <div>
                  <label
                    htmlFor="city"
                    className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-50"
                    
                  >
                    Your city
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="given-name"
                      className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-9999"
                    />
                  </div>
                </div>
                

                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    value="Send"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

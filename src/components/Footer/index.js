import React from "react";
import { ReactComponent as InstagramIcon } from "../../img/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../img/linkedin.svg";
import { ReactComponent as UpworkIcon } from "../../img/upwork.svg";
import { ReactComponent as GithubIcon } from "../../img/github.svg";

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Hire me", href: "#hireme" },
  ],
  social: [
 
    {
      name: "Instagram",
      href: "https://www.instagram.com/danielborggs/", rel:"noopener",
      icon: (props) => (
        <InstagramIcon {...props}/>
        
      ),
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/daniel-fborges/",rel:"noopener",
      icon: (props) => (
      <LinkedinIcon {...props}/>
      ),
    },

    {
      name: "GitHub",
      href: "https://github.com/DanteBorges",rel:"noopener",
      icon: (props) => (
      <GithubIcon {...props}/>
      ),
    },
    {
      name: "Upwork",
      href: "https://github.com/DanteBorges",rel:"noopener",
      icon: (props) => (
      <UpworkIcon {...props}/>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-royalblue relative bottom-0 w-full ">
      <div className="max-w-2xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-4">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center sm:px-4 "
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-white hover:text-blizzard text-sm font-medium"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-blizzard"
              target="_blank" rel="noopener"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

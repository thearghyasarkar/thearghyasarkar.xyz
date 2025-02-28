import React from "react";
// import "@/styles/home.css";
import { orbitron, fira_code } from "@/components/Fonts";
import { CiHome, CiUser,  CiGrid32, CiPen, CiPhone  } from "react-icons/ci";
import { RiHome5Fill } from "react-icons/ri";


const MainHeader = () => {
  return (
    <div>
      <header className=" h-30 lg:h-60">
        <nav
          className="desktop-header md:flex bg-fade-black content-center  w-full top-0 hidden my-auto items-center justify-center space-x-8 lg:space-x-20 p-24 lg:px-8"
          aria-label="Landing"
        >
          
          <a href="/" className={`${orbitron.className} hover:scale-110 transition-all ease-out duration-200 drop-shadow-xl-white hover:text-cyan-100 text-sm lg:text-2xl font-semibold leading-6 text-blue-white`}>
            HOME
          </a>
          <a href="/about" className={`${orbitron.className} hover:scale-110 transition-all ease-out duration-200 drop-shadow-xl-white hover:text-cyan-100 text-sm lg:text-2xl font-semibold leading-6 text-blue-white`}>
            ABOUT
          </a>
          <a href="/projects" className={`${orbitron.className} hover:scale-110 transition-all ease-out duration-200 drop-shadow-xl-white hover:text-cyan-100 text-sm lg:text-2xl font-semibold leading-6 text-blue-white`}>
            PROJECTS
          </a>
          <a href="/writing" className={`${orbitron.className} hover:scale-110 transition-all ease-out duration-200 drop-shadow-xl-white hover:text-cyan-100 text-sm lg:text-2xl font-semibold leading-6 text-blue-white`}>
            WRITINGS
          </a>
          <a href="/contact" className={`${orbitron.className} hover:scale-110 transition-all ease-out duration-200 drop-shadow-xl-white hover:text-cyan-100 text-sm lg:text-2xl font-semibold leading-6 text-blue-white`}>
            CONTACT
          </a>
        </nav>

        <nav
          className="mobile-header border-x-2 bg-light-black border-cyan-300 md:hidden content-center flex fixed w-full bottom-0 items-center justify-center space-x-10  py-6 lg:px-8"
          aria-label="Landing"
        >
          <a href="\" className={`${orbitron.className}  text-xl font-bold text-cyan-300`}>
            <CiHome />
          </a>
          <a href="\about\" className={`${orbitron.className}  text-xl font-bold text-cyan-300`}>
            <CiUser />
          </a>
          <a href="\projects" className={`${orbitron.className}  text-xl font-bold text-cyan-300`}>
            <CiGrid32 />
          </a>
          <a href="\writing" className={`${orbitron.className}  text-xl font-bold text-cyan-300`}>
          <CiPen />
          </a>
          <a href="\contact" className={`${orbitron.className}  text-xl font-bold text-cyan-300`}>
          <CiPhone />
          </a>
          </nav>
      </header>
    </div>
  );
};

export default MainHeader;

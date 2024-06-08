import React from 'react'
import { orbitron, fira_code } from "@/components/Fonts";


export const Categories = () => {
  return (
    <div>
    <div className="justify-center hidden md:flex items-center my-12 text-center categories">
            <ul>
              <li className={`${orbitron.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/all">ALL</a></li>
              <li className={`${orbitron.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/technology">TECHNOLOGY</a></li>
              <li className={`${orbitron.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/academics">CBSE ACADEMICS</a></li>
              <li className={`${orbitron.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/physics">PHYSICS</a></li>
              <li className={`${orbitron.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/health">HEALTH</a></li>
              <li className={`${orbitron.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/mathematics">MATH</a></li>
              <li className={`${orbitron.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/lifestyle">LIFESTYLE</a></li>
              <li className={`${orbitron.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/books">BOOKS</a></li>
            </ul>
    </div>

    <div className="justify-center flex md:hidden items-center my-12 text-center categories">
            <ul>
              <li className={`${fira_code.className} text-md text-blue-white font-black inline-block mx-2 border-2 px-4 border-x-blue-white mt-6 hover:text-black hover:bg-blue-white`}><a href="/categories/all">ALL</a></li>
              <li className={`${fira_code.className} text-md text-blue-white font-black inline-block mx-2 border-2 px-4 border-x-blue-white mt-6 hover:text-black hover:bg-blue-white`}><a href="/categories/technology">TECHNOLOGY</a></li>
              <li className={`${fira_code.className} text-md text-blue-white font-black inline-block mx-2 border-2 px-4 border-x-blue-white mt-6 hover:text-black hover:bg-blue-white`}><a href="/categories/academics">CBSE ACADEMICS</a></li>
              <li className={`${fira_code.className} text-md text-blue-white font-black inline-block mx-2 border-2 px-4 border-x-blue-white mt-6 hover:text-black hover:bg-blue-white`}><a href="/categories/physics">PHYSICS</a></li>
              <li className={`${fira_code.className} text-md text-blue-white font-black inline-block mx-2 border-2 px-4 border-x-blue-white mt-6 hover:text-black hover:bg-blue-white`}><a href="/categories/mathematics">MATHEMATICS</a></li>
              <li className={`${fira_code.className} text-md text-blue-white font-black inline-block mx-2 border-2 px-4 border-x-blue-white mt-6 hover:text-black hover:bg-blue-white`}><a href="/categories/lifestyle">LIFESTYLE</a></li>
              <li className={`${fira_code.className} text-md text-blue-white font-black inline-block mx-2 border-2 px-4 border-x-blue-white mt-6 hover:text-black hover:bg-blue-white`}><a href="/categories/books">BOOKS</a></li>
            </ul>
    </div>
    </div>
  )
}

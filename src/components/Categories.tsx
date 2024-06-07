import React from 'react'
import { Orbitron } from 'next/font/google'

const airbeat = Orbitron({
    weight: '800',
    subsets: ['latin'],
    display: 'swap', 
    adjustFontFallback: false
  }) 


export const Categories = () => {
  return (
    <div className="justify-center hidden md:flex items-center my-12 text-center categories">
            <ul>
              <li className={`${airbeat.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/all">ALL</a></li>
              <li className={`${airbeat.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/technology">TECHNOLOGY</a></li>
              <li className={`${airbeat.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/academics">CBSE ACADEMICS</a></li>
              <li className={`${airbeat.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/physics">PHYSICS</a></li>
              <li className={`${airbeat.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/philosophy">PHILOSOPHY</a></li>
              <li className={`${airbeat.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/health">HEALTH</a></li>
              <li className={`${airbeat.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/lifestyle">LIFESTYLE</a></li>
              <li className={`${airbeat.className} text-lg text-blue-white px-4 py-3 font-extrabold inline-block mx-2 border-blue-white border-2  mt-6 hover:text-black hover:bg-blue-white transition-all duration-200 tracking-wide hover:scale-125 ease-out`}><a href="/categories/books">BOOKS</a></li>
            </ul>
    </div>
  )
}

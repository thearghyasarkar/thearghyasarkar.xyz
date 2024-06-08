import React from 'react'
import { orbitron, fira_code } from "@/components/Fonts";

export const Achievements = () => {
  return (
    <div>
        
        <h3
          className={`${orbitron.className} mt-24 text-blue-white text-4xl font-bold`}
        >
         🎖️ My Achievements
        </h3>

        <ul className={`mt-12 ${fira_code.className} mb-60 text-xl leading-8`}>
        <li className="text-blue-white mx-6 my-6">
            <span className="text-yellow-400 font-black drop-shadow-xl-green">
            🥇  First Place
            </span>{" "}
            at{" "}
            <a
              className="text-green-400 font-black drop-shadow-xl-green"
            >
              Relativity 2022 - Hackathon
            </a>, awarded by the La Marteniere's for Boys School, Kolkata
          </li>
          <li className="text-blue-white mx-6 my-6">
            <span className="text-yellow-400 font-black drop-shadow-xl-green">
            🥇 First Place
            </span>{" "}
            at{" "}
            <a
              className="text-green-400 font-black drop-shadow-xl-green"
            >
              ICCR Vigilance Awareness Quiz
            </a>, awarded by Income Tax Department, India
          </li>
         
          <li className="text-blue-white mx-6 my-6">
            <span className="text-yellow-400 font-black drop-shadow-xl-green">
            🥇 First Place
            </span>{" "}
            at{" "}
            <a
              href="https://www.hack4earth.net/"
              className="text-green-400 font-black drop-shadow-xl-green"
            >
              Youthopia 2023 - Competitive Programming
            </a>, awarded by the Heritage School Kolkata.
          </li>
          <li className="text-blue-white mx-6 my-6">
            <span className="text-yellow-400 font-black drop-shadow-xl-green">
            🥇 First Place
            </span>{" "}
            at{" "}
            <a
              className="text-green-400 font-black drop-shadow-xl-green"
            >
              Birla Bharati Infotsav 2K21 - Batch Programming
            </a>
          </li>
          <li className="text-blue-white mx-6 my-6">
            <span className="text-gray-400 font-black drop-shadow-xl-green">
            🥈 Second Place
            </span>{" "}
            at{" "}
            <a
              href="https://www.hack4earth.net/"
              className="text-green-400 font-black drop-shadow-xl-green"
            >
              Hack4Earth 2023 - Advanced Category
            </a>
          </li>
          <li className="text-blue-white mx-6 my-6">
            <span className="text-gray-400 font-black drop-shadow-xl-green">
            🥈 Second Place
            </span>{" "}
            at{" "}
            <a
              className="text-green-400 font-black drop-shadow-xl-green"
            >
              Youthopia 2024 - Competitive Programming
            </a>, awarded by the Heritage School Kolkata.
          </li>
 <li className="text-blue-white mx-6 my-6">
            <span className="text-amber-800 font-black drop-shadow-xl-green">
            🥉 Third Place
            </span>{" "}
            at{" "}
            <a
              href="https://www.calcuttaheritagecollective.com/"
              className="text-green-400 font-black drop-shadow-xl-green"
            >
              CHC Calcutta Heritage Quiz
            </a>, awarded by Calcutta Heritage Collective
          </li>
          
        </ul>
        
    </div>
  )
}

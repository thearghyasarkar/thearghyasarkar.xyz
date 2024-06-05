import { Fira_Mono, Orbitron } from 'next/font/google'
import MainHeader from "@/components/MainHeader";
import { RiGithubLine, RiLinkedinFill, RiAtLine, RiDiscordLine } from "react-icons/ri";
import "@/styles/home.css"
const fira_mono = Fira_Mono({
  weight: '400',
  subsets: ['latin'],
})
const airbeat = Orbitron({
  weight: '800',
  subsets: ['latin'],
}) 
export default function Page() {
  return (
    <>
    <div className="background"></div>
    <MainHeader/>

    <div className="HeroSection mt-[20vh] md:mt-[40vh] lg:mt-[10vh] items-center justify-center text-center">
      <h1 className={`${airbeat.className} drop-shadow-xl-white px-6 text-left md:text-center text-[4em] leading-1 lg:text-[7.5rem] mt-24 text-blue-white`}>
        ARGHYA SARKAR
      </h1>
      <p className={`${fira_mono.className} drop-shadow-xl-white  text-left md:text-center text-[1rem] md:text-sm lg:text-2xl font-semibold mt-4 lg:px-[26rem] md:px-24 px-6 text-blue-white`}>
      I am a high school student hailing from India passionate in everything <span className="text-cyan-400">computer science</span>, <span className="text-orange-600">physics</span> and <span className="text-green-400">mathematics.</span>
      </p>

      <div className=" space-x-0">
            <ul className='mx-auto md:flex text-center space-x-12 hidden lg:max-w-md max-w-[20rem] py-28'>
                <li className='drop-shadow-xl-white text-blue-white text-5xl lg:text-7xl heading-6 font-semibold'><RiGithubLine /></li>
                <li className='drop-shadow-xl-white text-blue-white text-5xl lg:text-7xl heading-6 font-semibold'><RiLinkedinFill /></li>
                <li className='drop-shadow-xl-white text-blue-white text-5xl lg:text-7xl heading-6 font-semibold'><RiAtLine /></li>
                <li className='drop-shadow-xl-white text-blue-white text-5xl lg:text-7xl heading-6 font-semibold'><RiDiscordLine /></li>
            </ul>
        </div>
    </div>
    </>
  );
}
import { orbitron, fira_code } from "@/components/Fonts";
import MainHeader from "@/components/MainHeader";
import { RiGithubLine, RiLinkedinFill, RiAtLine, RiDiscordLine, RiYoutubeLine } from "react-icons/ri";
import "@/styles/home.css"

export default function Page() {
  return (
    <>
    <div className="background"></div>
    <MainHeader/>

    <div className="HeroSection mt-[20vh] md:mt-[40vh] lg:mt-[10vh] items-center justify-center text-center">
      <h1 className={`${orbitron.className} drop-shadow-xl-white px-6 text-left md:text-center text-[4em] leading-1 lg:text-[7.5rem] mt-24 text-blue-white`}>
        ARGHYA SARKAR
      </h1>
      <p className={`${fira_code.className} drop-shadow-xl-white  text-left md:text-center text-[1rem] md:text-sm lg:text-2xl font-semibold mt-4 lg:px-[26rem] md:px-24 px-6 text-blue-white`}>
      I am a high school student hailing from India passionate in everything <span className="text-cyan-400">computer science</span>, <span className="text-orange-600">physics</span> and <span className="text-green-400">mathematics.</span>
      </p>

      <div className=" space-x-0">
            <ul className='mx-auto md:flex text-center space-x-12 hidden lg:max-w-md max-w-[20rem] py-28'>
                <li className='drop-shadow-xl-white text-blue-white text-5xl lg:text-7xl heading-6 font-semibold'><a href="https://github.com/arghyagod-coder"><RiGithubLine /></a></li>
                <li className='drop-shadow-xl-white text-blue-white text-5xl lg:text-7xl heading-6 font-semibold'><a href="https://www.linkedin.com/in/arghya-sarkar-775731221/"><RiLinkedinFill /></a></li>
                <li className='drop-shadow-xl-white text-blue-white text-5xl lg:text-7xl heading-6 font-semibold'><a href="mailto:arghyasarkar.nolan@gmail.com"><RiAtLine /></a></li>
                <li className='drop-shadow-xl-white text-blue-white text-5xl lg:text-7xl heading-6 font-semibold'><a href="https://www.youtube.com/channel/UCaA7mIzoRV__-NDsxlKig9g"><RiYoutubeLine /></a></li>
            </ul>
        </div>
    </div>
    </>
  );
}
import MainHeader from "@/components/MainHeader";
import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { orbitron, fira_code } from "@/components/Fonts";

export default function AboutPage() {
  const content: React.JSX.Element[] = [
    <AboutMe key="about"></AboutMe>,
    <Experience key={"experience"}></Experience>,
    <Achievements key={"achievements"}></Achievements>,
  ];

  return (
    <div className="text-left">
      <MainHeader />

      {/* create a slider for the content */}
      <div className="md:w-[60vw] mx-4 my-20 md:my-2 md:mx-auto aboutme-container">

        <div className={`${fira_code.className} text-lg my-6 mb-12`}>Honestly, almost everything you'll get here, you'll get in my <a className="text-green-400" href="https://github.com/arghyagod-coder">Github</a> and <a className="text-green-400" href="https://www.linkedin.com/in/arghya-sarkar-775731221/">LinkedIn</a>, but here you go!</div>
        {content.map((content) => {
          return content;
        })}
      </div>

      <div className="md:w-[60vw] mx-4 my-48 md:my-2 md:mx-auto aboutme-container"></div>
    </div>
  );
}

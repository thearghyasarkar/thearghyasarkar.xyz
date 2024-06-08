import React from "react";
import { orbitron, fira_code } from "@/components/Fonts";

export const AboutMe = () => {
  return (
    <div>
      <h3 className={`${orbitron.className} text-blue-white text-4xl font-bold`}>
        👨‍🎓 About Me
      </h3>
      <ul
        className={`mt-12 ${fira_code.className} text-lg md:text-xl md:leading-8`}
      >
        <li className="text-blue-white mx-6 my-6">
          💻 I am{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            Arghya Sarkar
          </span>{" "}
          , an enthuastic and curious 10th grader studying in
          <span className="text-green-400 font-black drop-shadow-xl-green">
            Delhi Public School, Ruby Park, Kolkata
          </span>
          . I am a self-taught programmer and have acquired experience in
          various fields of technology, including{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            web development, electronics, data science and system development
          </span>
          . I have a keen passion in{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            computer science, art and physics
          </span>
          , and work along my passion with effort and dedication.
        </li>
        <li className="text-blue-white mx-6 my-6">
          ⚛️ I see myself as an extremely curious individual, fascinated by the
          science that governs the various things around us I also hold interest
          in several other fields, including{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            politics, music, Indian literature and business
          </span>
          . I am a keen observer of the world around me, and I love to learn new
          things and explore new ideas. I am a firm believer in the power of
          knowledge and education, and I feel that{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            learning is a lifelong process.
          </span>
        </li>
        <li className="text-blue-white mx-6 my-6">
          📚 I am a voracious reader. I love to read books, and my favorite
          genres are{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            politics, science fiction and biographies
          </span>
          . The works of{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            Orwell, Asimov, Hawking and Doyle
          </span>{" "}
          have been a part of my life since childhood. I also love reading{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            non-fiction books
          </span>
          , and feel that they provide me several streams and perceptions of
          knowledge, which helps me enhance my decision making skills.
        </li>
        <li className="text-blue-white mx-6 my-6">
          🎨 I also hold interest in{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            painting, chess and football
          </span>
          . I have been painting from a very young age, and over the years have
          produced various works in{" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            graphite, watercolour and charcoal
          </span>
          . Chess and football are rather relatively newer interests, and a more
          of a hobby thing for me yet.
        </li>
        <li className="text-blue-white mx-6 my-6">
           I do a lot of things, so feel free to {" "}
          <span className="text-green-400 font-black drop-shadow-xl-green">
            contact me
          </span>
          {" "} in case you have work for me, or just want to know me more.
        </li>
      </ul>
    </div>
  );
};

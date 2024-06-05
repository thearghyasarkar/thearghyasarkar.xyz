import MainHeader from "@/components/MainHeader";
import { Fira_Code, Orbitron } from 'next/font/google'

const airbeat = Orbitron({
  weight: '800',
  subsets: ['latin'],
})
const fira_code = Fira_Code({
  weight: '400',
  subsets: ['latin'],
})


export default function AboutPage() {
    return (
        <div className="text-left">
        <MainHeader/>

        <div className="md:w-[60vw] mx-auto aboutme-container">

        </div>
        </div>
    );
}

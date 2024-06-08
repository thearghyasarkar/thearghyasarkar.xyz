import { Orbitron, Fira_Code } from "next/font/google";
// Font files can be colocated inside of `pages`
export const orbitron = Orbitron({
  weight: "800",
  subsets: ["latin"],
  display: 'swap', adjustFontFallback: false
});
export const fira_code = Fira_Code({
  weight: "400",
  subsets: ["latin"],
  display: 'swap', adjustFontFallback: false
});

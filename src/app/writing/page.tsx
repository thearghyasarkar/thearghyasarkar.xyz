import { allBlogs } from "../../../.contentlayer/generated/index.mjs";
import { sortBlogs, formatDate } from "@/functions";
import MainHeader from "@/components/MainHeader";
import {Categories} from "@/components/Categories"
import { useMDXComponent } from "next-contentlayer/hooks";
import { orbitron, fira_code } from "@/components/Fonts";
import BlogMeta from "@/components/BlogMeta";


let latestPosts = sortBlogs(allBlogs);


export default function WritingsPage() {
  return (
    console.log(allBlogs),
    (
      <div className="text-left">
        <MainHeader />
        <div className="md:w-[60vw] my-24 md:my-48 lg:my-0 mx-10 md:mx-auto aboutme-container">
          <h1
            className={`${orbitron.className} text-blue-white text-5xl font-bold`}
          >
            Writings
          </h1>
          <p className={`mt-6 ${fira_code.className} text-xl`}>
            I like to pen down my insights, experiences, and thoughts about 
            everything that I learn. Some of it, I feel, could be useful to
            others as well. Hence, I share them here.
          </p>

         <Categories/>
          
          <div className="my-6 md:my-14 posts">
          <h3
            className={`${orbitron.className} text-blue-white text-2xl md:text-[2em] font-bold`}
          >
            Recent Posts
          </h3>
            <ul className="mt-12 md:px-14 ">
              {latestPosts.map((blog:any) => (
                BlogMeta({blog: blog, isPublished: blog.isPublished})
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

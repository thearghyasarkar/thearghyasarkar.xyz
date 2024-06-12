import { orbitron, fira_code } from "@/components/Fonts";

import { allBlogs } from "../../../../.contentlayer/generated/index.mjs"
import MainHeader from "@/components/MainHeader"
import RenderMdx from "@/components/renderMdx"
import Toc from "@/components/TOC"


export default function BlogPage({ params }){
    const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug)

    return (
        <div>
            <MainHeader></MainHeader>
            <div className="md:w-[60vw] my-24 md:my-48 lg:my-0 mx-6 md:mx-auto content-area">
                <h1 className={`${fira_code.className} md:leading-[3.5rem] text-blue-white text-4xl md:text-5xl font-bold`}> {post.title} </h1>
                <h6 className={`${fira_code.className} text-gray-300 mt-4 text-lg`}>- by {post.author}</h6>
                <div className="flex">
                    <RenderMdx  blog={post}></RenderMdx> 
                    <div className="hidden md:inline toc mx-4 my-4">
                        <h2 className="text-xl mb-6">Table of Contents</h2>
                        <Toc/>
                    </div>
                    </div>
            </div>
        </div>
            )
}
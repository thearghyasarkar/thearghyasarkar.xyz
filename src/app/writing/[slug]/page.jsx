import { allBlogs } from "../../../../.contentlayer/generated/index.mjs"
import MainHeader from "@/components/MainHeader"
import RenderMdx from "@/components/renderMdx"
import { useMDXComponent } from "next-contentlayer/hooks"
import { render } from "react-dom"


export default function BlogPage({ params }){
    const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug)
    // console.log(post.categories[0]) 

    
    return (
        <div>
            <MainHeader></MainHeader>
            <div className="md:w-[60vw] my-24 md:my-48 lg:my-0 mx-10 md:mx-auto content-area">
                <h1 className="text-blue-white text-5xl font-bold"> {post.title} </h1>
                <RenderMdx  blog={post}></RenderMdx>
            </div>
        </div>
            )
}
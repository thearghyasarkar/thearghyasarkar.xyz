import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { orbitron, fira_code } from "@/components/Fonts";

const RenderMdx = ({blog}) => {
    const MDXComponent = useMDXComponent(blog.body.code);
    return (
        <div className={`${fira_code.className} md:mt-10 mt-20 text-blue-white prose-blockquote:text-blue-white text-md md:text-lg prose:text-blue-white mb-48 prose-headings:text-blue-white prose-li:text-blue-white prose-strong:text-blue-white prose`}>
            <MDXComponent />
        </div>
    )
}

export default RenderMdx
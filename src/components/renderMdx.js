import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

const RenderMdx = ({blog}) => {
    const MDXComponent = useMDXComponent(blog.body.code);
    return (
        <div className='mt-10 text-white text-lg prose-headings:text-white prose'>
            <MDXComponent />
        </div>
    )
}

export default RenderMdx
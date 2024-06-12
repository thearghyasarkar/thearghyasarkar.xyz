import React from "react";
import { sortBlogs, formatDate } from "@/functions";
import { fira_code } from "./Fonts";

const BlogMeta = ({
  blog,
  isPublished,
}: {
  blog: {
    _id: string;
    title: string;
    description: string;
    url_path: string;
    publishedAt: string;
    updatedAt: string;
    categories: { name: string; slug: string }[];
    coverImage: { url: string; alt: string };
    content: {
      raw: string;
      html: string;
      markdown: string;
      text: string;
      references: any[];
    };
  };
  isPublished: boolean;
}) => {
  if (!isPublished) {
    return null;
  } else {
    return (
      <li className="pl-6 border-y-[1px] py-6" key={blog._id}>
        <a
          href={`${blog.url_path}`}
          className={`text-xl md:text-2xl block hover:underline ${fira_code.className}`}
        >
          {blog.title}
        </a>
        <p
          className={`${fira_code.className} text-gray-400 inline pt-4 text-sm md:text-lg`}
        >
          {blog.description}
        </p>
        <br />
        <br />
        <p
          className={`text-xs ${fira_code.className} text-right text-gray-500`}
        >
          Published At: {formatDate(blog.publishedAt)}
        </p>
      </li>
    );
  }
};

export default BlogMeta;

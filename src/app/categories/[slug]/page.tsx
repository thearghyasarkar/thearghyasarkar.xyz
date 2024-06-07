import { allBlogs } from "../../../../.contentlayer/generated/index.mjs";
import { formatDate } from "@/functions";
import MainHeader from "@/components/MainHeader";
import {Categories} from "@/components/Categories"
import { useMDXComponent } from "next-contentlayer/hooks";
import { Fira_Code, Orbitron } from "next/font/google";

const airbeat = Orbitron({
  weight: "800",
  subsets: ["latin"],
});
const fira_code = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});



export default function CategoriesPage({ params }: {params: {slug: string}}) {
    let filteredBlogs: any = [];
  
    allBlogs.map((blog: any) => {
        
      if (blog.categories.includes(params.slug)) {
        console.log(blog.categories[0]);
        filteredBlogs.push(blog);
        console.log(filteredBlogs)
      }else if (params.slug == "all") {
        filteredBlogs.push(blog);
      }
    });
  return (
    (
      <div className="text-left">
        <MainHeader />
        <div className="md:w-[60vw] my-24 md:my-48 lg:my-0 mx-10 md:mx-auto aboutme-container">
         
          <Categories></Categories>

          

<button id="dropdownButton" data-dropdown-toggle="dropdown" className={`${airbeat.className} hover:text-black mx-6 mt-12 md:hidden mobile-categories hover:bg-blue-white bg-light-black text-blue-white border-2 text-lg px-5 py-2.5 text-center inline-flex items-center `} type="button">CATEGORIES<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>


          
          <div className="my-14 posts">
          <h3
            className={`${airbeat.className} text-blue-white text-[2em] font-bold`}
          >
            Posts Tagged "{params.slug}"
          </h3>
            <ul className="mt-12 px-14  ">
              {filteredBlogs.map((blog:any) => (
                <li className="pl-6 border-y-[1px] py-6" key={blog._id}>
                  
                  <a
                    href={`${blog.url_path}`}
                    className={`text-2xl block hover:underline ${fira_code.className}`}
                  >
                    {blog.title}
                  </a>
                  <p className="text-gray-400 inline pt-4 text-lg">
                    {blog.description} 
                </p>
                <p className="text-right text-gray-500">Published At: {formatDate(blog.publishedAt)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

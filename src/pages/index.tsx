import { useMemo } from "react";
import { Link } from "react-router-dom";
import { handlePostRoutes } from "@/utils/posts";

export default function HomePage() {
  const posts = useMemo(handlePostRoutes, []);

  return (
    <div className="w-screen h-full">
      <div className="w-screen h-screen absolute -z-40 bg-gradient-to-b from-transparent via-transparent to-white" />
      <div className="w-screen h-screen absolute -z-50 bg-gradient-to-r from-fuchsia-100  via-cyan-50 to-green-50 background-animate" />
      <div className="container mx-auto md:px-20 md:py-32 px-8 py-12">
        <div className="flex-col gap-8 flex">
          <div className="bg-[#1F18C0] w-20 h-20 rounded-full shadow-slate-400 shadow-lg" />
          <div className="text-4xl tracking-tighter xl:mt-12 mt-6 font-light">
            Yr.
          </div>
          <div className="tracking-tighter font-semibold xl:text-6xl text-4xl xl:leading-relaxed leading-tight">
            <span className="block">Full Stack Development Engineer</span>
            <span className="block">
              Interest in Robotics Software and Real Time 3D
            </span>
          </div>

          <div className="flex-row gap-10 flex xl:mt-40 mt-8">
            <Link
              to="http://github.com/yurui01"
              target={"_blank"}
              className="icon-[carbon--logo-github] xl:w-10 xl:h-10 w-8 h-8 hover:scale-125 duration-300"
            />
          </div>

          {/* <div className="tracking-[0.25rem] font-light text-center  xl:mt-32">
            POSTS
          </div>
          <div className="flex flex-col divide-y">
            {posts.map((post) => (
              <div
                className="flex flex-col space-y-6 justify-center items-center py-20"
                key={post.title}
              >
                <div className="text-4xl font-light">{post.title}</div>
                <div className="flex justify-center items-center bg-slate-100 rounded-full w-24 px-2 py-1 shadow-sm">
                  <span className="icon-[ic--baseline-tag]" />
                  {post.tag.map((tag: string) => (
                    <span className="text-sm font-light ml-2" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-light text-lg tracking-widest leading-relaxed max-w-2xl">
                  {post.description}
                </div>
                <div className="underline font-light">Read more</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <div className="flex justify-end items-center space-x-2">
        <span className="icon-[iconoir--eye-alt] w-4 h-4" />
        <span id="busuanzi_value_site_pv" className="font-light text-sm" />
      </div>
    </div>
  );
}

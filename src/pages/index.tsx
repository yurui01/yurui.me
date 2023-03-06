import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-screen h-full">
      <div className="w-screen h-screen absolute -z-40 bg-gradient-to-b from-transparent via-transparent to-white" />
      <div className="w-screen h-screen absolute -z-50 bg-gradient-to-r from-violet-100 via-cyan-50 to-green-50 background-animate" />
      <div className="container mx-auto md:px-20 md:py-32 px-8 py-12">
        <div className="flex-col gap-8 flex">
          <div className="bg-[#1F18C0] w-20 h-20 rounded-full shadow-slate-400 shadow-lg" />
          <div className="text-4xl tracking-wider xl:mt-12 mt-6 font-light">yr.</div>
          <div className="tracking-tighter font-semibold xl:text-6xl text-4xl xl:leading-relaxed leading-tight">
            <span className="block">Full Stack Development Engineer</span>
            <span className="block">
              Interest in Robotics Software and Real Time 3D
            </span>
          </div>
          <div className="flex-row gap-10 flex mt-8">
            <Link
              to="http://github.com/yurui01"
              target={"_blank"}
              className="icon-[carbon--logo-github] w-8 h-8 hover:scale-110 duration-300"
            />
          </div>
        </div>

        {/* <div className="flex flex-col xl:mt-64 mt-32 xl:px-64 px-6 items-center">
          <span className="tracking-widest font-medium">POSTS</span>

          <div className="flex flex-col gap-6 mt-20 items-center">
            <div className="font-light text-2xl">
              Potree中文教程 -- 关于Potree
            </div>
            <div className="rounded-full bg-slate-50 items-center flex font-light py-1 px-2 w-auto shadow-sm">
              <span className="icon-[carbon--hashtag] mr-2" />
              <span className="text-sm">POTREE</span>
            </div>
            <div className="font-light tracking-widest leading-6">
              Potree 是一个基于 WebGL 的免费开源大型点云点云渲染器。它基于TU
              Wien Scanopy project 项目和研究项目Harvest4D GCD Doctoral College
              和Superhumans。
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-20 items-center">
            <div className="font-light text-2xl">
              Potree中文教程 -- 关于Potree
            </div>
            <div className="rounded-full bg-slate-50 items-center flex font-light py-1 px-2 w-auto shadow-sm">
              <span className="icon-[carbon--hashtag] mr-2" />
              <span className="text-sm">POTREE</span>
            </div>
            <div className="font-light tracking-widest leading-6">
              Potree 是一个基于 WebGL 的免费开源大型点云点云渲染器。它基于TU
              Wien Scanopy project 项目和研究项目Harvest4D GCD Doctoral College
              和Superhumans。
            </div>
          </div>
        </div> */}

        {/* <div className="flex flex-col xl:mt-64 mt-32 xl:px-64 px-6 items-center">
          <span className="tracking-widest font-medium">PROJECTS</span>
        </div> */}

        {/* <div className="flex flex-col  mt-32 xl:px-64 px-6 items-center">
          <div className='icon-[carbon--view] w-3 h-3' />
        </div> */}
      </div>
    </div>
  );
}

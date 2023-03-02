import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-full">
      <div className="w-screen h-screen absolute -z-50 bg-gradient-to-r from-violet-100 via-cyan-50 to-green-60 background-animate blur" />
      <div className="container mx-auto px-20 py-32">
        <div className="flex-col gap-10 flex">
          <div className=" bg-[#002fa7] w-16 h-16 rounded-full shadow-slate-400 shadow-lg" />
          <div className="text-2xl tracking-tighter mt-10">Rui Yu</div>
          <div className="tracking-tighter font-semibold text-5xl leading-loose">
            <span className="block">Full Stack Development Engineer</span>
            <span className="block">
              Interest in Robotics Software and Real Time 3D
            </span>
          </div>
          <div className="flex-row gap-10 flex">
            <Link
              to="http://github.com/yurui01"
              target={"_blank"}
              className="icon-[carbon--logo-github] w-8 h-8 hover:scale-110 duration-300"
            />
            <Link
              to="/blog"
              target={"_blank"}
              className="icon-[carbon--blog] w-8 h-8 hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

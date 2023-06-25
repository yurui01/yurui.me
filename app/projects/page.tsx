export default function ProjectPage() {
  return (
    <div className="w-full max-w-4xl self-center">
      <h1 className="text-5xl font-bold mb-24 tracking-tight">Projects</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-50 col-span-1 border border-gray-100 dark:border-zinc-800 dark:bg-zinc-800  w-full min-h-[300px] trasition duration-300 ease-in-out hover:scale-105 rounded-md">
          <div className="w-full h-full flex-col flex rounded-md">
            <div
              className="relative bg-cover bg-no-repeat bg-center w-full h-full rounded-tr-md rounded-tl-md"
              style={{
                backgroundImage:
                  "url('/images/projects/map-studio/feature.png')",
              }}
            />
            <div className="prose px-2 pt-4 pb-8">
              <h4 className="font-medium dark:text-neutral-50">Map Studio | 点云后处理软件</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                一款基于点云的后处理软件，用于点云的可视化、优化、编辑、导出等。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 col-span-1 border border-gray-100 dark:border-zinc-800 dark:bg-zinc-800  w-full min-h-[300px] trasition duration-300 ease-in-out hover:scale-105 rounded-md">
          <a className="w-full h-full flex-col flex rounded-md" href="https://100.yurui.me" target="_blank">
            <div
              className="relative bg-cover bg-no-repeat bg-center w-full h-full rounded-tr-md rounded-tl-md"
              style={{
                backgroundImage:
                  "url('/images/projects/100-days-css-challenge/feature.png')",
              }}
            />
            <div className="prose px-2 pt-4 pb-8">
              <h4 className="font-medium dark:text-neutral-50">100 DAYS CSS CHALLENGE </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                100天CSS挑战，每天一个CSS小作品，记录自己的CSS成长之路。
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

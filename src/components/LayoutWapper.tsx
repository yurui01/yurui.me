import Navbar from "@/components/Navbar";

const navItems = [
  { title: "home", path: "/" },
  { title: "posts", path: "/posts" },
  { title: "projects", path: "/projects" },
  { title: "about", path: "/about" },
];

interface LayoutWapperProps {
  children: React.ReactNode;
}

export default function LayoutWapper({ children }: LayoutWapperProps) {
  return (
    <div className="w-screen h-screen bg-black text-gray-300 select-none">
      <div className="w-full h-full">
        {/* Navbar */}
        <Navbar title="Yr." items={navItems} />

        <main className="">{children}</main>
      </div>
    </div>
  );
}

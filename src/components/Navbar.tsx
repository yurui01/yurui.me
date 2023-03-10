import { useLocales } from "@/locales";
import { Link } from "react-router-dom";

interface NavbarProps {
  title: string;
  items: {
    title: string;
    path: string;
  }[];
}

export default function Navbar(props: NavbarProps) {
  const { title, items } = props;
  const { t, currentLang, onChangeLang } = useLocales();

  // get current path
  const currentPath = window.location.pathname;

  return (
    <nav className="lg:p-12 p-8 flex flex-wrap items-center justify-between mx-auto w-full absolute z-50">
      <Link to="/#">
        <span className="tracking-widest font-normal text-base">{title}</span>
      </Link>

      <ul className="flex lg:space-x-8 space-x-3 tracking-widest font-light text-[12px]">
        {items.map((item) => (
          <li
            key={item.title}
            className="underline-offset-2 transition-all duration-300 ease-in-out"
          >
            <Link
              className="group transition-all duration-300 ease-in-out"
              to={item.path}
            >
              {currentPath === item.path ? (
                <span className="uppercase bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:30%_2px] bg-no-repeat group-hover:bg-[length:30%_2px] group-hover:text-white transition-all duration-500 ease-out py-1">
                  {t(item.title)}
                </span>
              ) : (
                <span className="uppercase bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:30%_2px] group-hover:text-white transition-all duration-500 ease-out py-1">
                  {t(item.title)}
                </span>
              )}
            </Link>
          </li>
        ))}
        <li className="underline-offset-2 transition-all duration-300 ease-in-out cursor-pointer">
          <div className="group transition-all duration-300 ease-in-out">
            {currentLang.value === "cn" ? (
              <span
                className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:30%_2px] group-hover:text-white transition-all duration-500 ease-out py-1"
                onClick={() => onChangeLang("en")}
              >
                EN
              </span>
            ) : (
              <span
                className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:30%_2px] group-hover:text-white transition-all duration-500 ease-out py-1"
                onClick={() => onChangeLang("cn")}
              >
                中
              </span>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
}

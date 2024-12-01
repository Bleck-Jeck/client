import Link from "next/link";
import React from "react";
import Logo from "../icon/logo";
import Search from "./search";
import MenuLink from "./MenuLink";
import MobileMenu from "./MobileMenu";

export type Menu = {
  title: string;
  href: string;
};

const headerNavLinks = [
  { href: "/", title: "Главная" },
  { href: "/all", title: "Каталог" },
  { href: "/time", title: "Расписание" },
  { href: "/film", title: "Фильмы" },
  { href: "/tv", title: "Сериалы" },
];
const menu = headerNavLinks;
const Navbar = () => {
  return (
    <header className="h-14 md:h-16 lg:h-20  w-full items-center flex bg-[#141414] fixed z-30 top-0">
      <div className="max-w-7xl px-8 md:px-10 py-1 lg:py-5 w-full m-auto flex justify-between items-center">
        <Link href={"/"}>
          <Logo />
        </Link>

        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>

        <nav className="md:block hidden">
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item, i) => (
                <MenuLink
                  key={item.title}
                  href={item.href}
                  title={item.title}
                  className="text-neutral-500 font-medium underline-offset-4 hover:text-violet-600 hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                />
              ))}
            </ul>
          ) : null}
        </nav>
        <Search className="md:block hidden max-w-[380px]" />
      </div>
    </header>
  );
};

export default Navbar;

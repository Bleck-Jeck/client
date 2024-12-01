import React from "react";
import Navigations from "@/src/components/navigations";
import FilterList from "@/src/components/filter";
import { sorting } from "@/src/libs/contact";

// Адаптировать
export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative pt-16 mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
      <div className="order-last min-h-screen max-w-6xl w-full md:order-none pt-12">
        {children}
      </div>
    </div>
  );
}

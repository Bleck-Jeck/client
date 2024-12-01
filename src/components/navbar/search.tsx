"use client";

import { createUrl } from "@/src/libs/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  }

  return (
    <div className={className + ` w-full flex items-center`}>
      <div className="relative w-full block">
        <form
          onSubmit={onSubmit}
          className=" relative w-full lg:w-80 xl:w-full"
        >
          <input
            key={searchParams?.get("q")}
            type="text"
            name="search"
            placeholder="Фильмы, сериалы, персоны"
            autoComplete="off"
            defaultValue={searchParams?.get("q") || ""}
            className="w-full rounded-lg border bg-white px-4 py-1 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 outline-none"
          />
          <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
}

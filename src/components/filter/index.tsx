import { SortFilterItem } from "@/src/libs/contact";
import FilterItemDropdown from "./dropdown";
import { FilterItem } from "./item";

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { id: number; name: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({
  list,
  title,
}: {
  list: ListItem[];
  title?: string;
}) {
  return (
    <>
      <nav className="w-full">
        {title ? (
          <h3 className="hidden text-xs text-neutral-500 dark:text-neutral-400 ">
            {title}
          </h3>
        ) : null}
        <ul className="hidden">
          <FilterItemList list={list} />
        </ul>
        <ul className="w-full">
          <FilterItemDropdown list={list} />
        </ul>
      </nav>
    </>
  );
}

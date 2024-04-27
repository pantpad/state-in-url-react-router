type FiltersType = {
  searchParams: URLSearchParams;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

import { useState, useTransition } from "react";

export default function Filters({
  searchParams,
  changeName,
  togglePc,
}: FiltersType) {
  const [isLoading, startTransition] = useTransition();
  const [name, setName] = useState("");
  const paramInput = searchParams.get("q") || "";
  const pcOnly = searchParams.get("pcOnly") || "false";
  console.log("pc", pcOnly);

  return (
    <>
      <form className="flex flex-col">
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="search">Title</label>
          <input
            type="text"
            id="search"
            value={name ? name : paramInput}
            onChange={(e) => {
              console.log("value-changed");
              setName(e.target.value);
              startTransition(() => {
                changeName(e);
              });
            }}
          />
        </div>
        <div className="grid grid-cols-2 justify-items-start items-center">
          <label htmlFor="filter">Only Computer Items</label>
          <input
            type="checkbox"
            id="filter"
            checked={pcOnly === "true" ? true : false}
            onChange={(e) =>
              startTransition(() => {
                togglePc(e);
              })
            }
          />
        </div>
      </form>
    </>
  );
}

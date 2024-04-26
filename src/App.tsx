import "./App.css";

import Filters from "./components/Filters";
import List from "./components/List";
import Nav from "./components/Nav";

import { Outlet, useSearchParams } from "react-router-dom";

import { mockList as allItems } from "./mockItems/list";
import { filterFunction } from "./utils/filterFunction";
import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

// import useDebounce from "./hooks/useDebounce";

export default function App() {
  console.log("re-render");

  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [isPc, setIsPc] = useState(false);

  const nameFilter = useDebounce(name, 1000).toString();
  const pcOnlyFilter = useDebounce(isPc, 1000).toString();

  useEffect(() => {
    let skip = false;

    if (!skip) {
      setSearchParams((prev) => {
        prev.set("q", nameFilter);
        prev.set("pcOnly", pcOnlyFilter);
        return prev;
      });
    }

    return () => {
      skip = true;
    };
  }, [nameFilter, pcOnlyFilter]);

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function togglePc() {
    setIsPc((prev) => !prev);
  }

  const items = filterFunction(allItems, nameFilter, pcOnlyFilter);

  return (
    <>
      <main className="min-w-[min(32rem,100vw-2rem)] py-2 px-3 bg-red-100 flex flex-col gap-2 text-slate-600">
        <Nav />
        <Outlet />
        <Filters
          searchParams={searchParams}
          changeName={changeName}
          togglePc={togglePc}
        />
        <List list={items} />
      </main>
    </>
  );
}

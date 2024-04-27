import "./App.css";

import Filters from "./components/Filters";
import List from "./components/List";
import Nav from "./components/Nav";

import { Outlet, useSearchParams } from "react-router-dom";

import { mockList as allItems } from "./mockItems/list";
import { filterFunction } from "./utils/filterFunction";
// import { useDebounce, useDebounceCallback } from "./hooks/useDebounce";

// import useDebounce from "./hooks/useDebounce";

export default function App() {
  console.log("re-render");

  const [searchParams, setSearchParams] = useSearchParams();

  const nameFilter = searchParams.get("q");
  const pcOnlyFilter = searchParams.get("pcOnly");

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchParams((prev) => {
      prev.set("q", e.target.value);
      return prev;
    });
  }

  function togglePc(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchParams((prev) => {
      prev.set("pcOnly", e.target.checked.toString());
      return prev;
    });
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

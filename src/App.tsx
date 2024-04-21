import "./App.css";

import Filters from "./components/Filters";
import List from "./components/List";
import Nav from "./components/Nav";

import { Outlet, useSearchParams } from "react-router-dom";

import { mockList as allItems } from "./mockItems/list";
import { filterFunction } from "./utils/filterFunction";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const nameFilter = searchParams.get("q") || "";
  const pcOnlyFilter = searchParams.get("pcOnly") || "false";

  function addParams(key: string, value: string) {
    setSearchParams(
      (prev) => {
        prev.set(key, value);
        return prev;
      },
      { replace: true }
    );
  }

  const items = filterFunction(allItems, nameFilter, pcOnlyFilter);

  return (
    <>
      <main className="min-w-[min(32rem,100vw-2rem)] py-2 px-3 bg-red-100 flex flex-col gap-2 text-slate-600">
        <Nav />
        <Outlet />
        <Filters
          addParams={addParams}
          nameFilter={nameFilter}
          pcOnlyFilter={pcOnlyFilter}
        />
        <List list={items} />
      </main>
    </>
  );
}

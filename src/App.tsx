import "./App.css";

import Filters from "./components/Filters";
import List from "./components/List";
import Nav from "./components/Nav";

import { Outlet, useSearchParams } from "react-router-dom";

import { mockList as allItems } from "./mockItems/list";

export default function App() {
  console.log(allItems);

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

  const items = allItems.filter((item) => {
    if (nameFilter && pcOnlyFilter === "true") {
      return (
        item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        item.type === "pc"
      );
    }
    if (nameFilter)
      return item.name.toLowerCase().includes(nameFilter.toLowerCase());

    if (pcOnlyFilter === "true") return item.type === "pc";

    return true;
  });

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

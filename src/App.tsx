import "./App.css";

import Filters from "./components/Filters";
import List from "./components/List";
import Nav from "./components/Nav";

import { Outlet, useSearchParams } from "react-router-dom";

import { mockList as allItems } from "./mockItems/list";

export default function App() {
  console.log(allItems);

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <main className="min-w-[min(32rem,100vw-2rem)] py-2 px-3 bg-red-100 flex flex-col gap-2 text-slate-600">
        <Nav />
        <Outlet />
        <Filters />
        <List list={allItems} />
      </main>
    </>
  );
}

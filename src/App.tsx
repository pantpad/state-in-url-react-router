import { useState } from "react";
import "./App.css";
import CurrentPage from "./components/CurrentPage";
import Filters from "./components/Filters";
import List from "./components/List";
import Nav from "./components/Nav";

import { mockList } from "./mockItems/list";

export default function App() {
  const [list, setList] = useState(mockList);
  console.log(list);

  return (
    <>
      <main className="min-w-[min(32rem,100vw-2rem)] py-2 px-3 bg-red-100 flex flex-col gap-2 text-slate-600">
        <Nav />
        <CurrentPage />
        <Filters />
        <List list={list} />
      </main>
    </>
  );
}

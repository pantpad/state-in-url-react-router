import "./App.css";
import CurrentPage from "./components/CurrentPage";
import Form from "./components/Form";
import List from "./components/List";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <main className="min-w-[min(32rem,100vw-2rem)] py-2 px-3 bg-red-100 flex flex-col gap-2">
        <Nav />
        <CurrentPage />
        <Form />
        <List />
      </main>
    </>
  );
}

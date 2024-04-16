import "./App.css";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <main className="min-w-[min(32rem,100vw-2rem)] p-2 bg-red-100">
        <Nav />
        <section className="text-left">
          <h1>Current Page</h1>
        </section>

        <ul></ul>
      </main>
    </>
  );
}

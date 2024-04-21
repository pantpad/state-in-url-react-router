import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="flex gap-4">
        <Link to="CurrentPage">Current</Link>
        <Link to="StorePage">Store</Link>
      </nav>
    </>
  );
}

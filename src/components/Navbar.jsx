import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-black/30 backdrop-blur-md text-white p-4 flex justify-center gap-6 fixed w-full top-0">
      <Link to="/">Home</Link>
      <Link to="/fidho">Fidho</Link>
      <Link to="/ardan">Ardan</Link>
      <Link to="/dias">Dias</Link>
    </div>
  );
}
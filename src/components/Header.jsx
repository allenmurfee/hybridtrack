import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">HybridTrack</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/add" className="hover:underline">
                Add Employees
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:underline">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

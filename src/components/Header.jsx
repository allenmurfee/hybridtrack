import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-slate-300 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src="/hybridtrack-logo.png"
            alt="HybridTrack Logo"
            className="w-36 h-18"
          />
        </Link>
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

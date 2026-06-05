import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-700">
          KartavyaMitra
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/communities">Communities</Link>
          </li>

          <li>
            <Link to="/activities">Activities</Link>
          </li>

          <li>
            <Link to="/dashboard">Impact</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

        </ul>

        <Link
          to="/register"
          className="bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Join Now
        </Link>

      </div>

    </nav>
  );
}
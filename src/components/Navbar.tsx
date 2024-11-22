// components/Navbar.tsx
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">BrandLogo</a>

        {/* Main Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              More
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white border rounded shadow-md mt-2 w-40">
                <li>
                  <a
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

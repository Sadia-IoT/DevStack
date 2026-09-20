import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* mobile view */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-xl md:hidden hover:-translate-y-0.5"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <img src={Logo} alt="logo" className="w-28 md:w-32" />

        <ul className="hidden md:flex gap-4 items-center">
          <li>
            <a
              href="#"
              className="text-black transition hover:-translate-y-0.5 hover:text-pink-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black transition hover:-translate-y-0.5 hover:text-pink-500"
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black transition hover:-translate-y-0.5 hover:text-pink-500"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black transition hover:-translate-y-0.5 hover:text-pink-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black transition hover:-translate-y-0.5 hover:text-pink-500"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3 ">
          <button className="text-sm text-gray-600 sm:block rounded-lg border border-gray-400 px-4 py-2 text-gray-700 transition hover:bg-gray-200">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white hover:-translate-y-0.5 hover:text-black">
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Technologies
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

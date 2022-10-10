import React from "react";
import { Link } from "react-router-dom";

const pages = ["hotels", "contact"];

const NavBar = () => {

  return (
    <nav className=" px-2 sm:px-4 py-2.5 bg-dark">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col items-center p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-light md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="hover:scale-125 hover:font-medium">
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 md:hover:text-deep tracking-widest"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            {pages.map((page) => (
              <li key={page} className="hover:scale-125 hover:font-medium">
                <Link
                  to={`/${page}`}
                  className="block px-5 text-light rounded md:hover:bg-transparent md:border-0 md:hover:text-deep md:p-0 tracking-widest uppercase"
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">

      <h1 className="text-4xl md:hidden font-black text-deep">
        INMOBANA
      </h1>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

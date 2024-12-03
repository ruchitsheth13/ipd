"use client";
// ${router.pathname === '/Github' ? 'text-orange-700' : 'text-gray-400'}
import React from "react";
import Link from "next/link";
// import { useRouter } from 'next/router'

function Navbar() {
  // const router = useRouter()
  return (
    <div>
      {" "}
      <header className="shadow sticky z-50 hrefp-0">
        <nav className="bg-orange-700 border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex  justify-between items-center mx-auhref max-w-screen-xl">
            <Link href="/" className="flex items-center">
              {/* <img
                    src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                    className="mr-3 h-12"
                    alt="Logo"
                /> */}
              {/* Logo */}
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                href="#"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                href="#"
                className="text-white bg-orange-700 hover:bg-slate-300 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Get started
              </Link>
            </div>

            <div
              className="hidden justify-between  items-center w-full lg:flex lg:w-auhref lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 
                              
                                lg:hover:bg-transparent lg:border-0 hover:text-slate-300 lg:p-0`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/questions"
                    className={`block py-2 pr-4 pl-3 duration-200 border-b 
                               
                                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-slate-300  lg:p-0`}
                  >
                    questions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/suggestions"
                    className={`block py-2 pr-4 pl-3 duration-200 border-b 
                               
                                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-slate-300 lg:p-0`}
                  >
                    suggestions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className={`block py-2 pr-4 pl-3 duration-200 border-b 
       
        border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-slate-300 lg:p-0`}
                  >
                    dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

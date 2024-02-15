"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const navigation = [
    "About",
    "Products",
    // "Adapta CS",
    "Climate Fund",
    "Our Team",
    "Contact",
  ];
  const linkUrl = [
    "#about",
    "#products",
    // "#adaptcs",
    "#climatefund",
    "#team",
    "#contact",
  ];
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <>
      {/* Start Navbar */}
      <nav
        id="topnav"
        className="defaultscroll is-sticky bg-white dark:bg-slate-900"
      >
        <div className="container">
          {/* Logo container*/}
          <Link className="logo pl-0" href="index.html">
            <img
              src="assets/img/logo.svg"
              className="inline-block w-32"
              alt=""
            />
          </Link>
          <ul className="buy-button list-none mb-0">
            <li className="inline mb-0">
              <div className="btn btn-icon rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white">
                <ThemeChanger />
              </div>
            </li>
          </ul>
          <div id="navigation">
            {/* Navigation Menu*/}
            <ul className="navigation-menu">
              <li>
                <Link href="index.html" className="sub-menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link href="index.html" className="sub-menu-item">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="index.html" className="sub-menu-item">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="index.html" className="sub-menu-item">
                  Episodes
                </Link>
              </li>
            </ul>
            {/*end navigation menu*/}
          </div>
          {/*end navigation*/}
        </div>
        {/*end container*/}
      </nav>
      {/*end header*/}
      {/* End Navbar */}
    </>
  );
};

export default Navbar;

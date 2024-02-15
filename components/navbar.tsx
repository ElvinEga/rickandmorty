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
      {/*...::: Header Start :::... */}
      <header
        className="site-header site-header--absolute is--white py-3"
        id="sticky-menu"
      >
        <div className="global-container">
          <div className="flex items-center justify-between gap-x-8">
            {/* Header Logo */}
            <Link href="/" className="">
              <img
                src="img/Rick  and Morty Universe_bw.svg"
                width={180}
                height={24}
              />
            </Link>
            {/* Header Logo */}
            {/* Header Navigation */}
            <div className="menu-block-wrapper">
              <div className="menu-overlay" />
              <nav className="menu-block" id="append-menu-header">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <img
                      className="dropdown-icon"
                      src="assets/img/icon-black-long-arrow-right.svg"
                      alt="cheveron-right"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close">×</div>
                </div>
                <ul className="site-menu-main">
                  <li className="nav-item">
                    <Link href="/" className="nav-link-item">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#tech" className="nav-link-item">
                      Guiding principles
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#core" className="nav-link-item">
                      Core Capabilities
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#about" className="nav-link-item">
                      Who we are
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" className="nav-link-item">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Header Navigation */}
            {/* Header User Event */}
            <div className="flex items-center gap-6">
              <Link
                href="https://app.Rick  and Morty Universe/login/"
                className="button hidden rounded-[50px] border-[#7F8995] bg-transparent text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block"
              >
                Login
              </Link>
              <Link
                href="https://app.Rick  and Morty Universe/signup/"
                className="button hidden rounded-[50px] border-colorViolet bg-colorViolet text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block"
              >
                Sign up
              </Link>
              {/* Responsive Offcanvas Menu Button */}
              <div className="block lg:hidden">
                <button
                  id="openBtn"
                  className="hamburger-menu mobile-menu-trigger"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
            {/* Header User Event */}
          </div>
        </div>
      </header>
      {/*...::: Header End :::... */}
    </>
  );
};

export default Navbar;

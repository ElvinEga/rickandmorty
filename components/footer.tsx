"use client";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <>
      {/*...::: Footer-3 Section Start :::... */}
      <footer id="section-footer-3">
        <div className="bg-black text-white mt-20">
          {/* Section Spacer */}
          <div>
            {/* Footer Top */}
            <div className="bg-[#121212]  py-20 xl:py-[130px]">
              {/* Section Container */}
              <div className="global-container">
                {/* Footer Content */}
                <div className="grid-col-1 grid items-center gap-10 md:grid-cols-2">
                  {/* Section Content Block */}
                  <div>
                    <h1 className="font-raleway text-white text-4xl">
                      Let's Talk:
                    </h1>
                  </div>
                  {/* Section Content Block */}
                  <div className="jos flex flex-col gap-10 md:gap-[50px]">
                    <p className="text-lg font-semibold leading-[1.33] md:text-xl lg:text-2xl">
                      Collaborate with us at Rick and Morty Universe to forge a
                      sustainable future, harnessing AI, IOT and Geo-Information
                      to transform ecological, agricultural and economical
                      challenges into impactful solutions.
                    </p>
                    <Link
                      href="/signup"
                      className="button  rounded-[50px] justify-center border-2 items-center border-white bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
                {/* Footer Content */}
                {/* Footer Contact */}
                {/* <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-[10px] bg-[#121212] px-11 py-5 text-center font-raleway font-bold leading-[1.33] text-[#F6F6EB] transition-all duration-300 hover:bg-[#381FD1] xl:text-2xl xxl:text-3xl">
                    <Link href="mailto:mthemeus@gmail.com">info@Rick  and Morty Universe</Link>
                  </div>
                  <div className="rounded-[10px] bg-[#121212] px-11 py-5 text-center font-raleway font-bold leading-[1.33] text-[#F6F6EB] transition-all duration-300 hover:bg-[#381FD1] xl:text-2xl xxl:text-3xl">
                    <Link href="tel:+088-3457-9210">+254-7010-64273</Link>
                  </div>
                  <div className="rounded-[10px] bg-[#121212] px-11 py-5 text-center font-raleway font-bold leading-[1.33] text-[#F6F6EB] transition-all duration-300 hover:bg-[#381FD1] xl:text-2xl xxl:text-3xl">
                    <Linkddress className="not-italic">Nairobi,Kenya</address>
                  </div>
                </div> */}
                {/* Footer Contact */}
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Top */}
            {/* Footer Bottom */}
            <div className="mt-[100px]">
              {/* Section Container */}
              <div className="global-container">
                {/* Footer Widgets Block */}
                <div className="grid gap-x-10 gap-y-[60px] md:grid-cols-2 lg:flex lg:grid-cols-4 lg:justify-between lg:gap-x-20">
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6 md:max-w-xs xl:max-w-[480px]">
                    <Link href="/" className="inline-block">
                      <img
                        src="img/Rick  and Morty Universe_white.svg"
                        alt="logo"
                        width={200}
                        height={48}
                      />
                    </Link>
                    <p>
                      Rick and Morty Universe leverages AI, IOT and
                      Geo-Information to drive ecological, agricultural and
                      economical sustainability, focusing on data-driven
                      solutions for resilience and adaptation in Africa and
                      related regions and beyond.
                    </p>
                    <p>
                      © Copyright 2024, All Rights Reserved by Rick and Morty
                      Universe
                    </p>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6">
                    {/* Footer Title */}
                    <h4 className="text-[21px] font-semibold capitalize text-white">
                      Primary Pages
                    </h4>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          href="/"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#about"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#tech"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          Guiding principles
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#core"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          Core Capabilities
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          href="pricing.html"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          pricing
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          href="/contact"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6">
                    {/* Footer Title */}
                    <h4 className="text-[21px] font-semibold capitalize text-white">
                      Utility pages
                    </h4>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[10px] capitalize">
                      <li>
                        <Link
                          href="https://qpp.Rick  and Morty Universe/signup/"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          Signup
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://qpp.Rick  and Morty Universe/login/"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          Login
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          href="#"
                          className="transition-all duration-300 ease-linear hover:text-colorOrangyRed"
                        >
                          Password Reset
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                  {/* Footer Widget Item */}
                  <div className="flex flex-col gap-y-6">
                    {/* Footer Title */}
                    <h4 className="text-[21px] font-semibold capitalize text-white">
                      Socials
                    </h4>
                    {/* Footer Title */}
                    {/* Footer Navbar */}
                    <ul className="flex flex-col gap-y-[15px] capitalize">
                      <li>
                        <Link
                          href="http://www.facebook.com"
                          className="group flex items-center gap-x-3"
                        >
                          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                            <img
                              src="assets/img/th-1/facebook-icon-white.svg"
                              alt="facebook-icon-white"
                              width={14}
                              height={14}
                            />
                          </div>
                          <span className="inline-block flex-1">Facebook</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="http://www.twitter.com"
                          className="group flex items-center gap-x-3"
                        >
                          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                            <img
                              src="assets/img/th-1/twitter-icon-white.svg"
                              alt="twitter-icon-white"
                              width={14}
                              height={14}
                            />
                          </div>
                          <span className="inline-block flex-1">Twitter</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="http://www.instagram.com"
                          className="group flex items-center gap-x-3"
                        >
                          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                            <img
                              src="assets/img/th-1/instagram-icon-white.svg"
                              alt="instagram-icon-white"
                              width={14}
                              height={14}
                            />
                          </div>
                          <span className="inline-block flex-1">Instagram</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="http://www.linkedin.com"
                          className="group flex items-center gap-x-3"
                        >
                          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-white bg-opacity-10 transition-all duration-300 group-hover:bg-colorViolet">
                            <img
                              src="assets/img/th-1/linkedin-icon-white.svg"
                              alt="linkedin-icon-white"
                              width={14}
                              height={14}
                            />
                          </div>
                          <span className="inline-block flex-1">Linkedin</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Footer Widget Item */}
                </div>
                {/* Footer Widgets Block */}
              </div>
              {/* Section Container */}
            </div>
            {/* Footer Bottom */}
          </div>
          {/* Section Spacer */}
        </div>
      </footer>
      {/*...::: Footer-3 Section End :::... */}
    </>
  );
};

export default FooterSection;

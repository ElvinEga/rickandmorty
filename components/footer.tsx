"use client";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  return (
    <>
      <>
        {/* Footer Start */}
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
          {/*end container*/}
          <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container text-center">
              <div className="grid md:grid-cols-2 items-center">
                <div className="md:text-left text-center">
                  <p className="mb-0">
                    © Twisac Devopers. Design with . Tailwind CSS
                  </p>
                </div>
              </div>
              {/*end grid*/}
            </div>
            {/*end container*/}
          </div>
        </footer>
        {/*end footer*/}
      </>
    </>
  );
};

export default FooterSection;

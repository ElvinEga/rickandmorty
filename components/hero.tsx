"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/*...::: Hero Section Start :::... */}
      <section id="hero-section">
        {/* Section Spacer */}
        <div className="pt-28 lg:pt-40 xl:pt-[158px]">
          {/* Section Container */}
          <div className="global-container">
            {/* Hero Content */}
            <div className="grid items-center gap-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
              {/* Section Content Block */}
              <div>
                {/* <h2 className="font-raleway text-5xl md:text-6xl lg:text-7xl xl:text-[100px] xxl:text-[120px]">
                  Leading with Data for a Greener Future
                </h2> */}

                <h2 className="font-raleway text-6xl">
                  Bridging Environmental <br /> Data Gaps to Strengthen
                  Adaptation and Resilience Across Africa and Beyond.
                </h2>
              </div>
              {/* Section Content Block */}
              <div className="jos flex flex-col gap-10 md:gap-[50px]">
                <p className="text-sm font-base leading-[1.33] md:text-xl lg:text-xl">
                  Leveraging Geoinformation and Earth Observation Science, along
                  with AI and IoT, to map out today's global challenges in the
                  fields of ecology, sustainability, and adaptation and
                  mitigation strategies. Our focus is primarily on Africa and
                  extends to other regions, utilizing data-driven approaches.
                </p>
                <Link
                  href="#core"
                  className="button inline-block rounded-[50px] border-2 border-black bg-[#F6F6EB] text-black after:border-colorOrangyRed after:bg-colorOrangyRed hover:text-white"
                >
                  Explore About Us
                </Link>
              </div>
            </div>
            {/* Hero Content */}
          </div>
          {/* Section Container */}
          {/* Hero Image */}
          <div
            className="jos mx-auto mt-12 max-w-[1536px] px-5 md:mt-20"
            data-jos_animation="zoom"
          >
            <img
              src="assets/img/img1.jpg"
              alt="hero-img"
              width={1500}
              height={400}
              className="h-[700px] w-full object-cover"
            />
          </div>
          {/* Hero Image */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Hero Section End :::... */}
    </>
  );
};

export default HeroSection;

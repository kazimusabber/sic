"use client";
import {motion} from "framer-motion";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="hero pt-10 position-relative pb-0">
      <div className="hero-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="shape-4"></div>
      </div>
      <div className="hero-banner-wraper position-absolute w-100 h-100">
        <div className="shape"></div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
              }}
              initial="hidden"
              animate="visible"
              transition={{duration: 0.5, delay: 0.1}}
              className="hero-content text-center text-lg-start"
            >
              <h1 className="mb-6" style={{marginBottom:"5px !important"}}>
                👋 
              </h1>
               <h1 className="mb-6">
                   <span className="text-center">Welcome to <br/>SIC Group</span>
              </h1>

              <p className="mb-md-7 mb-6 w-xxl-85 w-100">
                SIC Group is a dynamic International Company, based in UAE. We provide HR solution, Business solution and Study solution.
              </p>
              <div className="">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg mb-6 mb-lg-0"
                >
                  <span className="position-relative">
                    Say Hello
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5L15 5L15 13.125"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="position-relative">
                    Say Hello
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5L15 5L15 13.125"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <div className="hero-banner position-relative">
              <div className="hero-banner-image text-lg-start text-md-center text-xxl-end">
                <motion.img
                  variants={{
                    hidden: {opacity: 0, x: 75},
                    visible: {opacity: 1, x: 0},
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 0.5, delay: 0.25}}
                  src="/images/hero/sic_group_cover.png"
                  height={675}
                  width={804}
                  className="z-100"
                  alt="hero images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

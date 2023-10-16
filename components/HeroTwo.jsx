"use client";
import {motion} from "framer-motion";
import Link from "next/link";

const HeroTwo = () => {
  return (
    <section className="hero-three pt-10 pt-md-12 position-relative pb-8">
      <div className="hero-three-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
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
              className="hero-content pb-6 text-center text-lg-start"
            >
              <h1 className="mb-6">
                👋 Hey there,
                <br />
                Welcome to SIC Technology
              </h1>
              <p className="mb-6 w-100 w-lg-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg mb-4 mb-sm-0"
                >
                  <span className="position-relative">
                    Say Hello
                    <i className="ph-arrow-up-right" />
                  </span>
                  <span className="position-relative">
                    Say Hello
                    <i className="ph-arrow-up-right" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-5 ms-auto">
            <div className="hero-banner position-relative aos-init aos-animate">
              <div className="hero-banner-image text-lg-start text-md-center text-xxl-end">
                <motion.img
                  variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 0.5, delay: 0.5}}
                  src="/images/hero/hero-image3.png"
                  height={515}
                  width={460}
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

export default HeroTwo;

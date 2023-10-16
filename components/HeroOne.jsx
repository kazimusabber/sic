"use client";
import {motion} from "framer-motion";
import Image from "next/image";

const HeroOne = () => {
  return (
    <>
      <section className="hero-two pt-10 pt-xxl-10 position-relative pb-lg-6 pb-xxl-8">
        <div className="hero-two-shape-wrapper position-absolute w-100 h-100">
          <div className="shape-1" />
          <div className="shape-2" />
          <div className="shape-3" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div
                variants={{
                  hidden: {opacity: 0, x: 75},
                  visible: {opacity: 1, x: 0},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: 0.1}}
                className="hero-two-content pb-6 text-center"
              >
                <h1 className="">
                  👋 Hey there, <br />
                  Welcome to SIC Technology
                </h1>
                <p className="hero-two-desc">
                  We are providing the following services <br />
                  Web Application development, Website development, Apps development <br />
                  Graphic Design, Digital Marketing Solution and Advance SEO service 
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOne;

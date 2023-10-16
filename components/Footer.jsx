import { manrope } from "@/app/layout";
import Link from "next/link";
import {
  BehanceLogo,
  DribbbleLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <footer className="footer text-center text-md-start">
      <div className="footer-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className=" pt-8 pb-6 py-sm-8 pb-xxl-10 pt-xxl-20 text-center">
              <div className=" position-relative">
                <h2 className={`mb-lg-6 mb-5 ${manrope.className}`}>
                  Want to work with us? <br /> Please give us a message.👋📫
                </h2>
                <div className="pt-xxl-4 pt-2">
                  <Link
                    href="/contact"
                    className="btn btn-primary btn-lg me-sm-3 mb-4 mb-sm-0"
                  >
                    <span className=" position-relative">
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
                    <span className=" position-relative">
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
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-wraper">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="footer-description">
                  <ul className="list-unstyled">
                    <li>
                      <Link href="#">
                        <FacebookLogo size={24} weight="bold" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <InstagramLogo size={24} weight="bold" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <TwitterLogo size={24} weight="bold" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <LinkedinLogo size={24} weight="bold" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="footer-widget">
                  <p>©2023 SIC Group, All right reserved. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

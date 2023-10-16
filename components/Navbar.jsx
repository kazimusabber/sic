"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown } from "phosphor-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windscroll = window.scrollY;
      setIsSticky(windscroll >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // submenu handler
  const [collapsed, setCollapsed] = useState(true);
  // Menu dropdown
  const [dropdown, openDropdown] = useState(false);

  return (
    <header>
      <nav
        className={`navbar ${
          pathname === "/homepage-2" ? "nav-two" : ""
        }  navbar-expand-lg position-fixed w-100 zindex-dropdown ${
          isSticky ? "sticky-nav" : ""
        } `}
      >
        <div className="container-lg">
          <Link
            className={`${
              pathname === "/homepage-2"
                ? "navbar-brand  navbar-brand-two"
                : " navbar-brand"
            } `}
            href="/"
          >
            {pathname === "/homepage-2" && !isSticky ? (
              <>
                <Image
                  src="/images/SIC-Logo-2023.png"
                  alt="Jack"
                  height={27}
                  width={160}
                  className="logo"
                />
                <Image
                  src="/images/SIC-Logo-2023.png"
                  alt="Jack"
                  height={27}
                  width={160}
                  className="white-logo"
                />
              </>
            ) : (
              <Image
                src="/images/SIC-Logo-2023.png"
                alt="Jack"
                height={27}
                width={160}
                className="logo"
              />
            )}
          </Link>

          <button
            className={
              collapsed ? "navbar-toggler collapsed p-3" : "navbar-toggler p-3"
            }
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={collapsed ? "false" : "true"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-default">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.125 10H16.875"
                  stroke="#060A11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.125 5H16.875"
                  stroke="#060A11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.125 15H16.875"
                  stroke="#060A11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="navbar-toggler-toggled">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 6.5L6.5 21.5"
                  stroke="#404152"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.5 21.5L6.5 6.5"
                  stroke="#404152"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <div
            className={
              collapsed
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse show"
            }
            id="navbarSupportedContent"
          >
            <ul
              className={`navbar-nav ${
                pathname === "/homepage-2" ? "navbar-two" : ""
              } ms-xxl-6 ms-0`}
            >
              <li className="nav-item dropdown">
                <a
                  className={
                    dropdown
                      ? "nav-link dropdown-toggle"
                      : "nav-link dropdown-toggle show"
                  }
                  onClick={() => {
                    openDropdown(!dropdown);
                  }}
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Home
                  <CaretDown size={16} />
                </a>
                <ul
                  className={dropdown ? "dropdown-menu show" : "dropdown-menu"}
                >
                  <li className="dropdown-megamenu-conatiner ">
                    <ul className="list-unstyled ">
                      <li className="dropdown-megamenu-column-items">
                        <Link href="/" className="dropdown-item">
                          Product Designer
                        </Link>
                      </li>
                      <li className="dropdown-megamenu-column-items">
                        <Link href="/homepage-2" className="dropdown-item">
                          Developer
                        </Link>
                      </li>
                      <li className="dropdown-megamenu-column-items">
                        <Link href="/homepage-3" className="dropdown-item">
                          Graphic Designer
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    pathname === "/project" ? "active" : ""
                  }`}
                  href="/project"
                >
                  Project
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" href="/">
                  Behance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Dribbble
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/blog" ? "active" : ""}`}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item mt-6 mt-lg-0 ms-lg-7 ms-xl-18 ms-xxl-21 ms-sm-0 w-80 w-sm-25 w-md-20">
                <Link href="/contact" className="btn btn-sm btn-links w-100">
                  <span className=" position-relative">
                    Contact
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#060A11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5L15 5L15 13.125"
                        stroke="#060A11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className=" position-relative">
                    Contact
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="#060A11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5L15 5L15 13.125"
                        stroke="#060A11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

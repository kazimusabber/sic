"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsCategory, projectsData } from "@/data/data.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const ProjectOne = () => {
  const [filterData, setFilterData] = useState([...projectsData]);
  const [active, setActive] = useState(0);

  const handleClick = (category) => {
    if (category !== "All project") {
      const data = projectsData.filter((item) =>
        item.category.includes(category)
      );
      setFilterData(data);
      return;
    }
    setFilterData(projectsData);
  };
  return (
    <section className="project projectFilter pb-xxl-14 pb-md-9 pb-6">
      <div className="project-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1" />
        <div className="shape-2" />
        {/* <div className="shape-3 " /> */}
      </div>
      <div className="container">
        {/*==== Srart project Section Header =====*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header text-center">
              <h2>Latest projects</h2>
            </div>
          </div>
        </div>
        {/*==== End project Section Header =====*/}
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="projectFilterButton">
              {projectsCategory?.map((item, index) => (
                <button
                  type="button"
                  key={index}
                  className={index === active ? "is-checked" : ""}
                  onClick={() => {
                    handleClick(item.category);
                    setActive(index);
                  }}
                >
                  {item.category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <motion.div layout className="row">
          {filterData.map((item) => (
            <AnimatePresence key={item.id}>
              <motion.div
                className="projectFilter-items col-md-6"
                key={item.id}
                layout
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                }}
              >
                <Link href={`/project/${item.id}`}>
                  <Image
                    src={item.imgSrc}
                    alt="project-thumbnail"
                    width={500}
                    height={400}
                    className="w-100"
                  />
                </Link>
                <motion.div className="projectFilter-items-content">
                  <Link
                    href={`/project/${item.id}`}
                    className="projectFilter-items-content--title"
                  >
                    <h3
                      dangerouslySetInnerHTML={{ __html: `${item.title}` }}
                    ></h3>
                  </Link>
                  <p>{item.description}</p>
                  <Link
                    href={`/project/${item.id}`}
                    className="btn btn-secondary btn-lg mb-6 mb-lg-0"
                  >
                    <span className="position-relative">
                      Case Study
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 15L15 5"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.875 5L15 5L15 13.125"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="position-relative">
                      Case Study
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
                </motion.div>
              </motion.div>
            </AnimatePresence>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOne;

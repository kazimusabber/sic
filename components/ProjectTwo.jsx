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
    <section className="project projectFilterTwo pb-4">
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
            <div className="projectFilterTwoButton">
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
                className="projectFilterTwo-items col-md-6"
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
                <motion.div className="projectFilterTwo-items-content">
                  <span className="badge">{item.category}</span>
                  <Link
                    href={`/project/${item.id}`}
                    className="projectFilterTwo-items-content--title"
                  >
                    <h3
                      dangerouslySetInnerHTML={{ __html: `${item.title}` }}
                    ></h3>
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

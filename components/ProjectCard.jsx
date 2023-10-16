/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProjectCard = ({id, title, subtitle, imgSrc,link, showMoreProject}) => {
  let col = "";
  if (id === 2 || id === 5) {
    col = "col-lg-8";
  } else if (id === 3 || id === 4) {
    col = "col-lg-4";
  } else {
    col = `col-lg-12 ${showMoreProject ? "d-none" : ""}`;
  }

  // Main Class

  let mainClass = "";

  if (id === 3 || id === 4) {
    mainClass = "project-item-two";
  } else if (id === 2) {
    mainClass = "project-item mb-5";
  } else if (id == 5) {
    mainClass = "project-item bg-light-dark h-100";
  } else {
    mainClass = "project-item one mb-5";
  }

  // Content Class

  let contentClass = "";
  let bannerClass = "";
  if (id === 3 || id === 4) {
    contentClass = "project-item-two-content";
    bannerClass = "project-item-two-banner";
  } else {
    contentClass = "project-item-content";
    bannerClass = "project-item-banner";
  }

  // Button class
  let btnClass = "";
  if (id === 1 || id === 2) {
    btnClass = "btn btn-secondary btn-lg mb-4 mb-sm-0";
  } else {
    btnClass = "btn btn-white btn-lg mb-4 mb-sm-0";
  }

  // title and subtitle class
  let subtitleClass = "";
  let titleClass = "";

  if (id === 3 || id === 4 || id === 5) {
    subtitleClass = "text-white";
    titleClass = "text-white";
  } else {
    subtitleClass = "";
    titleClass = "";
  }

  // Image Size class

  let imgSizeClass = "";
  if (id === 2 || id === 3) {
    imgSizeClass = "";
  } else {
    imgSizeClass = "w-100";
  }

  return (
    <div className={col}>
      <div className={`${mainClass} ${id === 1 && "one"}`}>
        <div className={contentClass}>
          {id === 1 ? (
            <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
          ) : (
            <h5
              className={titleClass}
              dangerouslySetInnerHTML={{__html: title}}
            ></h5>
          )}
          <p className={subtitleClass} dangerouslySetInnerHTML={{__html: subtitle}}></p>
          <Link
            href={`/project/${id}`}
            className={btnClass}
          >
            <span className="position-relative"> View Projects</span>
            <span className="position-relative"> View Projects</span>
          </Link>
        </div>
        <div className={bannerClass}>
          <img
            src={imgSrc}
            className={imgSizeClass}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import Projects from "@/components/Projects";
import { useEffect } from "react";

const ProjectPage = () => {
  useEffect(() => {
    document.title = "Projects || Jack Creative";
  }, []);

  return (
    <section className="project-two pb-lg-4 pt-xxl-14 pt-10">
      <div className="project-two-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1" />
        <div className="shape-2" />
        <div className="shape-3" />
        <div className="shape-4" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header">
              <h2>
                The work we do,
                <br />
                and the people we help.
              </h2>
            </div>
          </div>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default ProjectPage;

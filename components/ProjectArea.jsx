import Projects from "./Projects";

const ProjectArea = () => {
  return (
    <section className="project pb-xxl-14 pb-md-9 pb-6">
      <div className="project-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1" />
        <div className="shape-2" />
        <div className="shape-3 " />
      </div>
      <div className="container">
        {/*==== Srart project Section Header =====*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header ">
              <h2>Latest Updates</h2>
            </div>
          </div>
        </div>
        {/*==== End project Section Header =====*/}
        <Projects />
      </div>
    </section>
  );
};

export default ProjectArea;

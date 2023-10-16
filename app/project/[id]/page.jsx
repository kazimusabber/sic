import { projectsData } from "@/data/data";
import Image from "next/image";

export const metadata = {
  title: "Project Details || Jack Creative",
  description: "Nextjs portfolio template",
};

const page = ({ params }) => {
  const post = projectsData.find((project) => project.id === +params.id);
  const markup = { __html: `${post.title}` };
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-shape-wrapper position-absolute w-100 h-100">
          <div className="shape-1" />
          <div className="shape-2" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-heading">
                <div className="page-heading-title">
                  <h1 dangerouslySetInnerHTML={markup}></h1>
                </div>
                <div className="page-heading-content d-sm-flex justify-content-center justify-content-lg-start">
                  <div className="me-xxl-5 me-lg-8">
                    <div className="item">
                      <span>Client</span>
                      <span className="title">Fashion Blog</span>
                    </div>
                    <div className="item">
                      <span>Time</span>
                      <span className="title">25 Agu - 30 Sep 2021</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="item">
                      <span>Task</span>
                      <span className="title">{post.subtitle}</span>
                    </div>
                    <div className="item">
                      <span>Work Link</span>
                      <span className="title">
                        <a href="#">Check the website</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project-desc">
        <div className="col-lg-12">
          <div className="banner">
            <Image
              src="/images/project/banner-1.png"
              alt="Feature Image"
              height={600}
              width={1170}
              className="mx-auto d-block"
            />
          </div>
        </div>
        <div className="project-feature-photo"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="project-desc-header">
                <h3 className="">Brand Overview</h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="project-desc-header">
                <h3 className="">Project Goals</h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 me-auto">
              <div className="project-desc-content">
                <h3>Problems</h3>
                <ol className="list-styled">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                  <li>
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  </li>
                  <li> ad minim veniam, quis nostrud exercitation ullamco </li>
                  <li>
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                  <li>
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.,
                    <br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="project-desc-content">
                <h3>Solutions</h3>
                <ol className="list-styled">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                  <li>
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  </li>
                  <li> ad minim veniam, quis nostrud exercitation ullamco </li>
                  <li>
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </li>
                  <li>
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.,
                    <br />
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="banner">
                <Image
                  src="/images/project/banner-1.png"
                  alt="Feature Image"
                  height={600}
                  width={1170}
                  className="mx-auto d-block"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10">
              <div className="project-desc-header">
                <h3 className="">The Approach</h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="pt-22">
                  <Image
                    src="/images/project/banner-2.png"
                    alt="Feature Image"
                    height={600}
                    width={1170}
                    className="mx-auto d-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project-related pb-0 pb-lg-8 pb-xxl-11">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="section-header">
                <h2>All Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="project-related-item">
                <Image
                  src="/images/project/project-7.png"
                  alt="Feature Image"
                  height={2722}
                  width={570}
                  className="mx-auto d-block w-100 h-100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-related-item">
                <Image
                  src="/images/project/project-8.png"
                  alt="Feature Image"
                  height={2722}
                  width={570}
                  className="mx-auto d-block w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

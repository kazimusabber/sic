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
                      <span>Company</span>
                      <span className="title">{post.company}</span>
                    </div>
                  </div>
                  <div className="">
                    <div className="item">
                      <span>Job Category</span>
                      <span className="title">{post.subtitle}</span>
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
              src={post.imgSrc}
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
                <h3 className="mb-2">{post.joboverview}</h3>
                <p className="">
                  {post.joboverviewdecription}
                </p>
              </div>
              <div className="project-desc-header">
                <h3 className="mb-2">{post.jobbenefit}</h3>
                <p className="">
                  {post.jobbenefitdescription}
                </p>
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
                <h2 className="mb-2">{post.relatedProjectTitle}</h2>
                <p>
                  {post.relatedProjectSubtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="project-related-item">
                <Image
                  src="/images/project/polandvisa.jpg"
                  alt="Feature Image"
                  height={570}
                  width={570}
                  className="mx-auto d-block w-100 h-100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-related-item">
                <Image
                  src="/images/project/lithuaniavisa.jpg"
                  alt="Feature Image"
                  height={570}
                  width={570}
                  className="mx-auto d-block w-100 h-100"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="project-related-item">
                <Image
                  src="/images/project/saudivisa.jpg"
                  alt="Feature Image"
                  height={570}
                  width={570}
                  className="mx-auto d-block w-100 h-100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-related-item">
                <Image
                  src="/images/project/dubaiworkvisa2.jpg"
                  alt="Feature Image"
                  height={570}
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

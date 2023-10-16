import Counter from "@/components/Counter";
import FeedBack from "@/components/FeedBack";
import HeroOne from "@/components/HeroOne";
import ProjectOne from "@/components/ProjectOne";
import Image from "next/image";
import ItServices from "@/components/ItServices";
export const metadata = {
  title: "JackCreative Developer | Nextjs portfolio template",
  description: "Nextjs portfolio template",
};
const page = () => {
  return (
    <>
      <HeroOne />
      <section className="counter-up pb-5">
        <div className="container">
          <div className="row">
            <Counter />
          </div>
        </div>
      </section>
      <ItServices />
      <ProjectOne />
      <section className="resume-two pt-xxl-7 pt-4">
        <div className="resume-two-shape-wrapper position-absolute w-100 h-100">
          <div className="shape-1" />
          <div className="shape-2" />
          <div className="shape-3" />
          <div className="shape-4" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="section-header">
                  <h2>Experiences 💪</h2>
                </div>
                <div className="card-body">
                  {/*==== Srart experiencEducation =====*/}
                  <div className="experiencEducation">
                    {/* Srart experience */}
                    <div className="experience">
                      <div className="title">
                        <h5>Work Experience</h5>
                      </div>
                      <div className="content">
                        <h4>Static Mania</h4>
                        <p>
                          Lead Designer <br />
                          August 2018 - December 2019
                        </p>
                      </div>
                      <div className="content">
                        <h4>Exclusive Arts Organaization</h4>
                        <p>
                          Designer Officer <br />
                          December 2019 - Current
                        </p>
                      </div>
                    </div>
                    {/* Srart education */}
                    <div className="education">
                      <div className="title">
                        <h5>Education</h5>
                      </div>
                      <div className="content">
                        <h4>Graphic Arts Institute</h4>
                        <p>
                          MS • Information Design &amp; Technology <br />
                          2016 – 2017
                        </p>
                      </div>
                      <div className="content">
                        <h4>Florida Gulf Coast University</h4>
                        <p>
                          BA • Psychology <br />
                          2014 – 2015
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ==== End experiencEducation =====*/}
                  {/* ==== Srart freelance =====*/}
                  <div className="freelance">
                    <div className="title">
                      <h5>Freelance Clients</h5>
                    </div>
                    <div className="freelance-wrapper">
                      <div className="item">
                        <Image
                          src="/images/resume/client-logo-5.svg"
                          alt="client"
                          height={33}
                          width={162}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src="/images/resume/client-logo-2.svg"
                          alt="client"
                          height={33}
                          width={162}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src="/images/resume/client-logo-3.svg"
                          alt="client"
                          height={33}
                          width={162}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src="/images/resume/client-logo-4.svg"
                          alt="client"
                          height={33}
                          width={162}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src="/images/resume/client-logo-6.svg"
                          alt="client"
                          height={33}
                          width={162}
                        />
                      </div>
                      <div className="item">
                        <Image
                          src="/images/resume/client-logo-8.svg"
                          alt="client"
                          height={33}
                          width={162}
                        />
                      </div>
                    </div>
                  </div>
                  {/*==== End freelance =====*/}
                  {/*==== Start skillsTools =====*/}
                  <div className="skillsTools pt-2">
                    {/* Start skills */}
                    <div className="skills">
                      <div className="title">
                        <h5>Skills</h5>
                      </div>
                      <div className="text-lg-start">
                        <div className="content mb-6 mb-lg-0">
                          <ul className="list-unstyled">
                            <li>HTML, CSS</li>
                            <li>Front-end Development</li>
                            <li>Back-End Development</li>
                            <li>Java Script, PHP</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Start tools */}
                    <div className="tools">
                      <div className="title">
                        <h5>Tools I use every day</h5>
                      </div>

                      <div className="tools-wrapper">
                        <div className="item">
                          <Image
                            src="/images/resume/client-logo-15.svg"
                            alt="client"
                            height={60}
                            width={61}
                          />
                        </div>
                        <div className="item">
                          <Image
                            src="/images/resume/client-logo-16.svg"
                            alt="client"
                            height={60}
                            width={61}
                          />
                        </div>
                        <div className="item">
                          <Image
                            src="/images/resume/client-logo-17.svg"
                            alt="client"
                            height={60}
                            width={61}
                          />
                        </div>
                        <div className="item">
                          <Image
                            src="/images/resume/client-logo-18.svg"
                            alt="client"
                            height={60}
                            width={61}
                          />
                        </div>
                        <div className="item">
                          <Image
                            src="/images/resume/client-logo-19.svg"
                            alt="client"
                            height={60}
                            width={61}
                          />
                        </div>
                        <div className="item">
                          <Image
                            src="/images/resume/client-logo-20.svg"
                            alt="client"
                            height={60}
                            width={61}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ==== End skills Tools =====*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="feedback-two">
        <FeedBack />
      </div>
    </>
  );
};

export default page;

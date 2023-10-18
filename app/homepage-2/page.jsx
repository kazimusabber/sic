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
                  <h2>Our Team 💪</h2>
                </div>
                <div className="card-body">
                  {/*==== Srart experiencEducation =====*/}
                  <div className="experiencEducation">
                    {/* Srart experience */}
                    <div className="experience" style={{width:"33%"}}>
                      <div className="title">
                        <h5>Analyst Team</h5>
                      </div>
                      <div className="content">
                        <h4>Md. Aminul Islam</h4>
                        <p>
                          Lead Data Analyst <br />
                          August 2018 - Present
                        </p>
                      </div>
                      <div className="content">
                        <h4>Faruk Khan</h4>
                        <p>
                          Sr. Software Engineer <br />
                          December 2018 - Present
                        </p>
                      </div>
                      <div className="content">
                        <h4>Zaman Mantaka</h4>
                        <p>
                          Software Engineer <br />
                          December 2018 - Present
                        </p>
                      </div>
                      
                    </div>
                    {/* Srart education */}
                    <div className="education" style={{width:"33%"}}>
                      <div className="title">
                        <h5>Development Team</h5>
                      </div>
                      <div className="content">
                        <h4>Kazi Musabber Hossain</h4>
                        <p>
                          Sr. Software Developer <br />
                          December 2018 - Present
                        </p>
                      </div>
                      <div className="content">
                        <h4>Farhad Hossain</h4>
                        <p>
                          Sr. Software Developer <br />
                          December 2018 - Present
                        </p>
                      </div>
                      <div className="content">
                        <h4>Nahid Hasan</h4>
                        <p>
                          Software Tester <br />
                          December 2018 - Present
                        </p>
                      </div>
                    </div>

                    {/* Srart education */}
                    <div className="education" style={{width:"34%"}}>
                      <div className="title">
                        <h5>Digital Marketing Team</h5>
                      </div>
                      <div className="content">
                        <h4>Arefin Sajib</h4>
                        <p>
                          SEO Specialist <br />
                          December 2018 - Present
                        </p>
                      </div>
                      <div className="content">
                        <h4>Jaker Hossain</h4>
                        <p>
                          Sr. Graphics Designer <br />
                          December 2018 - Present
                        </p>
                      </div>
                      <div className="content">
                        <h4>Farhana Prova</h4>
                        <p>
                          Marketing officer <br />
                          December 2018 - Present
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ==== End experiencEducation =====*/}
                  {/* ==== Srart freelance =====*/}
                  <div className="freelance">
                    <div className="title mt-7">
                      <h2 style={{color:"#ffffff"}}>Our Clients</h2>
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
                            <li>HTML, CSS, Bootstrap, Java Script, React js, Vue js</li>
                            <li>Python, Php</li>
                            <li>Django, Laravel, Node js</li>
                            <li> Adobe Photoshop, Figma, Adobe Illustrator, Canva</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Start tools */}
                    <div className="tools">
                      <div className="title">
                        <h5>Tools we use every day</h5>
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

import Image from "next/image";
import React from "react";
import Link from "next/link";
const Resume = ({ title = "Location" }) => {
  return (
    <section className="resume pt-9 pt-xxl-14 pb-xxl-10 pb-lg-8 pt-md-9 pb-6">
      <div className="resume-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1" />
        <div className="shape-2" />
        <div className="shape-3" />
        <div className="shape-4" />
        <div className="shape-5" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="section-header">
                <h2>{title}</h2>
              </div>
              <div className="card-body">
                <div className="experiencEducation">
                  <div className="experience">
                    <div className="title">
                      <h5>UAE Office</h5>
                    </div>
                    <div className="content">
                      <h4>SPC Free Zone</h4>
                      <p>
                        Al Zahia Area - Sheikh Mohammed Bin Zayed Rd - Sharjah - United Arab Emirates
                      </p>
                    </div>
                    <div className="content">
                      <h4>Contact us</h4>
                      <p>
                          <Image
                        src="/images/icon/phone.svg"
                        alt="nothing"
                        height={20}
                        width={20}
                      /> +971522482409<br />
                       

                          <Image
                        src="/images/icon/envelope-paper.svg"
                        alt="nothing"
                        height={20}
                        width={20}
                      />   info@sicgroup.ae 
                      </p>
                    </div>
                  </div>

                  <div className="education">
                    <div className="title">
                      <h5>Bangladesh Office</h5>
                    </div>
                    <div className="content">
                      <h4>Rafflesia Tower</h4>
                      <p>
                        House 55, Road 9A, <br/> 
                        Dhanmondi, Dhaka 1209
                      </p>
                    </div>
                    <div className="content">
                      <h4>Contact us</h4>
                      <p>
                          <Image
                        src="/images/icon/phone.svg"
                        alt="nothing"
                        height={20}
                        width={20}
                      /> +8801988890099<br />
                       

                          <Image
                        src="/images/icon/envelope-paper.svg"
                        alt="nothing"
                        height={20}
                        width={20}
                      />   info@sic.com.bd 
                      </p>
                    </div>
                  </div>
                </div>

                <div className="freelance">
                  <div className="title">
                    <h5>Our Clients</h5>
                  </div>
                  <div className="freelance-wrapper">
                    <div className="item">
                      <Image
                        src="/images/client/avis.png"
                        alt="client"
                        height={35}
                        width={120}
                      />
                    </div>
                    <div className="item">
                      <Image
                        src="/images/client/bantel.png"
                        alt="client"
                        height={35}
                        width={120}
                      />
                    </div>
                    <div className="item">
                      <Image
                        src="/images/client/cellucom.png"
                        alt="client"
                        height={50}
                        width={120}
                      />
                    </div>
                    <div className="item">
                      <Image
                        src="/images/client/nam.png"
                        alt="client"
                        height={60}
                        width={120}
                      />
                    </div>
                    <div className="item">
                      <Image
                        src="/images/client/nextgen.png"
                        alt="client"
                        height={60}
                        width={120}
                      />
                    </div>
                  </div>
                </div>

                <div className="skillsTools pt-2">

                  <div className="tools" style={{width:"100%"}}>
                    <div className="title">
                      <h5>Follow us in Social Media</h5>
                    </div>
                    <div className="tools-wrapper">
                      <div className="item" style={{textAlign:"center",width:"100%"}}>
                        <Link href="#">
                          <Image
                            src="/images/icon/facebook.png"
                            alt="client"
                            height={35}
                            width={35}
                          />
                        </Link>
                      </div>
                      <div className="item" style={{textAlign:"center"}}>
                        <Link href="#"> 
                          <Image
                            src="/images/icon/instagram.png"
                            alt="client"
                            height={35}
                            width={35}
                          />
                        </Link>
                      </div>
                      <div className="item" style={{textAlign:"center"}}>
                        <Link href="#"> 
                          <Image
                            src="/images/icon/linkedin.png"
                            alt="client"
                            height={35}
                            width={35}
                          />
                        </Link>
                      </div>
                      <div className="item" style={{textAlign:"center"}}>
                        <Link href="#">
                          <Image
                            src="/images/icon/twitter.png"
                            alt="client"
                            height={35}
                            width={35}
                          />
                        </Link>
                      </div>
                      <div className="item" style={{textAlign:"center"}}>
                        <Link href="#">
                          <Image
                            src="/images/icon/youtube.png"
                            alt="client"
                            height={30}
                            width={40}
                          />
                        </Link>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

import Image from "next/image";

export const metadata = {
  title: "Contact Us | JackCreative",
};

const Contact = () => {
  return (
    <section className="contact-form pt-8 pt-xxl-15 pb-xxl-7 pb-0">
      <div className="contact-form-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="shape-4"></div>
        <div className="shape-5"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header">
              <h2>
                Let’s create <br /> progress together
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <form className="row">
              <h3>
                Have a project or question? <br /> Just send me a message.{" "}
              </h3>
              <div className="col-md-12 col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="First Name "
                />
              </div>
              <div className="col-md-12 col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-md-12 col-lg-12">
                <input
                  type="text"
                  className="form-control"
                  id="goal"
                  placeholder="Company or Organization"
                />
              </div>
              <div className="col-md-12 col-lg-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue="1"
                >
                  <option value="1">You can reach me at</option>
                  <option value="2">Branding</option>
                  <option value="3">Product Design</option>
                  <option value="4">Web Design</option>
                  <option value="5">Mobile App</option>
                </select>
              </div>
              <div className="col-md-12 col-lg-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue="1"
                >
                  <option value="1">What’s Projects</option>
                  <option value="2">Branding</option>
                  <option value="3">Product Design</option>
                  <option value="4">Web Design</option>
                  <option value="5">Mobile App</option>
                </select>
              </div>
              <div className="col-md-12 col-lg-12">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue="0"
                >
                  <option value={0}>Your Budget</option>
                  <option value={1}>Branding</option>
                  <option value={2}>Product Design</option>
                  <option value={3}>Web Design</option>
                  <option value={3}>Mobile App</option>
                </select>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  id="floatingTextarea2"
                  placeholder="Any Message"
                  rows={8}
                  spellCheck="false"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-lg mt-7 ">
                  <span className=" position-relative">
                    Send message
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5L15 5L15 13.125"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className=" position-relative">
                    Send message
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 15L15 5"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 5L15 5L15 13.125"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="contact-form-widget">
              <Image
                src="/images/contact/icon.svg"
                alt="icon"
                height={40}
                width={40}
              />
              <h6>
                Your data remains confidential <br />
                and will not be passed to third parties
              </h6>
              <ul className="list-unstyled">
                <li>
                  <span>Email</span>
                  <a href="mailto:info@staticmania.com">info@staticmania.com</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href="tel:+8855545554 ">+88 5554 5554 </a>
                </li>
                <li>
                  <span>Dribbble Link</span>
                  <a href="#">dribbble.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

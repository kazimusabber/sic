import Image from "next/image";
import Link from "next/link";

const notFound = () => {
  return (
    <section className="error py-xxl-12 py-lg-9 py-10 py-sm-6">
      <div className="error-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-content text-center">
              <div className="logo mb-7">
                <Link className="navbar-brand" href="/">
                  <Image
                    src="/images/logo.svg"
                    alt="Jack"
                    height={27}
                    width={160}
                  />
                </Link>
              </div>

              <Image
                src="/images/404/error.png"
                alt="error-image"
                height={352}
                width={550}
              />

              <h3 className="my-5">Something is wrong!</h3>
              <Link href="/" className="btn btn-lg btn-primary">
                <span className="position-relative">
                  Go to Home
                  <i className="ph-arrow-up-right"></i>
                </span>
                <span className="position-relative">
                  Go to Home
                  <i className="ph-arrow-up-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default notFound;

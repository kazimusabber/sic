import BlogPagination from "@/components/BlogPagination";
import getMarkDownData from "@/utils/getMarkdownData";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | JackCreative",
  description: "Nextjs portfolio template",
};

const BlogPage = () => {
  const [featuredBlog, ...restOfTheBlog] = getMarkDownData("data/blog");

  return (
    <section className="blog pt-xxl-17 pt-lg-10 pt-9 pb-xxl-9">
      <div className="blog-shape-wrapper position-absolute w-100 h-100">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
        <div className="shape-4"></div>
        <div className="shape-5"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header pb-xxl-9 mb-xxl-4 pb-7 pt-xxl-4 pt-md-6 position-relative">
              <h2>
                Blog and <br /> Some Project Case
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <article className="card flex-lg-row">
              <div className="blog-post-item-thumb">
                <Link href={`/blog/${featuredBlog.slug}`}>
                  <Image
                    height={348}
                    width={555}
                    alt={featuredBlog.data.title}
                    src={featuredBlog.data.thumbnail}
                    className="w-100"
                  />
                </Link>
              </div>
              <div className="blog-post-content">
                <div className="blog-post-meta mb-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link href={`/taxonomy/${featuredBlog.data.category}`}>
                        {featuredBlog.data.category}
                      </Link>
                    </li>
                    <li>
                      <span className="ms-2">{featuredBlog.data.date}</span>
                    </li>
                  </ul>
                </div>
                <div className="blog-post-body">
                  <div className="blog-post-body-title">
                    <Link href={`/blog/${featuredBlog.slug}`}>
                      <h2>{featuredBlog.data.title}</h2>
                    </Link>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="row recent-blog">
          <div className="col-lg-12">
            <div className="section-header pt-xxl-9 pt-7 pb-6">
              <h2 className="recent-blog-title">Recent Blog</h2>
            </div>
          </div>
          <BlogPagination blogs={restOfTheBlog} />
        </div>
      </div>
    </section>
  );
};

export default BlogPage;

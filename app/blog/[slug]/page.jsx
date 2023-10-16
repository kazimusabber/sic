import BlogPost from "@/components/BlogPost";
import getMarkDownContent from "@/utils/getMarkDownContent";
import getMarkDownData from "@/utils/getMarkdownData";
import Link from "next/link";
import Markdown from "react-markdown";
import RelatedPost from "./relatedPost";

export const metadata = {
  title: "Blog Deatils | JackCreative",
};

export const generateStaticParams = async () => {
  const posts = getMarkDownData("data/blog/");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostDetails = (props) => {
  const folder = "data/blog/";
  const slug = props.params.slug;
  const { content, data } = getMarkDownContent(folder, slug);

  // get related blog posts

  const allThePosts = getMarkDownData("data/blog/");
  const relatedPosts = allThePosts.filter(
    (post) => post.category === data.category
  );

  return (
    <>
      <div className="blog-details  pt-8 pt-lg-10 pt-xl-12 pt-xxl-16">
        <div className="blog-details-shape-wrapper position-absolute w-100 h-100">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
        </div>
        <div className="container">
          <div className="col-lg-12">
            <article className="card">
              <div className="blog-des-hero">
                <h2>{data.title}</h2>
                <div className="blog-des-hero-content d-sm-flex">
                  <div className="me-xxl-13 me-sm-8 me-0 mb-5">
                    <span>Category</span>
                    <Link href={`/taxonomy/${data.category}`}>
                      <span className="title">{data.category}</span>
                    </Link>
                  </div>
                  <div className="">
                    <span>Date</span>
                    <span className="title">{data.date}</span>
                  </div>
                </div>
              </div>
              <Markdown>{content}</Markdown>
            </article>
          </div>
        </div>
      </div>
      <section className="related-blog pt-xxl-19 pt-0 pb-xxl-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="mb-7 text-lg-start text-center">Recent Blog</h2>
            </div>
          </div>
          <RelatedPost relatedPosts={relatedPosts} />
        </div>
      </section>
    </>
  );
};

export default PostDetails;

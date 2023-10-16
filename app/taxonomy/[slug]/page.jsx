import getMarkDownData from "@/utils/getMarkdownData";
import TaxonomyBlog from "./taxonomyBlog";

export const generateStaticParams = async () => {
  const posts = getMarkDownData("data/blog/");
  const categories = posts.map((post) => post.category);
  const uniqueCategory = [...new Set(categories)];
  return uniqueCategory.map((category) => ({
    slug: category,
  }));
};

export const metadata = {
  title: "Blog Category | JackCreative",
  description: "Nextjs portfolio template",
};

const page = ({ params }) => {
  const posts = getMarkDownData("data/blog/");
  const relatedPosts = posts.filter((post) => post.category === params.slug);

  return <TaxonomyBlog posts={relatedPosts} slug={params.slug} />;
};

export default page;

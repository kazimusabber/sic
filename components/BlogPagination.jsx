"use client";
import { useState } from "react";
import BlogPost from "./BlogPost";
import { ArrowDown } from "phosphor-react";

const BlogPagination = ({ blogs }) => {
  const itemsPerPage = 6;
  const totalPage = Math.ceil(blogs.length / itemsPerPage);
  const [page, setPage] = useState(1);

  const paginateData = () => {
    return blogs.slice(0, page * itemsPerPage);
  };

  const currentPageData = paginateData();

  return (
    <>
      {currentPageData.map((blog) => (
        <BlogPost key={blog.data.title} {...blog} />
      ))}
      <div
        className={`d-flex justify-content-center ${
          page === totalPage ? "d-none" : ""
        }`}
      >
        <button
          onClick={() => setPage(page + 1)}
          className="load-more-btn mt-xxl-10 mt-lg-9 mt-md-7 mt-6 border-none"
        >
          <ArrowDown /> Load More
        </button>
      </div>
    </>
  );
};

export default BlogPagination;

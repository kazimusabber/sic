"use client";
import { useState } from "react";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import { ArrowLeft, ArrowRight, CaretDoubleRight } from "phosphor-react";

const TaxonomyBlog = ({ posts, slug }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPage = Math.ceil(posts.length / itemsPerPage);
  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return posts.slice(startIndex, endIndex);
  };

  const currentPageData = paginateData();

  return (
    <>
      <div className="taxonomy pb-xxl-9 pb-0">
        <div className="taxonomy-shape-wrapper position-absolute w-100 h-100">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
          <div className="shape-4"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-hadding text-center text-lg-start">
                <Link href="/blog">Blog</Link>
                <span>{slug}</span>
              </div>
            </div>
            {currentPageData.map((post) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </div>
      <div className="pagination pt-xxl-4 pt-lg-8 pt-4 pt-md-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item navigate">
                    <button
                      className={`page-link ${
                        currentPage === totalPage ? "d-none" : ""
                      }`}
                      disabled={currentPage === totalPage}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      <span className="me-3">Next Page</span>
                      <ArrowRight size={24} color="#404152" />
                    </button>
                    <button
                      className={`page-link ${
                        currentPage < totalPage ? "d-none" : ""
                      }`}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      <ArrowLeft size={24} color="#404152" />
                      <span className="ms-3">Previous Page</span>
                    </button>
                  </li>

                  {[...Array(totalPage)].map((_, index) => (
                    <li
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      key={index + 1}
                    >
                      <button
                        onClick={() => setCurrentPage(index + 1)}
                        className="page-link"
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}

                  <li className="page-item">
                    <button
                      className="page-link"
                      disabled={currentPage === totalPage}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      <CaretDoubleRight size={24} color="#404152" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxonomyBlog;

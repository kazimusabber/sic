"use client";

import { useState } from "react";
import BlogPost from "@/components/BlogPost";
import { ArrowDown } from "phosphor-react";

const RelatedPost = ({ relatedPosts }) => {
  const [morePosts, setMorePosts] = useState(3);
  const handlePosts = () => {
    if (relatedPosts.length > morePosts) {
      setMorePosts(morePosts + 3);
    }
  };
  return (
    <>
      <div className="row">
        {relatedPosts?.slice(0, morePosts).map((blog) => (
          <BlogPost key={blog.data.title} {...blog} />
        ))}
      </div>
      <div className="row">
        <div className="d-flex justify-content-center">
          <button
            disabled={relatedPosts.length <= morePosts}
            onClick={handlePosts}
            className={`load-more border-0 bg-transparent mt-xxl-9 mt-md-8 mt-4 ${
              relatedPosts.length <= morePosts ? "d-none" : ""
            }`}
          >
            <ArrowDown size={32} weight="thin" />
            More Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default RelatedPost;

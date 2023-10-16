"use client";
import Image from "next/image";
import Link from "next/link";

const BlogPost = (props) => {
  const { title, date, thumbnail, category } = props.data;
  return (
    <div className="col-md-6 col-lg-4">
      <article className="card ">
        <div className="card-img">
          <Link href={`/blog/${props.slug}`}>
            <Image
              src={thumbnail}
              height={266}
              width={362}
              alt={title}
              className="w-100"
            />
          </Link>
        </div>
        <div className="card-body">
          <div className="blog-post-meta ">
            <ul className="list-unstyled">
              <li>
                <Link href={`/taxonomy/${category}`}>{category}</Link>
              </li>
              <li>
                <span className="ms-2">{date}</span>
              </li>
            </ul>
          </div>
          <Link href={`/blog/${props.slug}`}>
            <h5>{title}</h5>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

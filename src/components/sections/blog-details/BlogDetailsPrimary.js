"use client";
import BlogSidebar from "@/components/shared/sidebars/BlogSidebar";
import getAllBlogs from "@/libs/getAllBlogs";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import blogDetailsImage1 from "@/assets/img/blog/blog-details/1.jpg";
import servceImage31 from "@/assets/img/service/31.jpg";
import servceImage32 from "@/assets/img/service/32.jpg";
import makePath from "@/libs/makePath";
import BlogCard4 from "@/components/shared/cards/BlogCard4";
import CommonContext from "@/providers/CommonContext";
import useSearch from "@/hooks/useSearch";
import modifyNumber from "@/libs/modifyNumber";
import countCommentLength from "@/libs/countCommentLength";
import sliceText from "@/libs/sliceText";

const BlogDetailsPrimary = () => {
  const { id: currentId } = useParams();
  const blogs = getAllBlogs();
  // get searched blogs
  const {
    searchedItems,
    isShowSearch,
    handleSearch,
    handleSearchString,
    startSearch,
    closeSearch,
    isShowQuickSearchResult,
    setIsShowQuickSearchResult,
  } = useSearch(blogs, `/blogs`);

  const blog = blogs?.find(({ id }) => id === parseInt(currentId));
  const {
    title,
    image,
    id,
    publishDate,
    desc,
    author,
    category,
    comments,
    tags,
    fullContent,
  } = blog ? blog : {};
  const pervBlog = blogs.find(({ id }) => id === parseInt(currentId) - 1);
  const nextBlog = blogs.find(({ id }) => id === parseInt(currentId) + 1);
  const { title: prevTitle, id: prevId } = pervBlog ? pervBlog : {};
  const { title: nextTitle, id: nextId } = nextBlog ? nextBlog : {};
  const relatedBlogs = blogs
    ?.filter(({ author: author2 }) => author2?.name === author?.name)
    ?.slice(0, 2);
  const totalBlogs = blogs?.length;
  const commentsLength = countCommentLength(comments);
  const totalComments = modifyNumber(commentsLength);
  return (
    <div className="ltn__page-details-area ltn__blog-details-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
              <div className="ltn__page-details-inner ltn__blog-details-inner">
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-category">
                      <Link href={`/blogs?category=${makePath(category)}`}>
                        {category}
                      </Link>
                    </li>
                  </ul>
                </div>
                <h2 className="ltn__blog-title">{title}</h2>
                <div className="ltn__blog-meta">
                  <ul>
                    <li className="ltn__blog-author">
                      <Link href={`/blogs?author=${makePath(author?.name)}`}>
                        <Image src={author?.image} alt="#" />
                        By: {author?.name}
                      </Link>
                    </li>
                    <li className="ltn__blog-date">
                      <i className="far fa-calendar-alt"></i>
                      {publishDate}
                    </li>
                    {/* <li>
                      <Link href="#comments">
                        <i className="far fa-comments"></i>
                        {totalComments} Comments
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div dangerouslySetInnerHTML={{ __html: fullContent }} />
              </div>
              {/* <!-- blog-tags-social-media --> */}
              <div className="ltn__blog-tags-social-media mt-80 row">
                {tags?.length ? (
                  <div className="ltn__tagcloud-widget col-lg-8">
                    <h4>Releted Tags</h4>
                    <ul>
                      {tags?.map((tag, idx) => (
                        <li key={idx}>
                          <Link href={`/blogs?tag=${makePath(tag)}`}>
                            {tag}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                <div className="ltn__social-media text-right text-end col-lg-4">
                  <h4>Social Share</h4>
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://X.com" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com" title="Linkedin">
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://www.youtube.com" title="Youtube">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              {/* <!-- prev-next-btn --> */}
              <div className="ltn__prev-next-btn row mb-50">
                <div
                  className="blog-prev col-lg-6"
                  style={{ visibility: !prevId ? "hidden" : "visible" }}
                >
                  <h6>Prev Post</h6>
                  <h3 className="ltn__blog-title">
                    <Link href={`/blogs/${prevId ? prevId : 1}`}>
                      {prevTitle
                        ? sliceText(prevTitle, 12, true)
                        : "Tips On Minimalist"}
                    </Link>
                  </h3>
                </div>
                <div
                  className="blog-prev blog-next text-right text-end col-lg-6"
                  style={{
                    visibility: !nextId ? "hidden" : "visible",
                  }}
                >
                  <h6>Next Post</h6>
                  <h3 className="ltn__blog-title">
                    <Link href={`/blogs/${nextId ? nextId : totalBlogs}`}>
                      {nextTitle
                        ? sliceText(nextTitle, 12, true)
                        : "Less Is More"}
                    </Link>
                  </h3>
                </div>
              </div>
              <hr />
              {/* <!-- related-post --> */}
              {relatedBlogs?.length ? (
                <div className="related-post-area mb-50">
                  <h4 className="title-2">Related Post</h4>
                  <div className="row">
                    {relatedBlogs?.map((blog, idx) => (
                      <div key={idx} className="col-md-6">
                        <BlogCard4 blog={blog} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* <!-- comment-area --> */}
              <div className="ltn__comment-area mb-50" id="comments">
                <div className="ltn-author-introducing clearfix">
                  <div className="author-img">
                    <Image src={author?.image} alt="Author Image" />
                  </div>
                  <div className="author-info">
                    <h6>Written by</h6>
                    <h1>{author?.name}</h1>
                  </div>
                </div>
                {/* Comments section hidden - not needed for fitness equipment content */}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPrimary;

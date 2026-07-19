'use client';

import { IBlogPost } from '@/interface';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCard from '../shared/card/BlogCard';
import Pagination from '../shared/Pagination';

interface BlogPaginationWrapperProps {
  blogs: IBlogPost[];
}

const BlogPaginationWrapper = ({ blogs }: BlogPaginationWrapperProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 1510, behavior: 'smooth' });
  };

  return (
    <>
      {/* Blog grid */}
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
        {currentBlogs?.map((blog, index) => (
          <RevealAnimation key={blog?.slug} delay={0.3 + index * 0.1}>
            <div>
              <BlogCard blog={blog} />
            </div>
          </RevealAnimation>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-14">
          <RevealAnimation delay={0.6}>
            <div>
              <Pagination
                totalItems={blogs.length}
                itemsPerPage={blogsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                className="mt-14"
              />
            </div>
          </RevealAnimation>
        </div>
      )}
    </>
  );
};

export default BlogPaginationWrapper;

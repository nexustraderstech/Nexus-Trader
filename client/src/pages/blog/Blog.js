import React from 'react';
import './Blog.scss';
import BlogCard from '../../components/blogs/BlogCard';

const Blog = () => {
  return (
    <div className='blog-wrapper'>
      <h3 className='blog-page-title'>Blog</h3>
      <div className='grid'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;

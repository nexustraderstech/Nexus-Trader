import React from 'react';
import './blogs.scss';
import BlogCard from '../../components/blogs/BlogCard';
import { selectIsAdmin } from '../../app/reducers/loginSlice';
import { useSelector } from 'react-redux';

const Blog = () => {
  const isAdmin = useSelector(() => selectIsAdmin);
  console.log('isAdmin:', isAdmin);
  return (
    <div className='blog-wrapper'>
      <h3 className='blog-page-title'>Blog</h3>
      <h4 className='blog-page-title'>{isAdmin ? 'Admin' : 'Not Admin'}</h4>
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

import React from 'react';
import Card from '../Card/Card';
import classNames from 'classnames/bind';
import shortid from 'shortid';
import blog_posts from '../../blog_posts.json';
import styles from './Home.css';

const cx = classNames.bind(styles);

const BlogPosts = () => {
  const blogList = [];
  blog_posts.map((blog) => {
    blogList.push(
      <Card 
        key={shortid.generate()}
        image={blog.image}
        headline={blog.headline}
        subhead={blog.subhead}
        date={blog.date}
      />
    );
    return null;
  });
  return (
    <div className={cx('blog-content-list')}>
      { blogList }
    </div>
  );
};

const Home = () => (
  <div>
    <BlogPosts />
  </div>
);

export default Home;

import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.css';

const cx = classNames.bind(styles);

const Card = ({
  image,
  headline,
  subhead,
  abstract,
  date,
  ...customProps
}) => {
  
  const BlogPost = () => {
    return (
      <div {...customProps} className={cx('card')}>
        <div className={cx('card-body')}>
          <img className={cx('card-image')} src={image} alt={headline} />
          <div className={cx('card-content')}>
            <div className={cx('card-title')}>
              {headline}
            </div>
            <div className={cx('card-body-content')}>
              {subhead}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return <BlogPost />;
}

export default Card;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import react from '../../images/react.png';

import styles from './Navigation.css';

const cx = classNames.bind(styles);

class Navigation extends Component {
  render() {
    return (
      <div className={cx('header-cont')}>
        <nav className={cx('nav-cont')}>
          <img src={react} className={cx('App-logo')} alt="react" />
          <Link to="/" className={cx('navbar-brandz')}>
            CHASE SINCLAIR
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navigation;
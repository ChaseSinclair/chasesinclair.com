import React from 'react';
import classNames from 'classnames/bind';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Card from '../Card/Card';

import styles from './Main.css';

const cx = classNames.bind(styles);

const Main = () => (
  <div className={cx('main-content')}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render={() =>  <Card/>} />
    </Switch>
  </div>
);

export default Main;

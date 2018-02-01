import React from 'react';
import Card from '../Card/Card';
import react_logo from '../../images/react-logo.png';
import new_relic_logo from '../../images/newrelic-logo.png';
import aws_logo from '../../images/aws-logo.png';

const Home = () => (
  <div className='blog-content-list'>
    <Card
      image={react_logo}
      headline='React'
      subhead='React allows developers to create large web-applications that use data and can change over time without reloading the page.'
      date='Jan 31, 2018'
    />
    <Card
      image={new_relic_logo}
      headline='New Relic'
      subhead='New Relic monitors Web and mobile applications in real-time with support for custom-built plugins to collect arbitrary data.'
      date='Feb 1, 2018'
    />
    <Card
      image={aws_logo}
      headline='Amazon Web Services'
      subhead='Amazon Web Services provides on-demand cloud computing platforms such as S3 and Cloudfront Distributions.'
      date='Feb 1, 2018'
    />
  </div>
);

export default Home;

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import '../../css/work.css';
import { CardHeader, Avatar } from '@material-ui/core';

const Work = ({ title, bulletPoints, timePeriod, location, logoSrc }) => {
  const bullet = <span className='bullet'>•</span>;

  const content = bulletPoints.map(function(pt) {
    return (
      <p>
        {bullet} {pt}
      </p>
    );
  });

  return (
    <Card className='card'>
      <CardHeader
        className='card-header'
        title={<p className='card-title'>{title}</p>}
        avatar={<img className='avatar-img' src={logoSrc}></img>}
      />
      <CardContent className='card-content'>
        <hr className='' />
        {content}
      </CardContent>
      <CardActions>
        {timePeriod} | {location}
      </CardActions>
    </Card>
  );
};

export default Work;

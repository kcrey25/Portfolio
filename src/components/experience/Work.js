import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { CardHeader } from '@material-ui/core';

import './work.css';

const Work = ({ title, bulletPoints, timePeriod, location, logoSrc }) => {
  const workList = bulletPoints.map(pt => {
    return <li>{pt}</li>;
  });

  return (
    <Card className="card">
      <CardHeader
        className="card-header"
        title={<p className="card-title">{title}</p>}
        avatar={<img className="avatar-img" src={logoSrc} alt="avatar"></img>}
      />
      <CardContent className="card-content">
        <hr className="" />
        <ul>{workList}</ul>
      </CardContent>
      <CardActions>
        {timePeriod} | {location}
      </CardActions>
    </Card>
  );
};

export default Work;

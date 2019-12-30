import React from 'react';
import '../../css/education.css';
import Card from '@material-ui/core/Card';
import { CardHeader, Avatar } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const Education = ({ under500 }) => {
  const bullet = <span className="bullet">•</span>;
  const byuiTitle = (
    <a className="byui-title" href="https://byui.edu">
      Brigham Young University-Idaho
    </a>
  );

  const scrumTitle = (
    <a className="byui-title" href="https://scrumalliance.org/">
      Certified Scrum Master
    </a>
  );

  return (
    <>
      <div className="education">
        <h1>Education</h1>
      </div>
      <div className="my-education">
        <Card className="edu-card give-me-space">
          <CardHeader
            title={byuiTitle}
            subheader={
              <p className="edu-sub-header">Rexburg, Idaho 2014-2016</p>
            }
            avatar={
              <img className="byui-logo" src="images/byui_logo.png"></img>
            }
          ></CardHeader>
          <CardContent>
            <p>{bullet} B.S. in Computer Engineering</p>
            <p>{bullet} IEEE</p>
          </CardContent>
        </Card>
        <Card className="edu-card">
          <CardHeader
            title={scrumTitle}
            subheader={<p className="edu-sub-header">2017</p>}
            avatar={<img className="byui-logo" src="images/CSM.png"></img>}
          ></CardHeader>
          <CardContent>
            <p>
              {bullet} Certified Scrum Master by the <a>Scrum Alliance</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Education;

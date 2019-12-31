import React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader, Avatar } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

import './education.css';

const Education = ({ under500 }) => {
  const bullet = <span className="bullet">•</span>;
  const byuiTitle = (
    <a className="edu-title" href="https://byui.edu">
      Brigham Young University-Idaho
    </a>
  );

  const scrumTitle = (
    <a className="edu-title" href="https://scrumalliance.org/">
      Certified Scrum Master
    </a>
  );

  const spanishTitle = (
    <a className="edu-title" href="https://www.uvu.edu/">
      Spanish
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
              <a href="https://byui.edu">
                <img className="edu-logo" src="images/byui_logo.png"></img>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <p>{bullet} B.S. in Computer Engineering</p>
            <p>{bullet} IEEE</p>
          </CardContent>
        </Card>
        <Card className="edu-card give-me-space">
          <CardHeader
            title={scrumTitle}
            subheader={<p className="edu-sub-header">2017</p>}
            avatar={
              <a href="https://scrumalliance.org/">
                <img className="edu-logo" src="images/CSM.png"></img>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <p>{bullet} Certified Scrum Master by the Scrum Alliance</p>
          </CardContent>
        </Card>
        <Card className="edu-card">
          <CardHeader
            title={spanishTitle}
            subheader={<p className="edu-sub-header">2009-2012</p>}
            avatar={
              <a href="https://uvu.edu">
                <img className="edu-logo" src="images/uvu.png"></img>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <p>
              {bullet} I am fluent in Spanish after two and half years of
              studying and speaking Spanish with people across Central and South
              America.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Education;

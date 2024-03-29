import React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import * as imgByui from '../../resources/images/byui_logo.png';
import * as imgCsm from '../../resources/images/CSM.png';
import * as imgUvu from '../../resources/images/uvu.png';

import './education.css';

const Education = ({ under500 }) => {
  const byuiTitle = (
    <a className="edu-title" href="https://byui.edu">
      BYU-Idaho
    </a>
  );

  const scrumTitle = (
    <a className="edu-title" href="https://scrumalliance.org/">
      Scrum Master
    </a>
  );

  const spanishTitle = (
    <a className="edu-title" href="https://www.uvu.edu/">
      Spanish
    </a>
  );

  return (
    <React.Fragment>
      <div className="education">
        <h1>Education</h1>
      </div>
      <div className="my-education">
        <Card className="edu-card give-me-space">
          <CardHeader
            title={byuiTitle}
            subheader={<p className="edu-sub-header">2013-2016</p>}
            avatar={
              <a href="https://byui.edu">
                <img className="edu-logo" src={imgByui} alt="BYU-I"></img>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <ul>
              <li>B.S. in Computer Engineering</li>
              <li>
                Research and Creative Works Conference – Made a checkers playing
                robot.
              </li>
              <li>IEEE</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="edu-card give-me-space">
          <CardHeader
            title={scrumTitle}
            subheader={<p className="edu-sub-header">2017</p>}
            avatar={
              <a href="https://scrumalliance.org/">
                <img className="edu-logo" src={imgCsm} alt="scrum alliance"></img>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <ul>
              <li>Certified Scrum Master by the Scrum Alliance</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="edu-card">
          <CardHeader
            title={spanishTitle}
            subheader={<p className="edu-sub-header">2009-2012</p>}
            avatar={
              <a href="https://uvu.edu">
                <img className="edu-logo" src={imgUvu} alt="UVU"></img>
              </a>
            }
          ></CardHeader>
          <CardContent>
            <ul>
              <li>
                I am fluent in Spanish after two and half years of studying and
                speaking Spanish with people from Central and South America.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Education;

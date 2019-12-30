import React from 'react';
import './aboutPt.css';

const AboutPt = props => {
  return (
    <div className="skill">
      <div className="skill-container">
        <div>
          <img height="90px" src={props.iconPath} alt="skill-img" />
        </div>
        <div className="skill-title">{props.title}</div>
      </div>
      <div className="skill-notes">{props.notes}</div>
    </div>
  );
};

export default AboutPt;

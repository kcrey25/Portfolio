import React from 'react';
import Skill from './Skill';
import '../../css/skill.css';
import '../../css/index.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  skills: {
    background: '#3F51B5',
    height: '100px',
    color: 'white'
  },
  skillsBody: {
    height: 'calc(100vh - 100px)',
    background: 'gray',
    color: 'white'
  }
}));

const skills = [
  {
    title: 'Development',
    iconPath: './images/Software.png',
    notes:
      "I have experience working on software for F-16's, mobile apps, desktop apps, and websites."
  },
  {
    title: 'Responsive Design',
    iconPath: './/images/responsive.png',
    notes:
      'Responsive design is key for a great user experience. I can make a great experience on any device.'
  },
  {
    title: 'Communication',
    iconPath: './/images/communication.png',
    notes: 'I believe that communication will insure the best results.'
  }
];

const Skills = () => {
  const classes = useStyles();
  var mySkills = skills.map(function(skill, i) {
    return <Skill key={i} {...skill} />;
  });
  return (
    <>
      <div className={classes.skills}>
        <h1>Skills</h1>
      </div>
      <div className="mySkills">{mySkills}</div>
    </>
  );
};

export default Skills;

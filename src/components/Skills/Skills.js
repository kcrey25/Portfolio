import React from 'react';
import './skills.css';
import { width } from '@material-ui/system';

const skills = [
  { name: 'Android', path: './images/skills/android.png' },
  { name: 'AWS', path: './images/skills/aws.png' },
  { name: 'C#', path: './images/skills/CSharp.png' },
  { name: 'CSS3', path: './images/skills/css3.png' },
  { name: 'Git', path: './images/skills/git.png' },
  { name: 'Heroku', path: './images/skills/heroku.png' },
  { name: 'HTML5', path: './images/skills/html5.png' },
  { name: 'JavaScript', path: './images/skills/javascript.png' },
  { name: 'Jenkins', path: './images/skills/jenkins.png' },
  { name: 'TypeScript', path: './images/skills/typescriptlogo.svg' },
  { name: 'MongoDB', path: './images/skills/mongodb.png' },
  { name: 'NodeJS', path: './images/skills/nodejs.png' },
  { name: 'React', path: './images/skills/react.png' },
  { name: 'Serverless', path: './images/skills/serverless.png' },
  { name: 'Visual Studio', path: './images/skills/visualStudio.png' },
  { name: 'Xamarin', path: './images/skills/xamarin.png' }
];

const Skills = () => {
  const mySkills = skills.map(skill => {
    return (
      <div className="single-skill">
        <div className="img-div">
          <img className="skill-img" alt={skill.name} src={skill.path} />
        </div>
        <p className="skill-name">{skill.name}</p>
      </div>
    );
  });

  return (
    <>
      <div className="skills">
        <h1>Skills</h1>
      </div>
      <section className="skills-body">{mySkills}</section>
    </>
  );
};

export default Skills;

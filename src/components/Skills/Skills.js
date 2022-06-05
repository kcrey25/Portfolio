import React from 'react';
import './skills.css';
import * as imgAndroid from '../../resources/images/skills/android.png';
import * as imgAws from '../../resources/images/skills/aws.png';
import * as imgCSharp from '../../resources/images/skills/CSharp.png';
import * as imgCss from '../../resources/images/skills/css3.png';
import * as imgGit from '../../resources/images/skills/git.png';
import * as imgGitHub from '../../resources/images/skills/github.png';
import * as imgHtml from '../../resources/images/skills/html5.png';
import * as imgJs from '../../resources/images/skills/javascript.png';
import * as imgJenkins from '../../resources/images/skills/jenkins.png';
import * as imgTs from '../../resources/images/skills/typescript.png';
import * as imgMongoDb from '../../resources/images/skills/mongodb.png';
import * as imgNodeJs from '../../resources/images/skills/nodejs.png';
import * as imgReact from '../../resources/images/skills/react.png';
import * as imgServerless from '../../resources/images/skills/serverless.png';
import * as imgVs from '../../resources/images/skills/visualStudio.png';
import * as imgXamarin from '../../resources/images/skills/xamarin.png';

const skills = [
  { name: 'Android', path: imgAndroid },
  { name: 'AWS', path: imgAws },
  { name: 'C#', path: imgCSharp },
  { name: 'CSS3', path: imgCss },
  { name: 'Git', path: imgGit },
  { name: 'GitHub', path: imgGitHub },
  { name: 'HTML5', path: imgHtml },
  { name: 'JavaScript', path: imgJs },
  { name: 'Jenkins', path: imgJenkins },
  { name: 'TypeScript', path: imgTs },
  { name: 'MongoDB', path: imgMongoDb },
  { name: 'NodeJS', path: imgNodeJs },
  { name: 'React', path: imgReact },
  { name: 'Serverless', path: imgServerless },
  { name: 'Visual Studio', path: imgVs },
  { name: 'Xamarin', path: imgXamarin }
];

const Skills = () => {
  const sortedSkills = skills.sort((a,b) => {
    return (a.name.toLowerCase() > b.name.toLowerCase())? 1:-1;
  });
  const mySkills = sortedSkills.map(skill => {
    return (
      <div key={skill.name} className="singleSkill">
        <div className="imgDiv">
          <img className="skillImg" alt={skill.name} src={skill.path} />
        </div>
        <p className="skillName">{skill.name}</p>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="skills">
        <h1>Skills</h1>
      </div>
      <section className="skillsBody">{mySkills}</section>
    </React.Fragment>
  );
};

export default Skills;

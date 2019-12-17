import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Work from './Work';

import '../../css/experience.css';

const useStyles = makeStyles(() => ({
  experience: {
    background: '#008073',
    color: 'white',
    padding: '20px',
    fontSize: '30px',
    fontFamily: 'sans-serif',
  },
  experienceBody: {
    height: 'calc(100vh - 100px)',
    background: 'gray',
    color: 'white',
    padding: '20px',
  },
}));

const ivantiExperience = [
  'Developed solutions for Windows desktop and Android applications.',
  'Added features which improved customer implementation time from months, down to a few hours.',
  'Added functional and unit tests which improved product quality and testing time.',
  'Worked with WebView and added custom themes and styling with CSS, HTML, and JavaScript.',
  'Wrote library templates in JavaScript to use for easy customization of our application.',
  'Used Jenkins as a build and automation server.',
];

const Experience = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.experience}>
        <h1>Experience</h1>
      </div>
      <div className={classes.experienceBody}>
        <Work
          bulletPoints={ivantiExperience}
          title='Ivanti - Software Engineer'
          location='South Jordan, Utah'
          timePeriod='Oct 2017 - Present'
        />
        <Work
          bulletPoints={ivantiExperience}
          title='Ivanti - Software Engineer'
          location='South Jordan, Utah'
          timePeriod='Oct 2017 - Present'
        />
      </div>
    </>
  );
};

export default Experience;

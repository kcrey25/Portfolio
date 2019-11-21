import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  about: {
    background: '#008073',
    height: '100px',
    color: 'white'
  },
  aboutBody: {
    height: 'calc(100vh - 100px)',
    background: 'gray',
    color: 'white'
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.about}>
        <h1>About</h1>
      </div>
      <div className={classes.aboutBody}>About Body</div>
    </>
  );
};

export default About;

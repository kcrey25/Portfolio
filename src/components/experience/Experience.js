import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  experience: {
    background: '#00BBD3',
    height: '100px',
    color: 'white'
  },
  experienceBody: {
    height: 'calc(100vh - 100px)',
    background: 'maroon',
    color: 'white'
  }
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.experience}>
        <h1>Experience</h1>
      </div>
      <div className={classes.experienceBody}>Experience Body</div>
    </>
  );
};

export default Experience;

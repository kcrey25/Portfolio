import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  education: {
    background: '#008073',
    height: '100px',
    color: 'white'
  },
  educationBody: {
    height: 'calc(100vh - 100px)',
    background: 'white',
    color: 'white'
  }
}));

const Education = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.education}>
        <h1>Education</h1>
      </div>
      <div className={classes.educationBody}>Education Body</div>
    </>
  );
};

export default Education;

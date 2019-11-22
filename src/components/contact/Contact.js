import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contact: {
    background: '#008073',
    height: '100px',
    color: 'white'
  },
  contactBody: {
    height: 'calc(100vh - 100px)',
    background: 'gray',
    color: 'white'
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.contact}>
        <h1>Contact</h1>
      </div>
      <div className={classes.contactBody}>Contact Body</div>
    </>
  );
};

export default Contact;

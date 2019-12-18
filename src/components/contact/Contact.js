import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contact: {
    background: '#008073',
    color: 'white',
    fontFamily: 'sans-serif',
    padding: '20px 50px',
    fontSize: '30px',
  },
  contactBody: {
    background: 'white',
  },
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

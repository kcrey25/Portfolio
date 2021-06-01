import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import './contact.css';

const Contact = () => {
  const iconStyle = {
    color: '#ffffff',
    fontSize: '40px',
    padding: '10px'
  };

  return (
    <React.Fragment>
      <div className="contact">
        <h1>Contact</h1>
      </div>
      <div className="contactBody">
        <div className="contact-box">
          <a
            href="mailto:christensen303@gmail.com"
            className="contact-btn"
            style={{ background: '#f44336' }}
          >
            <EmailIcon style={iconStyle} />
          </a>
          <a href="mailto:christensen303@gmail.com" className="contact-details">
            christensen303@gmail.com
          </a>
        </div>
        <div className="contact-box">
          <a
            href="https://github.com/kcrey25"
            className="contact-btn"
            style={{ background: '#000000' }}
          >
            <GitHubIcon style={iconStyle} />
          </a>
          <a href="https://github.com/kcrey25" className="contact-details">
            github.com/kcrey25
          </a>
        </div>
        <div className="contact-box">
          <a
            href="https://www.linkedin.com/in/christensencasey/"
            className="contact-btn"
            style={{ background: '#0077B5' }}
          >
            <LinkedInIcon style={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/christensencasey/"
            className="contact-details"
          >
            linkedin.com/in/christensencasey
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ExperienceIcon from '@material-ui/icons/TrendingUp';
import MailIcon from '@material-ui/icons/MailOutline';
import SkillsIcon from '@material-ui/icons/Equalizer';
import EducationIcon from '@material-ui/icons/School';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { ListItemText, ListItemIcon } from '@material-ui/core';

import './Nav.css';

const useStyles = makeStyles(() => ({
  personIcon: {
    color: '#008073'
  },
  experienceIcon: {
    color: '#00BBD3'
  },
  skillsIcon: {
    color: '#3F51B5'
  },
  educationIcon: {
    color: '#9C27B0'
  },
  contactIcon: {
    color: '#F44336'
  },
  smallNav: {
    height: '65px',
    width: '100%',
    display: 'block',
    position: 'fixed',
    zIndex: 2,
    background: 'white',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
  },
  menuIcon: {
    padding: '15px 15px',
    color: '#008073',
    position: 'fixed',
    float: 'left'
  },
  navTitle: {
    textAlign: 'center',
    margin: '15px',
    width: '100%'
  },
  nameTitle: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontSize: '22px',
    width: '100%',
    color: '#008073'
  },
  position: {
    color: '#B9B9B9'
  }
}));

const Nav = ({ isDesktop, scrolling }) => {
  const clearedSelections = {
    about: false,
    experience: false,
    skills: false,
    education: false,
    contact: false
  };
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(clearedSelections);
  const clearSelectedItems = () => {
    setSelectedItem(clearSelectedItems);
  };
  const smallNav = (
    <nav className={classes.smallNav}>
      <MenuIcon
        fontSize="large"
        className={classes.menuIcon}
        onClick={() => setDrawerOpen(!drawerOpen)}
      />
      <div className={classes.navTitle}>
        <p className={classes.nameTitle}>Casey Christensen</p>
        <p className={classes.position}>Software Engineer</p>
      </div>
    </nav>
  );

  const aboutSelectedStyle = selectedItem.about
    ? { borderLeft: '4px solid #008073' }
    : null;
  const experienceSelectedStyle = selectedItem.experience
    ? { borderLeft: '4px solid #00BBD3' }
    : null;
  const skillsSelectedStyle = selectedItem.skills
    ? { borderLeft: '4px solid #3F51B5' }
    : null;
  const educationSelectedStyle = selectedItem.education
    ? { borderLeft: '4px solid #9C27B0' }
    : null;
  const contactSelectedStyle = selectedItem.contact
    ? { borderLeft: '4px solid #F44336' }
    : null;

  return (
    <>
      {!isDesktop ? smallNav : null}
      <Drawer
        variant={isDesktop ? 'permanent' : 'temporary'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onClick={() => setDrawerOpen(false)}
      >
        <div
          className="nav-title"
          onClick={() => {
            scrolling('intro');
            setSelectedItem(clearedSelections);
          }}
        >
          <p className="name-title">Casey Christensen</p>
          <p>Software Engineer</p>
        </div>
        <Divider />
        <div className="drawerDiv">
          <List>
            <ListItem
              button
              onClick={() => {
                scrolling('about');
                setSelectedItem({ about: true });
              }}
              style={aboutSelectedStyle}
            >
              <ListItemIcon>
                <PersonIcon className={classes.personIcon} />
              </ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                scrolling('experience');
                setSelectedItem({ experience: true });
              }}
              style={experienceSelectedStyle}
            >
              <ListItemIcon>
                <ExperienceIcon className={classes.experienceIcon} />
              </ListItemIcon>
              <ListItemText>Experience</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                scrolling('skills');
                setSelectedItem({ skills: true });
              }}
              style={skillsSelectedStyle}
            >
              <ListItemIcon className={classes.skillsIcon}>
                <SkillsIcon />
              </ListItemIcon>
              <ListItemText>Skills</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                scrolling('education');
                setSelectedItem({ education: true });
              }}
              style={educationSelectedStyle}
            >
              <ListItemIcon>
                <EducationIcon className={classes.educationIcon} />
              </ListItemIcon>
              <ListItemText>Education</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={() => {
                scrolling('contact');
                setSelectedItem({ contact: true });
              }}
              style={contactSelectedStyle}
            >
              <ListItemIcon>
                <MailIcon className={classes.contactIcon} />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Nav;

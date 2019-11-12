import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ExperienceIcon from '@material-ui/icons/TrendingUp';
import MailIcon from '@material-ui/icons/MailOutline';
import SkillsIcon from '@material-ui/icons/Equalizer';
import EducationIcon from '@material-ui/icons/School';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/Nav.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { ListItemText, ListItemIcon } from '@material-ui/core';

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
  }
}));

const Nav = ({ isDesktop, scrolling }) => {
  const classes = useStyles();
  return (
    <Drawer variant={isDesktop ? 'permanent' : 'temporary'}>
      <div className="nav-title" onClick={() => scrolling('intro')}>
        <p className="name-title">Casey Christensen</p>
        <p>Software Engineer</p>
      </div>
      <Divider />
      <div className="drawerDiv">
        <List>
          <ListItem button onClick={() => scrolling('about')}>
            <ListItemIcon>
              <PersonIcon className={classes.personIcon} />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
          <ListItem button onClick={() => scrolling('experience')}>
            <ListItemIcon>
              <ExperienceIcon className={classes.experienceIcon} />
            </ListItemIcon>
            <ListItemText>Experience</ListItemText>
          </ListItem>
          <ListItem button onClick={() => scrolling('skills')}>
            <ListItemIcon className={classes.skillsIcon}>
              <SkillsIcon />
            </ListItemIcon>
            <ListItemText>Skills</ListItemText>
          </ListItem>
          <ListItem button onClick={() => scrolling('education')}>
            <ListItemIcon>
              <EducationIcon className={classes.educationIcon} />
            </ListItemIcon>
            <ListItemText>Education</ListItemText>
          </ListItem>
          <ListItem button onClick={() => scrolling('contact')}>
            <ListItemIcon>
              <MailIcon className={classes.contactIcon} />
            </ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Nav;

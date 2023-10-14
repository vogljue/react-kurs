import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/material/styles';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar
});

const descriptions = [
  { id: "/", header: "Home", text: "Welcome to the HomeView. Here is a short description of what you can do." },
  { id: "/login", header: "Login", text: "Welcome to the LoginView. Here is a short description of what you can do." },
  { id: "/signup", header: "SignUp", text: "Welcome to the SignupView. Here is a short description of what you can do." },
  { id: "/todos", header: "ToDos", text: "Welcome to the TodosView. Here is a short description of what you can do." },
];

const SideDrawerWidget = (props) => {
  const { classes } = props;
  const desc = descriptions.find(x => x.id === props.location);
  return (
    <Drawer
      className={classes.drawer}
      anchor="right"
      variant="permanent"
      classes={{paper: classes.drawerPaper,}}>
        <div className={classes.toolbar} />
        <div className={classes.content}>
        <Typography  variant="h5" >{desc.header}</Typography>
        <Typography variant="body1">{desc.text}</Typography>
        </div>  
    </Drawer>
  );
}

SideDrawerWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};

export default withStyles(styles)(SideDrawerWidget);

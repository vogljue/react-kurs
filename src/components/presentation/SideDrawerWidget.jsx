import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
  { id: "/", header: "Home", text: "Welcome to the HomeView. Here is a minimal description of what you can do." },
  { id: "/login", header: "Login", text: "Welcome to the LoginView. Here is a minimal description of what you can do." },
  { id: "/signup", header: "SignUp", text: "Welcome to the SignupView. Here is a minimal description of what you can do." },
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

export default withStyles(styles)(SideDrawerWidget);

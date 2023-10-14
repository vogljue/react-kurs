import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import Mail from '@mui/icons-material/Mail';
import { withStyles } from '@mui/material/styles';
import { SideDrawerWidget } from '../presentation';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
});

const DrawerWidget = (props) => {
  const { classes } = props;
  return (
     <div>
     <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={props.drawerOpen}
      classes={{paper: classes.drawerPaper,}}>
        <div className={classes.toolbar} />
        <List>
            <ListItem 
              button 
              selected={props.location === '/'}
              component={Link} to="/">
              <ListItemIcon><MoveToInbox /></ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem 
              button 
              selected={props.location === '/login'}
              component={Link} to="/login">
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary='Login' />
            </ListItem>
            <ListItem 
              button 
              selected={props.location === '/signup'}
              component={Link} to="/signup">
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary='Signup' />
            </ListItem>
            <ListItem 
              button 
              selected={props.location === '/todos'}
              component={Link} to="/todos">
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary='ToDos' />
            </ListItem>
        </List>
    </Drawer>
    </div>  
  );
}

DrawerWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(DrawerWidget);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MoveToInbox from '@material-ui/icons/MoveToInbox';
import Mail from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
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
      variant="permanent"
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
    <SideDrawerWidget location={props.location} />
    </div>  
  );
}

DrawerWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};

export default withStyles(styles)(DrawerWidget);

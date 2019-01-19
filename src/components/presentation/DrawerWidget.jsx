import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { MoveToInbox, Mail } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
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

const DrawerWidget = (props) => {
  const { classes } = props;
  return (
     <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{paper: classes.drawerPaper,}}>
        <div className={classes.toolbar} />
        <List>
            <ListItem 
              button 
              selected={props.selectedIndex === 0}
              onClick={event => props.handleListItemClick(event, 0)}
              component={Link} to="/">
              <ListItemIcon><MoveToInbox /></ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem 
              button 
              selected={props.selectedIndex === 1}
              onClick={event => props.handleListItemClick(event, 1)}
              component={Link} to="/login">
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary='Login' />
            </ListItem>
            <ListItem 
              button 
              selected={props.selectedIndex === 2}
              onClick={event => props.handleListItemClick(event, 2)}
              component={Link} to="/signup">
              <ListItemIcon><Mail /></ListItemIcon>
              <ListItemText primary='Signup' />
            </ListItem>
        </List>
    </Drawer>
  );
}

export default withStyles(styles)(DrawerWidget);

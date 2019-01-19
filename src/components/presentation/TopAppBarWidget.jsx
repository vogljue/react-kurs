import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const TopAppBarWidget = (props) => {
  const { classes } = props;

  return (
    <AppBar position="fixed" color="default" className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap  className={classes.grow}>
          React Kurs
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton color="inherit" aria-label="Account">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>  
  );
}

export default withStyles(styles)(TopAppBarWidget);
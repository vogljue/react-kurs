import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { withStyles } from '@mui/styles';

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
        <IconButton className={classes.menuButton} onClick={props.handleDrawerOpen} color="inherit" aria-label="Menu">
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

TopAppBarWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopAppBarWidget);
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
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

TopAppBarWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopAppBarWidget);
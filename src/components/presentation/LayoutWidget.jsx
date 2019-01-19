import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  }
});

const LayoutWidget = (props) => {
  const { classes } = props;

  return (
  <div className={classes.root}>
      <CssBaseline />
      {props.children}
  </div>
  );
}

export default withStyles(styles)(LayoutWidget);
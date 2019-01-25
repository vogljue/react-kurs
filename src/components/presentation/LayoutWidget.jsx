import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const styles = theme => ({
  root: {
    display: 'flex',
  }
});

const LayoutWidget = (props) => {
  const { classes } = props;

  return (
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
        <CssBaseline />
        {props.children}
    </div>
  </MuiThemeProvider>
  );
}

export default withStyles(styles)(LayoutWidget);
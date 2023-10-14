import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
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
  <ThemeProvider theme={theme}>
    <div className={classes.root}>
        <CssBaseline />
        {props.children}
    </div>
  </ThemeProvider>
  );
}

export default withStyles(styles)(LayoutWidget);
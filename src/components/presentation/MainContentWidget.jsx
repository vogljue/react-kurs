import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginRight: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
});

const MainContentWidget = (props) => {
  const { classes } = props;

  return (
    <main  className={classes.content}>
      <div className={classes.toolbar} />
      {props.children}
    </main>
  );
}

export default withStyles(styles)(MainContentWidget);
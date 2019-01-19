import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar
});

const MainContentWidget = (props) => {
  const { classes } = props;

  return (
    <main  className={classes.content}>
      <div className={classes.toolbar} />
      {props.content}
    </main>
  );
}

export default withStyles(styles)(MainContentWidget);
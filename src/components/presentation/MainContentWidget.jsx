import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@mui/material/styles';

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginRight: 20,
    marginLeft: -drawerWidth,
  },
  contentShift: {
    marginLeft: 0,
  },
  toolbar: theme.mixins.toolbar
});

const MainContentWidget = (props) => {
  const { classes } = props;

  return (
    <main className={clsx(classes.content, {
          [classes.contentShift]: props.drawerOpen,
        })}>
      <div className={classes.toolbar} />
      {props.children}
    </main>
  );
}

MainContentWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MainContentWidget);
import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
});

const SignUpWidget = (props) => {
  const { classes } = props;
  return (
  <div>
  <Typography  variant="h4" >Sign up page</Typography>
  <Paper className={classes.paper} elevation={1}>    
  <Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
    donec massa sapien faucibus et molestie ac.
  </Typography>
  </Paper>
  </div>
  );
}

export default withStyles(styles)(SignUpWidget);
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

const HomeWidget = (props) => {
  const { classes } = props;
  return (
  <div className={classes.root}>
    <Typography  variant="h4" >This is my home view</Typography>
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
    <Paper className={classes.paper} elevation={1}>
    <ExpansionPanel expanded={props.expanded === 'panel1'} onChange={props.handleChangePanel('panel1')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>General settings</Typography>
        <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
          maximus est, id dignissim quam.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={props.expanded === 'panel2'} onChange={props.handleChangePanel('panel2')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Users</Typography>
        <Typography className={classes.secondaryHeading}>
          You are currently not an owner
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
          diam eros in elit. Pellentesque convallis laoreet laoreet.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel expanded={props.expanded === 'panel3'} onChange={props.handleChangePanel('panel3')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Advanced settings</Typography>
        <Typography className={classes.secondaryHeading}>
          Filtering has been entirely disabled for whole web server
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
          eros, vitae egestas augue. Duis vel est augue.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    </Paper>
  </div>
  );
}

export default withStyles(styles)(HomeWidget);
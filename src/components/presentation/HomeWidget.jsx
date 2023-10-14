import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { withStyles } from '@mui/styles';

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
    <Accordion expanded={props.expanded === 'panel1'} onChange={props.handleChangePanel('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>General settings</Typography>
        <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
          maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={props.expanded === 'panel2'} onChange={props.handleChangePanel('panel2')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Users</Typography>
        <Typography className={classes.secondaryHeading}>
          You are currently not an owner
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
          diam eros in elit. Pellentesque convallis laoreet laoreet.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={props.expanded === 'panel3'} onChange={props.handleChangePanel('panel3')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Advanced settings</Typography>
        <Typography className={classes.secondaryHeading}>
          Filtering has been entirely disabled for whole web server
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
          eros, vitae egestas augue. Duis vel est augue.
        </Typography>
      </AccordionDetails>
    </Accordion>
    </Paper>
  </div>
  );
}

HomeWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  expanded: PropTypes.string.isRequired,
  handleChangePanel: PropTypes.func.isRequired,
};

export default withStyles(styles)(HomeWidget);
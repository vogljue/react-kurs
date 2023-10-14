import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

const LoginWidget = (props) => {
  const { classes } = props;
return (
    <div className={classes.root}>
    <Grid container spacing={16}>  
      <Grid item xs={12}>  
        <Typography variant="h4" >Login Form</Typography>
      </Grid>
      <Grid item xs={12}>  
        <Typography variant="subheading">Zugangsdaten</Typography> 
      </Grid>
    </Grid>
    <Paper className={classes.paper} elevation={1}>
        <form noValidate autoComplete="off">
            <Grid container alignItems="flex-end">
            <Grid item xs={6}>  
            <TextField
                id="outlined-name"
                label="Name"
                value={props.name}
                className={classes.textField}
                onChange={props.handleChange('name')}
                margin="normal"
                variant="outlined"
            />
            </Grid>
            <Grid item xs={6}>  
            <TextField
                    id="outlined-password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
            />
            </Grid>
            <Grid item xs={12}>  
                <Button className={classes.button} variant="outlined">Submit</Button>
            </Grid>
        </Grid>
        </form>
    </Paper>
    </div>
  );
}

LoginWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginWidget);
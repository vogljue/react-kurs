import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CalendarToday from '@mui/icons-material/CalendarToday';
import { withStyles } from '@mui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    padding: theme.spacing.unit * 2,
    },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
});

const TodoWidget = (props) => {
  const { classes } = props;
  return (
    <div>
    <Typography  variant="h4" >Todos page</Typography>
    <Paper className={classes.root} elevation={1}>
         <List>
          {props.todos.map((todo, index) => (
            <ListItem button>
              <ListItemIcon><CalendarToday /></ListItemIcon>
              <ListItemText primary={todo.title} secondary={ "Id: "+todo.id+" "+todo.completed} />
            </ListItem>
           ))}
        </List>
     </Paper>
   </div>  
  );
}

TodoWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
};

export default withStyles(styles)(TodoWidget);

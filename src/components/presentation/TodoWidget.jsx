import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { withStyles } from '@material-ui/core/styles';

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

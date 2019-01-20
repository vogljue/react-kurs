import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
});

const TodoWidget = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
        <List>
          {props.todos.map((todo, index) => (
            <ListItem button>
              <ListItemIcon><CalendarToday /></ListItemIcon>
              <ListItemText primary={todo.title} secondary={ "Id: "+todo.id+" "+todo.completed} />
            </ListItem>
           ))}
        </List>
    </div>  
  );
}

TodoWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
};

export default withStyles(styles)(TodoWidget);

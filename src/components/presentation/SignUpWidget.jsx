import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { withStyles } from '@mui/material/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    padding: theme.spacing.unit * 2,
    },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: theme.spacing.unit,
  },
  tableWrapper: {
    overflowX: 'auto',
    },
  table: {
    minWidth: 700,
    },
});

const SignUpWidget = (props) => {
    const { classes, data, page, rowsPerPage } = props;
  return (
  <div>
  <Typography  variant="h4" >Sign up page</Typography>
    <Paper className={classes.root} elevation={1}>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
                Nutrition
            </Typography>
            <TextField
                id="input-with-icon-textfield"
                placeholder="Suchen"
                type="search"
                onChange={props.handleChangeSearch}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Toolbar>
        <div className={classes.tableWrapper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat (g)</TableCell>
                        <TableCell align="right">Carbs (g)</TableCell>
                        <TableCell align="right">Protein (g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => {
                    return (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    );
                })}
                </TableBody>
            </Table>
        </div>
        <TablePagination
            labelRowsPerPage="Zeilen pro Seite:"
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} von ${count}`}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
                'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
                'aria-label': 'Next Page',
            }}
            onChangePage={props.handleChangePage}
            onChangeRowsPerPage={props.handleChangeRowsPerPage}
        />
    </Paper>
  </div>
  );
}

SignUpWidget.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    handleChangeSearch: PropTypes.func.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignUpWidget);
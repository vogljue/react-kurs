import React, { Component } from "react";
import { SignUpWidget } from '../presentation';

const rows = [
    { id: 1, name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { id: 2, name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3  },
    { id: 3, name: "Butter cup", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { id: 4, name: "Milk shake", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { id: 5, name: "Bloomberry", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { id: 6, name: "Flurry", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { id: 7, name: "Watermelon", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
];

class SignUpContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5,
            data: rows
        }
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    handleChangeSearch = event => {
        this.setState({ data: rows.filter(row => row.name.indexOf(event.target.value) >= 0)});
    };

    render() {
        return (<SignUpWidget
            data={this.state.data}
            page={this.state.page}
            rowsPerPage={this.state.rowsPerPage}
            handleChangeSearch={this.handleChangeSearch}
            handleChangePage={this.handleChangePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage} />);
  }
}

export default SignUpContainer;
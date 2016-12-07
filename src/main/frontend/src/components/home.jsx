import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Table, TableBody, TableFooter, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import * as actions from '../actions/home'
import auth from '../services/auth';
import CircularProgress from 'material-ui/CircularProgress';

const helpStyle = {
  paddingLeft: '30px'
};

const headStyle = {
  textAlign: 'center'
};

const helpText = "For buy car you should log in";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  checkUserLogin() {
    return !auth.isEmpty();
  }

  componentWillMount() {
    this.props.actions.loadCars();
  }

  byCar(carId) {
    if (!this.checkUserLogin()) return;
    this.props.actions.buyingCar(carId).then(() => {
      this.props.actions.loadCars();
    });
  }

  render() {
    if (this.props.cars.showCars) {
      return <div>
        <MuiThemeProvider>
          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Model</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
                <TableHeaderColumn>Color</TableHeaderColumn>
                <TableHeaderColumn>Year</TableHeaderColumn>
                <TableHeaderColumn tooltip={this.checkUserLogin() ? "" : helpText }>
                  {!this.checkUserLogin() ? <i style={helpStyle} className="material-icons">&#xE887;</i> : <span/>}
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.props.cars.data.map((row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.model}</TableRowColumn>
                  <TableRowColumn>{row.price}</TableRowColumn>
                  <TableRowColumn>{row.color}</TableRowColumn>
                  <TableRowColumn>{row.year}</TableRowColumn>
                  <TableRowColumn>
                    <FlatButton label="Buy"
                                secondary={this.checkUserLogin()}
                                disabled={!this.checkUserLogin()}
                                onClick={() => this.byCar(row.id)}
                    />
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Snackbar
            open={this.props.cars.message}
            message={this.props.cars.messageText}
          />
        </MuiThemeProvider>
      </div>;
    } else if (this.props.cars.fetching) {
      return <MuiThemeProvider>
        <CircularProgress />
      </MuiThemeProvider>
    } else {
      return <h1 style={headStyle}>There is no cars for sell</h1>;
    }
  };

}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }

}

export default connect(mapStateToProps, mapDispatch)(Home);
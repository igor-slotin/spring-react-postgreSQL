import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

import * as actions from '../../actions/user/index';

import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import CarTable from './carTable.jsx';
import Account from './account.jsx';

const style = {
  tabs: {
    margin: '20px 0px',
  },
  tabElement: {
    backgroundColor: '#fffdfb',
    color: '#000'
  },
  addButton: {
    margin: '2rem'
  }
};

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'cars'
    }
  }

  componentWillMount() {
    this.props.actions.checkUser();
    this.props.actions.getUserData();
  }

  addCar() {
    hashHistory.push('/add')
  }

  handleTabChange(value) {
    this.setState({
      tab: value
    })
  }

  changeSell(carId) {
    this.props.actions.changeIsSell(carId).then(() => {
      this.props.actions.getUserData();
    });
  }

  increaseBalance(summ) {
    this.props.actions.increaseBalance(summ).then(() => {
      this.props.actions.getUserData();
    });
  }

  render() {
    return <div style={style.tabs}>
      <MuiThemeProvider>
        <Tabs
          value={this.state.tab}
          onChange={this.handleTabChange.bind(this)}
        >
          <Tab label="My Cars" value="cars" style={style.tabElement}>
            <FlatButton style={style.addButton} label="Add Car" onClick={this.addCar.bind(this)} secondary={true}/>
            <div>
              <CarTable
                cars={this.props.user.data.cars}
                changeSell={this.changeSell.bind(this)}
              />
            </div>
          </Tab>
          <Tab label="My Account" value="account" style={style.tabElement}>
            <div>
              <Account
                balance={this.props.user.data.account.balance}
                increaseBalance={this.increaseBalance.bind(this)}
              />
            </div>
          </Tab>

        </Tabs>
      </MuiThemeProvider>
    </div>
  }
}

function mapToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapToProps, mapDispatch)(User);

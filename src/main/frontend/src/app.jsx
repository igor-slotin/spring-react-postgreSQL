import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory, browserHistory} from 'react-router';
import {Provider, connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import createStore from './store';

injectTapEventPlugin();

const store = createStore();

import Hello from './components/home.jsx';
import Empty from './components/empty.jsx';
import Login from './components/login.jsx';
import User from './components/user.jsx';
import auth from './services/auth'
import Registration from './components/registration.jsx';


const style = {
  carsellButton: {
    color: '#fff',
    fontSize: '3em',
    margin: '0.1em'
  }
};
const LoginButton = <FlatButton label="Login" onClick={() => hashHistory.push('/login')} />;
const LogoutButton = <FlatButton label="Logout" onClick={() => {auth.remove();hashHistory.push('/login')}}/>;
const carsellButton = <FlatButton style={style.carsellButton} label="Car sell" onClick={() => hashHistory.push('/')}/>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: !auth.isEmpty()
    };
  }
  componentWillReceiveProps() {
    this.state.logged = !auth.isEmpty();
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar iconElementLeft={carsellButton}
                  iconElementRight={this.state.logged ? LogoutButton : LoginButton}
          />
        </MuiThemeProvider>
        {this.props.children}
      </div>
    )
  }
}

App = connect((state) => {return {state}})(App);

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Hello}/>
        <Route path="/empty" component={Empty}/>
        <Route path="/login" component={Login}/>
        <Route path="/user" component={User}/>
        <Route path="/registration" component={Registration} />

      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
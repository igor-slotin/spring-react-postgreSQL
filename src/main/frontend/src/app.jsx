import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory ,browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import createStore from './store';

injectTapEventPlugin();

const store = createStore();

import Hello from './components/home.jsx';
import Empty from './components/empty.jsx';
import Login from './components/login/index.jsx';
import Registration from './components/registration/index.jsx';

import endpoints from './endpoints';
console.log(endpoints);
const Logged = <FlatButton label="Login" onClick={() => hashHistory.push('/login')}></FlatButton>;

class App extends Component{
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar title="Car sell"
                            iconElementLeft={<div/>}
                            iconElementRight={Logged}
                    />
                </MuiThemeProvider>
                {this.props.children}
            </div>
        )
    }
}

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Hello} />
                <Route path="/empty" component={Empty} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
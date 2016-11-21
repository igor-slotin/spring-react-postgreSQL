import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory ,browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import FlatButton from 'material-ui/FlatButton';


import Hello from './components/hello.jsx';
import Empty from './components/empty.jsx';
import Login from './components/login.jsx';


const Logged = <FlatButton label="Login" onClick={()=>{
    hashHistory.push('/login');
}}></FlatButton>;

class App extends React.Component{
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar title="Car sell"
                            iconElementLeft={<div/>}
                            iconElementRight={Logged}
                    />
                </MuiThemeProvider>
                <h1>App</h1>
                <ul>
                    <li><Link to="/hello">Hello</Link></li>
                    <li><Link to="/empty">Empty</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="hello" component={Hello} />
            <Route path="empty" component={Empty} />
            <Route path="login" component={Login} />
        </Route>
    </Router>
), document.getElementById('app'));
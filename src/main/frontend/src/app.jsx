import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory ,browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import Hello from './components/hello.jsx';
import Empty from './components/empty.jsx';
import Login from './components/login/index.jsx';
import Main from './components/main/index.jsx';

render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/empty" component={Empty} />
            <Route path="/login" component={Login} />
            <Route path="*" component={Hello} />
        </Route>
    </Router>
), document.getElementById('app'));
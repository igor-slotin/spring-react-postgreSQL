import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { AppBar } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import { hashHistory, Link } from 'react-router';

const Logged = <FlatButton label="Login" onClick={()=>{
    hashHistory.push('/login');
}}></FlatButton>;


class Main extends React.Component{
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

export default Main;
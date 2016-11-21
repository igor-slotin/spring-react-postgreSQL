import React from 'react';
import Paper from 'material-ui/Paper';
import MTP from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const divStyle = {
    padding: '20px'
};

const TextFieldStyle = {

};

class Login extends React.Component {
    render() {
        return <MTP>
            <Paper>
                <div style={divStyle}>
                    <TextField style={TextFieldStyle}
                        hintText="User name"
                    />
                    <br/>
                    <TextField style={TextFieldStyle}
                               type="password"
                                hintText="Password"
                    />
                    <RaisedButton label="LOGIN" fullWidth={true} />
                </div>
            </Paper>
        </MTP>;
    }
}

export default Login;
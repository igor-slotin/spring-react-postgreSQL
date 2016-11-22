import React from 'react';
import Paper from 'material-ui/Paper';
import MTP from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import BackButton from 'material-ui/svg-icons/navigation/arrow-back';
import { hashHistory } from 'react-router';

const style = {
    mainBlock: {
        padding: '2em',
        margin: "0 auto",
        maxWidth: "500px",
        minWidth: "100px",
        textAlign: "center"
    },
    TextFieldStyle: {
        "marginBottom": "30px"
    },
    PaperStyle: {
        width: "100%",
        height: "100%"
    },
    BackButtonStyle: {
        margin: "40px 40px"
    }
};

class Login extends React.Component {
    goBack(params) {
        console.log(params);
        hashHistory.goBack()
    }
    render() {
        return <MTP>
            <Paper style={style.PaperStyle}>
                <FloatingActionButton style={style.BackButtonStyle} onClick={this.goBack}>
                    <BackButton />
                </FloatingActionButton>
                <div style={style.mainBlock}>
                    <TextField style={style.TextFieldStyle}
                        hintText="User name"
                    />
                    <br/>
                    <TextField style={style.TextFieldStyle}
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
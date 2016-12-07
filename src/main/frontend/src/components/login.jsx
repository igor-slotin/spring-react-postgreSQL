import React from 'react';
import MTP from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import BackButton from 'material-ui/svg-icons/navigation/arrow-back';
import { hashHistory } from 'react-router';
import Snackbar from 'material-ui/Snackbar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/login';
import auth from '../services/auth'

const style = {
  mainBlock: {
    padding: '4em',
    margin: "auto",
    maxWidth: "500px",
    minWidth: "100px",
    textAlign: "center"
  },
  TextFieldStyle: {
    "marginBottom": "30px"
  },
  BackButtonStyle: {
    margin: "40px 40px"
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.checkAuth()
  }

  changeUsername(e) {
    this.props.actions.setUsername(e.target.value)
  }

  checkAuth() {
    if (!auth.isEmpty()) {
      hashHistory.push('/user');
    }
  }

  changePassword(e) {
    this.props.actions.setPassword(e.target.value)
  }

  submitForm() {
    this.props.actions.login(this.props.login.username, this.props.login.password);
  }

  goBack() {
    hashHistory.goBack()
  }

  componentWillReceiveProps() {
    this.checkAuth();
  }

  render() {
    return (<div>
      <MTP>
        <div>
          <FloatingActionButton style={style.BackButtonStyle} onClick={this.goBack}>
            <BackButton />
          </FloatingActionButton>
          <div style={style.mainBlock}>
            <TextField style={style.TextFieldStyle}
                       hintText="User name"
                       value={this.props.login.username}
                       onChange={this.changeUsername.bind(this)}
            />
            <br/>
            <TextField style={style.TextFieldStyle}
                       type="password"
                       hintText="Password"
                       value={this.props.login.password}
                       onChange={this.changePassword.bind(this)}
            />
            <RaisedButton onClick={this.submitForm.bind(this)} label="LOGIN" fullWidth={true}/>
          </div>
        </div>
      </MTP>
      <MTP>
        <Snackbar
          open={this.props.login.message}
          message={this.props.login.messageText}
        />
      </MTP>
    </div>);
  }
}

function mapToProps(state) {
  return {
    login: state.login
  }
}
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapToProps, mapDispatch)(Login);
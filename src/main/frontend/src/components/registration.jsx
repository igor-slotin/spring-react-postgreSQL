import React from 'react';
import Paper from 'material-ui/Paper';
import MTP from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import BackButton from 'material-ui/svg-icons/navigation/arrow-back';
import { hashHistory } from 'react-router';
import { bindActionCreators } from  'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/registration'
import Snackbar from 'material-ui/Snackbar';


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

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.actionRegistration = this.props.actions.registration;
    this.message = props.message;
  }

  changeUserName(event) {
    this.props.actions.inputUsername(event.target.value);
  }

  changePassword(event) {
    this.props.actions.inputPasswords(event.target.value, this.props.confirmPassword);
  }

  changeConfirmPassword(event) {
    this.props.actions.inputPasswords(this.props.password, event.target.value);
  }

  goBack() {
    hashHistory.goBack()
  }

  registration() {
    this.actionRegistration(this.props.username, this.props.password);
  }

  render() {
    return <MTP>
      <Paper style={style.PaperStyle}>
        <FloatingActionButton style={style.BackButtonStyle} onClick={this.goBack}>
          <BackButton />
        </FloatingActionButton>
        <div style={style.mainBlock}>
          <TextField value={this.props.username} style={style.TextFieldStyle}
                     hintText="User name"
                     onChange={this.changeUserName.bind(this)}

          />
          <br/>
          <TextField value={this.props.password} style={style.TextFieldStyle}
                     hintText="Password"
                     type="password"
                     onChange={this.changePassword.bind(this)}

          />
          <TextField value={this.props.confirmPassword} style={style.TextFieldStyle}
                     type="password"
                     hintText="Confirm password"
                     onChange={this.changeConfirmPassword.bind(this)}
                     errorText={this.props.passwordFailure}

          />

          <RaisedButton disabled={this.props.signUpDisabled} onClick={this.registration.bind(this)} label="SIGN UP"
                        fullWidth={true}/>

          <Snackbar
            open={this.props.message}
            message={this.props.messageText}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />

        </div>
      </Paper>
    </MTP>;
  }
}


function mapStateToProps(state) {
  return state.registration;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }

}


export default connect(mapStateToProps, mapDispatch)(Registration);
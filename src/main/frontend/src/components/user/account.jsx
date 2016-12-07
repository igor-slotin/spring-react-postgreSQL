import React, {Component} from 'react'

import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { toNumber, isNumber, isNaN } from 'lodash';

const style = {
  accauntBlock: {
    margin: '200px auto',
    maxWidth: '500px'
  },
  paper: {
    padding: '12px'
  }
};

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorText: '',
      lastValue: null
    }
  }
  attachValue(e) {
    let parsedVal = toNumber(e.target.value);
    if (isNaN(parsedVal) ) {
      this.setState({
        lastValue: parsedVal,
        errorText: 'Only numbers is available'
      });
      return;
    }
    this.setState({
      lastValue: parsedVal,
      value: parsedVal,
      errorText: ''
    });
  }

  increase() {
    if (!isNaN(this.state.lastValue) && this.state.value != '') {
      this.props.increaseBalance(this.state.value);
    }
  }
  render() {
    return <div style={style.accauntBlock}>
      <Paper style={style.paper} zDepth={2} >
        <div>
          <span>Your balance is {this.props.balance}</span>
        </div>
        <TextField
          hintText=""
          floatingLabelText="Increase balance" onChange={this.attachValue.bind(this)}
          errorText={this.state.errorText}
        />
        <div>
          <FlatButton label="Increase" secondary={true} onClick={this.increase.bind(this)} value={this.state.value}/>
        </div>
      </Paper>
    </div>
  }
}

export default Account;
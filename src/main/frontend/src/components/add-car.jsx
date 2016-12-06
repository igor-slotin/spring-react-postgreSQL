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
import * as actions from '../actions/add-car'
import Snackbar from 'material-ui/Snackbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


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

class AddCar extends React.Component {
  constructor(props) {
    super(props);
    this.years = this.generateYears();
  }

  generateYears() {
    const years = [];
    const depthYears = 60;
    const currentYear = new Date().getFullYear();
    const initialValue = currentYear - depthYears;

    for (let count = 0; count <= depthYears; count++) {
      years.push(initialValue + count)
    }

    return years;
  }

  changeModel(event) {
    this.props.actions.changeModel(event.target.value);
  }

  changeYear(event, key, payload) {
    this.props.actions.changeYear(payload);
  }

  changeColor(event) {
    this.props.actions.changeColor(event.target.value);
  }

  changePrice(event) {
    this.props.actions.changePrice(event.target.value);
  }

  goBack() {
    hashHistory.goBack()
  }

  addCar() {
    let { model, color, price, year } = this.props;
    this.props.actions.addCar({ model, color, price, year });
  }

  render() {
    return <MTP>
      <Paper style={style.PaperStyle}>
        <FloatingActionButton style={style.BackButtonStyle} onClick={this.goBack}>
          <BackButton />
        </FloatingActionButton>
        <div style={style.mainBlock}>
          <TextField value={this.props.model} style={style.TextFieldStyle}
                     hintText="Model"
                     onChange={this.changeModel.bind(this)}
          />
          <br/>
          <SelectField
            value={this.props.year}
            onChange={this.changeYear.bind(this)}
            maxHeight={200}
          >{
            this.years.map((year) => {
              return <MenuItem value={year} key={year} primaryText={`${year}`}/>
            })
          }
          </SelectField>

          <TextField value={this.props.color} style={style.TextFieldStyle}
                     hintText="Color"
                     onChange={this.changeColor.bind(this)}
          />
          <br/>
          <TextField value={this.props.price} style={style.TextFieldStyle}
                     hintText="Price"
                     onChange={this.changePrice.bind(this)}
          />

          <RaisedButton disabled={this.props.signUpDisabled} onClick={this.addCar.bind(this)} label="ADD CAR"
                        fullWidth={true}/>

          <Snackbar
            open={this.props.message}
            message={this.props.messageText}
          />

        </div>
      </Paper>
    </MTP>;
  }
}


function mapStateToProps(state) {
  return state.addCar;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatch)(AddCar);
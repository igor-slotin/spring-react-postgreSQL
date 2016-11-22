import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/home'

class Home extends Component {
    constructor(props) {
        super(props);
        this.props.actions.getCars();
    }
    render() {
        console.log(this.props);
        return <h1>Hello, {this.props.cars.data.length}</h1>
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatch)(Home);
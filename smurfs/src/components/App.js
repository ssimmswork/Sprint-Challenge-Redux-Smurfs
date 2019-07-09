import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/index'
import SmurfForm from './SmurfForm'


class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs smurfs ={this.state.smurfs}/>
        <SmurfForm addSmurf = {this.props.handleSubmit}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect (
  mapStateToProps,
  {fetchSmurfs}
)(App)


